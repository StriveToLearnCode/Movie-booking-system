import request from "@/utils/request";

export const reqUserList = () => {
  return request({
    url: "/system/userList",
    method: "get",
  });
}

export const reqDelUser = (id) => {
  return request({
    url: "/system/deleteUser",
    method: "delete",
    data: { id }
  });
}

export const reqAddNewUser = (data) => {
  return request({
    url: "/system/addNewUser",
    method: "post",
    data
  })
}


export const reqChangeRoot = (data) => {
  return request({
    url: "/system/changeRoot",
    method: "post",
    data
  })
}

export const reqAddCinema = (data) => {
  return request({
    url: "/system/addCinema",
    method: "post",
    data
  })
}

export const reqDelCinema = (id) => {
  return request({
    url: '/system/deleteCinema',
    method: "delete",
    data: { id }
  })
}

export const reqAddFilm = (data) => {
  return request({
    url: '/system/addMovie',
    method: "post",
    data
  })
}

export const reqDelFilm = (id) => {
  return request({
    url: '/system/deleteMovie',
    method: "delete",
    data: { id }
  })
}