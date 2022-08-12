const headerEl = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        headerEl.style.background = 'transparent'
    } else {
        headerEl.style.background = '#252323'
    }
})