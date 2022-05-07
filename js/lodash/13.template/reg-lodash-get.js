const _ = require('../4.get/get');

function render(template, data) {
    const res = template.replace(/{{(.*?)}}/g, (match, p) => {
        return _.get(data, p.trim());
    });

    return res;
}

const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}';

const data = {
  user: {
    id: 10086,
    name: '山月',
  }
};

//=> "山月，今天你又学习了吗 - 用户ID: 10086"
console.log(render(template, data));