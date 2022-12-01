const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)')
const menuToggle = document.getElementById('navbarMenu')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if (bsCollapse._isShown()) {
            bsCollapse.hide()
        }
    })
})


// const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)')
// const menuToggle = document.getElementById('navbarMenu')
// const bsCollapse = new bootstrap.Collapse(menuToggle, {
//     toggle: false
// })
// navLinks.forEach(function (l) {
//     l.addEventListener('click', function () {
//         if (menuToggle.classList.contains('show')) {
//             bsCollapse.toggle()
//         }
//     })
// })
