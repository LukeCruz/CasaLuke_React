/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-unused-vars
export default function onScroll (){
    onScrollMenu()
    onScrollToTop()
}

function onScrollMenu () {

const scroll = document.getElementById('navigation');

    if (scrollY > 0) {
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
}

function onScrollToTop (){
    const scrollToTop = document.getElementById('buttonFloat')

    if (scrollY > 400) {
        scrollToTop.classList.add('show')
    } else {   
        scrollToTop.classList.remove('show')}
}

// eslint-disable-next-line no-unused-vars
function openMenu () {
document.body.classList.add('menu-expanded')}
// eslint-disable-next-line no-unused-vars
function closeMenu () {
    document.body.classList.remove('menu-expanded')}

    // eslint-disable-next-line no-undef
    ScrollReveal({
        origin: 'top',
        distance: '3px',
        duration: 1500,

    }).reveal(
        `#homePage,
        #homePage h4,
        #homePage h1,
        #homePage h3,
        #homePage img,
        #homePage #buttonTop,
        #homePage .containerInfo,
        #homePage .artigos,
        #homePage .about,
        buttonFloat`);


        // eslint-disable-next-line no-undef
        ScrollReveal({
            origin: 'top',
            distance: '3px',
            duration: 2000,
    
        }).reveal(
            `#homePage p,
            #homePage imageSobreNos,
            #homePage button
           `);