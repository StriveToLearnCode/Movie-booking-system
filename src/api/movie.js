import request from "@/utils/request";

export const reqMovieList = () => {
  return request({
    url: "/movie/list",
    method: "get",
  });
}