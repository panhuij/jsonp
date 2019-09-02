function string(params) {
    let str = "";
    for (var key in params) {
        str += `${key}=${params[key]}&`;
    }
    str += "callback=jsonCallback";
    return str;
}

const defalutConfig = {
    callbackname: "jsonCallback"
};

const jsonp = (url, params, option = defalutConfig) => {
    // 返回一个可以链式调用的promise对象
    return new Promise((resolve, reject) => {
        //将前端传递querystring查询字符串的参数，拼接到地址栏
        url =
            url.indexOf("?") === -1
                ? url + "?" + string(params)
                : string(params);
        //动态创建script标记
        const script = document.createElement("script");
        //设置接口的请求地址
        script.setAttribute("src", url);
        //设置请求jsonp接口的回调函数
        window[option.callbackname] = res => {
            //请求jsonp接口成功后，删除该函数 - 不污染window
            delete window[option.callbackname];
            //从页面中删除请求接口动态创建的script标记
            document.body.removeChild(script);
            //判断接口的数据返回
            if (res) {
                resolve(res);
            } else {
                reject("服务器没有返回数据");
            }
        };

        //动态创建script标记，错误的监听
        script.addEventListener("error", () => {
            delete window["jsonpCallback"];
            document.body.removeChild(script);
            reject("服务器加载失败！");
        });
        document.body.appendChild(script);
    });
};
// const jsonp = (url, params) => {
//     const script = document.createElement("script");
//     url = url.indexOf("?") === -1 ? url + "?" + string(params) : string(params);
//     script.setAttribute("src", url);
//     document.body.appendChild(script);

// };

// const jsonCallback = res => {
//     console.log(res);
// };
