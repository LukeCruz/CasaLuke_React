export default function onScroll (){
    onScrollMenu()
    onScrollToTop()
};

function onScrollMenu () {
    const scroll = document.getElementById('navigation');

    if (scrollY > 0) {
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
};

function onScrollToTop (){
    const scrollToTop = document.getElementById('buttonFloat')

    if (scrollY > 400) {
        scrollToTop.classList.add('show')
    } else {   
        scrollToTop.classList.remove('show')}
};