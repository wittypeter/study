const Vue = require('./vue');

const vm = new Vue({
    data() {
        return {
            message: 'hello'
        }
    }
})

vm.mount();

vm._data.message = 'world';
vm._data.hi = 'jingjing'
vm._data.message = 'worlfsdf';