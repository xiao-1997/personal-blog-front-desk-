import request from "./request";

export async function getBanners() {
  //访问开发服务器
  return await request.get("/api/banner")//不写死，在访问时可以不修改域名
}