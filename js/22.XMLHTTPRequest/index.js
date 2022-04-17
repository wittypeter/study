const xhr = new XMLHttpRequest();

// xhr.setRequestHeader('');

xhr.open('GET', 'http://www.baidu.com');

xhr.send();

xhr.onreadystatechange = function(state) {
    if (xhr.readyState === XMLHttpRequest.DONE) {

    }
}

xhr.onprogress
