import request from "./request"

export async function getMessages(page = 1, limit = 10) {
  return await request.get("/api/message", {
    //获取留言板所有消息
    params: {
      page,
      limit
    },
  });
}

export async function postMessage(msgInfo) {
  //提交留言板消息
  return await request.post("/api/message", msgInfo)
}