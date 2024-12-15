import request from "@/utils/request";
export const reqUserInfo = () => {
  return request({
    url: "/my/userInfo",
    method: "get",
  });
}