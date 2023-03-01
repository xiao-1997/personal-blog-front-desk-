import eventBus from "@/eventBus";//监听事件
import { debounce } from "@/utils";//节流
import defaultGif from "@/assets/default.gif";//默认图片

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif;
  //获取窗口高度
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  //获取图片高度，当图片没加载时默认高度为150px
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    //要处理的图片top要大于-150px/-图片高度
    //并且压迫在窗口中间
    const tempImg = new Image();
    tempImg.onload = function () {
      //当加载完成替换默认图片
      img.dom.src = img.src;
    }

    //要显示默认图片，防止图片瞬间加载完成
    //提前加载图片，当加载完成替换默认图片
    tempImg.src = img.src;

    //返回当前页面还没处理的图片
    imgs = imgs.filter((i) => i !== img);
  }
};

// 希望，调用该函数，就可以设置那些合适的图片
function setImages() {
  for (const img of imgs) {
    // 遍历没处理的，处理每一张图片
    setImage(img);
  }
};

function handleScroll() {
  //当滚动条滚动时执行
  setImages();
};

eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
  inserted(el, bindings) {
    const img = {
      //获取绑定对象的dom，src地址
      dom: el,
      src: bindings.value
    };
    imgs.push(img);
    setImages(img); // 遍历没处理的，处理每一张图片
  },
  unbind(el) {
    //删除上一页数据，返回当前页数据
    imgs = imgs.filter((i) => i.dom !== el);
  }
}