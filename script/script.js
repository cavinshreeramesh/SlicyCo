const navlink=document.querySelectorAll('.leftnav a');

navlink.forEach(link => {
    link.addEventListener('click', function(){
        navlink.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    })
})

const filterBtn=document.querySelectorAll('#filters button');

filterBtn[0].classList.add('active');

filterBtn.forEach(btn=>{
    btn.addEventListener('click', function(){
        filterBtn.forEach(btn=>btn.classList.remove('active'));
        this.classList.add('active');
    })
})

var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
