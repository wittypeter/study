// fucntion_axios(method, url, data).then()

function axios(method, url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method.toUpperCase(), url);

        xhr.send(data);

        xhr.ontimeout = function(e) {
            reject(e);
        }

        xhr.onerror = function(e) {
            reject(e);
        }

        xhr.onload = function() {
            // TODO: 解析
            resolve(xhr.responseText);
        }
    });
}

axios('GET', 'https://www.baidu.com', { hello: 'test' }).then(console.log, console.error);