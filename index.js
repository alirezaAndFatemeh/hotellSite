//               .......................... header ..............................

// nav   word animation  with jQuery
$(function() {
    $(".nav-background ")
    .css({ "background-color":"#6fb586 ", "height": "1.3px", "width":" 0", "margin-top" :"10px"})


    $(".ul-nav li").mouseenter(function(){
        $(".nav-background" ,this).animate({ width:"100%" } ,"slow")
    })

    $(".ul-nav li").mouseleave(function(){
        $(".nav-background").animate({ width:"0%" },"slow")
    }) 
})

//nav-more word animation  with jQuery
$(function() {
  $(".nav-more ")
  .css({ "background-color":"#6fb586 ", "height": "1.3px", "width":" 0", "margin-top" :"10px"})


  $("#box-more li").mouseenter(function(){
      $(".nav-more" ,this).animate({ width:"100%" } ,"fast")
  })

  $("#box-more li").mouseleave(function(){
      $(".nav-more").animate({ width:"0%" },"fast")
  }) 
})


//              ............................ menu ............................

//menu drawer
$(document).ready(function(){
  
  $(".menu-hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
   
  $('.menu').click(function(){
    if($('.menu').hasClass("active")){
      close()
    }else{
      open()
    }
  });
})

function close() {
  $('.menu').removeClass("active")
    $('.menu-drawer').animate(
      {
        width: "0",
        height:"100vh"
      },100)
  
    $(".menu").animate(
      {
        marginRight : '0vw'
    },'slow')
}

function open(){
  $('.menu').addClass("active");
    $('.menu-drawer').animate(
      {
        width: "20vw",
        height:"100vh"
      },'slow')

   $(".menu").animate(
    {
      marginRight : '10vw'
    },'slow')
}

// menu   word animation  with jQuery
$(function() {
  $(".menu-background ")
  .css({ "background-color":"#6fb586 ", "height": "1.3px", "width":" 0"})


  $(".padding a").mouseenter(function(){
      $(".menu-background" ,this).animate({ width:"70%" } ,"fast")
  })

  $(".padding a").mouseleave(function(){
      $(".menu-background").animate({ width:"0%" },"fast")
  }) 
})

//           ............................... slider 1 owlCarousel ................................

$(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        outwidth: true,
        autoplay: true,
        slidespeed: 1000,
        autoplayTimeout: 10000,
        autoplaySpeed: 2000,
        dots: true,
        navText:['<span class="iconify prev-slide" data-icon="ooui:previous-ltr"></span>',"<span class='iconify next-slide' data-icon='ooui:previous-rtl'></span>"]
    });
        
});

//             ..................................... formData ...................................

// date datepicker
$(function() {
  $( "#datepicker" ).datepicker();
  $( "#datepicker-1" ).datepicker();
})

// modals ajax
$(".form-btn").click(function(e) {
  e.preventDefault();
  const checkInDate = $("#datepicker").val();
  const checkOutDate = $("#datepicker-1").val();
  const objcheckInDate = new Date(checkInDate).getTime();
  const objcheckOutDate = new Date(checkOutDate).getTime();
  const number = $("#rooms").val();
  $.ajax({
    method: "GET",
    url:"./assets/json/rooms.json",
    success: function(result) {
      

      result.map(index => {
        
        const formDate =new Date(index.from).getTime();
        const toDate =new Date(index.to).getTime();
        
        
        if(objcheckInDate>=formDate && toDate>=objcheckOutDate && number==index.bed) {
           $(".modal-msg").css({display: "block"})
          const trindex =
            `
            <tr>
              <td>${index.from}</td>
              <td>${index.to}</td>
              <td>${index.room}</td>
              <td>${index.bed}</td>
            </tr>
            `
          $("#table-tbody").append(trindex)
          $("#table-tbody tr:last").css("background-color", "yellow");
        } else {
          const trindex =
          `
            <tr>
              <td>${index.from}</td>
              <td>${index.to}</td>
              <td>${index.room}</td>
              <td>${index.bed}</td>
            </tr>
            `
          $("#table-tbody").append(trindex)
        }
      })
    }

  })
})



//                ................................. slider2 ..................................

//slider2 js
const dots = new Array(...document.getElementsByClassName("dot"));
const items = new Array(...document.querySelectorAll(".slider2 > div"));

function setDisplayNoneInSlider2Items() {
    items.map(e => {
        e.style.display = "none";
    })
}

function deleteClassDotActiveFromDots() {
    dots.map(e => {
      e.childNodes[1].classList.remove("dot-active");
    })
}

dots.forEach(item => {
    item.onclick = function() {
      const element = items.filter(x => x.id === this.attributes.name.nodeValue)[0];
      setDisplayNoneInSlider2Items();
      deleteClassDotActiveFromDots();
      element.style.display="flex";
      this.childNodes[1].classList.add("dot-active");
    }
})

//slider2  word animation  with jQuery
$(function() {
    $(".slider2-background ")
    .css({ "background-color":"#6fb586 ", "height": "1.3px", "width":" 0%", "margin-top" :"10px"})


    $(".slider2-btn").mouseenter(function(){
        $(".slider2-background" ,this).animate({ width:"100%" } ,"slow")
    })

    $(".slider2-btn").mouseleave(function(){
        $(".slider2-background").animate({ width:"0%"},"slow")
    }) 
})



//              .....................................slider3 jQuery......................................

$(function () {
    function next() {
        let carousel = $('.slider3-carousel .next').parents('.slider3-carousel')
        let index = $(carousel).find('.carousel-item.active').index()
        let content = $(carousel).find('.carousel-content')
        const length_items =  $(carousel).find('.carousel-item').length
        if (index < length_items-1 ){
            $(content).css('transform', `translate(${(index+1)*-100}%)`)
            $(carousel).find('.carousel-item.active').removeClass('active')
            $(carousel).find('.carousel-item').eq(index+1).addClass('active')
        }
    }
    $('.slider3-carousel .next').click(next)


    $('.slider3-carousel .prev').click(function () {
        let carousel = $(this).parents('.slider3-carousel')
        let index = $(carousel).find('.carousel-item.active').index()
        let content = $(carousel).find('.carousel-content')
        if (index > 0 ){
            $(content).css('transform', `translate(${(index-1)*-100}%)`)
            $(carousel).find('.carousel-item.active').removeClass('active')
            $(carousel).find('.carousel-item').eq(index-1).addClass('active')
        }
    })
})


//            .........................................pointer to up.......................................
if ($(window).scrollTop() == 0) {
  $("body > a").css("display", "none");
}

$(window).scroll(function() {
  if ($(window).scrollTop() == 0) {
      $("body > a").css("display", "none");
  } else {
      $("body > a").css("display", "block");
  }

})