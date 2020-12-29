import { isArray, isObject, forOwn, omit } from "lodash";
import { getDict } from "../api/dict";

const serialize = (data) => {
  let list = [];
  Object.keys(data).forEach((ele) => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join("&");
};

// 将时间戳转日期格式的过滤器
const dateFormat = (dataStr) => {
  var time = new Date(dataStr);

  function timeAdd0(str) {
    if (str < 10) {
      str = "0" + str;
    }
    return str;
  }

  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return (
    y +
    "-" +
    timeAdd0(m) +
    "-" +
    timeAdd0(d) +
    " " +
    timeAdd0(h) +
    ":" +
    timeAdd0(mm) +
    ":" +
    timeAdd0(s)
  );
};

//数组去重
const dubRemove = (arr) => {
  let res = [];
  let repeat = [];
  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].name;
    if (!repeat[name]) {
      res.push(arr[i]);
      repeat[name] = 1;
    }
  }
  return res;
};

/**
 * @method 删除对象数组中对象的属性为空
 * @param {*} input 需要处理的数组
 * @param {*} props 需要删除的属性
 */
const omitDeepLodash = function(input, props) {
  let p = props;
  function omitDeepOnOwnProps(obj) {
    if (!isArray(obj) && !isObject(obj)) {
      return obj;
    }

    if (isArray(obj)) {
      return omitDeepLodash(obj, p);
    }

    const o = {};
    forOwn(obj, (value, key) => {
      o[key] = omitDeepLodash(value, p);
    });

    if (isArray(o[p]) && o[p].length === 0) {
      return omit(o, p);
    } else {
      return o;
    }
  }

  if (arguments.length > 2) {
    p = Array.prototype.slice.call(arguments).slice(1);
  }

  if (typeof input === "undefined") {
    return {};
  }

  if (isArray(input)) {
    return input.map(omitDeepOnOwnProps);
  }

  return omitDeepOnOwnProps(input);
};

/**
 * @method 根据字典名获取字典条目列表
 * @param {*} dict 字典名
 */
const getDictItemList = async (dict) => {
  let dictItem = [];
  let params = {
    filtertext: dict,
  };
  await getDict(params).then((res) => {
    let list = res.data;
    dictItem = list.map((o) => {
      return { value: o.dictKey, label: o.dictValue };
    });
  });
  return dictItem;
};

/**
 * @method 根据字典名获取字典条目,以键值对返回
 * @param {*} dict 字典名
 */
const getDictItemObject = async (dict) => {
  let dictItem = {};
  let params = {
    filtertext: dict,
  };
  await getDict(params).then((res) => {
    let list = res.data;
    list.map((o) => {
      dictItem[o.dictKey] = o.dictValue;
    });
  });
  return dictItem;
};

export {
  serialize,
  dateFormat,
  dubRemove,
  omitDeepLodash,
  getDictItemList,
  getDictItemObject,
};
