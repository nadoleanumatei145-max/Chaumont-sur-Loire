let tit = document.querySelector('#hero h1');
let st = '';
for (let i = 1; i <= 8; i++) {
    st = st + `0 ${i}px 0 #2D3142,`;
}
st = st.slice(0, -1);
tit.style.textShadow = st;

let checkbox = document.querySelector('input[type="checkbox"]');
let fr = document.querySelectorAll('.fr');
let ro = document.querySelectorAll('.ro');
checkbox.checked = false;
if(checkbox.checked){
    ro.forEach(item => {
        item.style.display = 'block';
    })
    fr.forEach(item => {
        item.style.display = 'none';
    })
} else {
    ro.forEach(item => {
        item.style.display = 'none';
    })
    fr.forEach(item => {
        item.style.display = 'block';
    })
}

checkbox.addEventListener('change', e => {
    if(checkbox.checked){
        ro.forEach(item => {
            item.style.display = 'block';
        })
        fr.forEach(item => {
            item.style.display = 'none';
        })
    } else {
        ro.forEach(item => {
            item.style.display = 'none';
        })
        fr.forEach(item => {
            item.style.display = 'block';
        })
    }

})

let menuToggle = document.getElementById('menu-toggle');
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});