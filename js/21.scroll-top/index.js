console.log('hello')


const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
let scrollTop = 0;
let handler;

const btn = document.querySelector('.btn-top');
window.addEventListener('scroll', function(e) {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollTop > clientHeight) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

function onGoToTop() {
    console.log('onGoToTop')

    handler = setInterval(() => {
        const toTop = Math.floor(scrollTop / 7);
        
        if (!toTop) {
            document.documentElement.scrollTop = 0;
            clearInterval(handler);
        } else {
            document.documentElement.scrollTop = scrollTop - toTop;
        }
    }, 30);
}