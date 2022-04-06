
class UserCard extends HTMLElement {
    constructor() {
        super();

        console.log('start');

        var shadow = this.attachShadow({ mode: 'closed' });
        const template = document.getElementById('userCard');
        const clonedTemplate = template.content.cloneNode(true);

        shadow.append(clonedTemplate);

        Vue.component('PersonDance', {
            template: '<div><button @click="dance">person dance</button></div>',
            methods: {
                dance() {
                    console.log('person dance');
                }
            }
        });

        const vm = new Vue({
            template: `<div><span>name: {{ name }}</span><span>age: {{ age }}</span><button @click="onSay">say</button><PersonDance></PersonDance></div>`,
            data() {
                return {
                    name: 'peter',
                    age: 28
                }
            },
            methods: {
                onSay() {
                    console.log(`hello!, i'm ${this.name}, ${this.age} years old`)
                }
            },
        });

        vm.$mount(shadow.querySelector('#app'));

        console.log('finished')
    }
}

window.customElements.define('user-card', UserCard);