import request from "@/utils/request";

export const reqAddOrder = (data) => {
  return request({
    url: "/my/order/addToOrder",
    method: "post",
    data
  });
};