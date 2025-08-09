let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            // remove animation class when section is not in view (if you want repeat animation)
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', top > 100);

    // remove toggle icon and navbar when user scrolls
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

// animation footer on scroll
let footer = document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

