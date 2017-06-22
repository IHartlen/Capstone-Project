function OpenNav(){
  $(".overlay").toggleClass("show");
}

$(".hamburger").on('click', OpenNav)
$(".close-nav").on('click', OpenNav)
