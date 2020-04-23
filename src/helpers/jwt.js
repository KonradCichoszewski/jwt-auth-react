export const getToken = () => {
  return localStorage.getItem("token");
}

export const getRefresh = () => {
  return localStorage.getItem("refresh");
}