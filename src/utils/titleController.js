let routeTitle = "",
  siteTitle = "";

//控制页面标题
function setTitle() {
  if (!routeTitle && !siteTitle) {
    //两个都没加载出来
    document.title = "loding...";
  } else if (!routeTitle && siteTitle) {
    //其中一个没加载出来
    document.title = siteTitle;
  } else if (routeTitle && !siteTitle) {
    //其中一个没加载出来
    document.title = routeTitle;
  } else {
    document.title = `${routeTitle}-${siteTitle}`;
  }
}

export default {
  //页面标题
  setRouteTitle(title) {
    routeTitle = title;
    setTitle()
  },
  //网站标题
  setSiteTitle(title) {
    siteTitle = title;
    setTitle()
  },
};