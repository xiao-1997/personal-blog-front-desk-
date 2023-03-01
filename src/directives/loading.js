import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";


//获取加载图标
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]")
}


//创建加载图标
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";//添加自定义标签
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}

export default function (el, bingding) {
  const curImg = getLoadingImage(el);
  if (bingding.value) {
    if (!curImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}