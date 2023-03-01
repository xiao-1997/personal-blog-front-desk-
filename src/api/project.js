import request from "./request.js";

export async function getProjects() {
  return await request("/api/project");
}