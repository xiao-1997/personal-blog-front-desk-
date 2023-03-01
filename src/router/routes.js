import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from "@/views/NotFound.vue";

configure({
  trickleSpeed: 20,//进度条速度
  showSpinner: false,//进度条不加载圆圈
})

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

function getPageComponent(duration) {
  return async () => {
    start();//进度条出现
    if (process.env.NODE_ENV === 'production') {
      delay(2000);
    }
    const comp = await duration();
    done();//进度条消失
    return comp
  }
}

export default [
  //path,当匹配到这个名时，切换到component组件
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import("@/views/Home")),//路由懒加载
    meta: {
      title: "首页"
    }
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import("@/views/About")),
    meta: {
      title: "关于我"
    }
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
      title: "文章"
    }
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() => import("@/views/Blog")),
    meta: {
      title: "文章"
    }
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() => import("@/views//Blog/Detail")),
    meta: {
      title: "文章详情"
    }
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "project" */ "@/views/Project")),
    meta: {
      title: "项目&效果",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ "@/views/Message")),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound
  },
];