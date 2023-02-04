function open_submenu() {
	//let block_id = el.textContent;
	//document.querySelector(".popup .text_block span.block_id_popup").innerHTML = block_id;
	if ($(".mobile_menu .popup .menu .submenu").hasClass("sub_active")) {
    let submenu = document.querySelector(".mobile_menu .popup .menu .submenu");
    submenu.classList.remove("sub_active");
  } else {
    let submenu = document.querySelector(".mobile_menu .popup .menu .submenu");
    submenu.classList.add("sub_active");
  }
};
function popup(el) {
	//let block_id = el.textContent;
	//document.querySelector(".popup .text_block span.block_id_popup").innerHTML = block_id;
	if(el != ""){
		$(".popup_form .popup #spec_feedback").val(el);
	}
	let popupBg = document.querySelector(".popup_form.popup_bg");
	let popup = document.querySelector(".popup_form .popup");
	popupBg.classList.add("popup_bg_active");
	popup.classList.add("popup_active");
};
function mobile_menu() {
	//let block_id = el.textContent;
	//document.querySelector(".popup .text_block span.block_id_popup").innerHTML = block_id;
	let popupBg = document.querySelector(".mobile_menu.popup_bg");
	let popup = document.querySelector(".mobile_menu .popup");
	popupBg.classList.add("popup_bg_active");
	popup.classList.add("popup_active");
};

function close_popup() {
	$(".popup_form .popup #spec_feedback").val("");
	let popupBg2 = document.querySelector(".popup_form.popup_bg");
	let popup2 = document.querySelector(".popup_form .popup");
	popupBg2.classList.remove("popup_bg_active");
	popup2.classList.remove("popup_active");
};
function close_popup_menu() {
	let popupBg2 = document.querySelector(".mobile_menu.popup_bg");
	let popup2 = document.querySelector(".mobile_menu .popup");
	popupBg2.classList.remove("popup_bg_active");
	popup2.classList.remove("popup_active");
};
$(document).ready(function ($) {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }

    ]
  });
  $(".slider_specialists").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider_comments").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
