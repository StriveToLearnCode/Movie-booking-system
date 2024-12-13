import request from "@/utils/request";

export const reqLogin = (data) => {
  return request({
    url: "/api/login",
    method: "post",
    data,
  });
}

export const reqRegister = (data) => {
  return request({
    url: "/api/register",
    method: "post",
    data,
  });
}