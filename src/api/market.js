import request from "@/router/axios";

const getListWithoutToken = (data) => {
  return request({
    url: "/dev-api/asset-market/marketapp/token/listWithoutToken",
    method: "GET",
    params: {
      current: data.current,
      size: data.size,
      tenantCode: data.tenantCode,
    },
  });
};

const getListDetail = (data) => {
  return request({
    url: "/dev-api/asset-market/marketapp/token/detail",
    method: "GET",
    params: {
      id: data.id,
    },
  });
};

export { getListWithoutToken,getListDetail };
