import request from "@/utils/request";

export const reqCinemaList = () => {
  return request({
    url: "/cinema/list",
    method: "get",
  });
};
