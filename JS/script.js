
var plato =[
  '"Now listen," he said. "I say that the just is nothing other than the advantage of the stronger."',
  '"The idea of the good is the greatest study"' ,
  '"Dont you believe that the true pilot will really be called a stargazer?"'
]

var aristotle = [
  '"Man is by nature a poltical animal"',
  '"Nature does nothing uselessly"',
]

// var quote = plato[Math.floor(Math.random() * plato.length)];


function GetQuote(){
  // $("#plato").toggleClass(".fade");
  var quote = plato[Math.floor(Math.random() * plato.length)];
  $(".quote").html("" + quote + "");
  console.log(quote);
}

function RemoveQuote(){
  $(".quote").html("");
}

$(".img-books").on('mouseover', GetQuote)
$(".img-books").on('mouseleave', RemoveQuote)


//hamburger nav
function OpenNav(){
  $(".overlay").toggleClass("show");
}

$(".hamburger").on('click', OpenNav)
$(".close-nav").on('click', OpenNav)
