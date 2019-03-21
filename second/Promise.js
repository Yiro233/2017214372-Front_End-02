function promise() {
    const Ajax = function (method, url, ...rest) {
        const promise = new Promise(function (resolve, reject) {
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.reponse);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const xhr = new XMLHttpRequest();
            xhr.open(method.toUpperCase(), url);
            xhr.onreadystatechange = handler;
            xhr.responseType = rest[1];
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(rest[0]|"");
        });
        return promise;
    };
    Ajax("", "",{},"").then(function (json) {//选择请求方式以及提交参数和设置响应类型
        console.log("Contents: " + json);
    }, function (error) {
        console.error("出错了", error);
    });
}
