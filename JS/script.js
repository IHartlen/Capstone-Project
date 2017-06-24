
var plato =[
  '"The idea of the good is the greatest study"' ,
  '"Dont you believe that the true pilot will really be called a stargazer?"',
  '"As being is to becoming, so is pure intellect to opinion"',
  '"The power and capacity of learning exists in the soul already"',
  '"I propose therefore that we enquire into the nature of justice and injustice"'
]

var aristotle = [
  '"Man is by nature a poltical animal"',
  '"Nature does nothing uselessly"',
]



function GetQuote(){
  var quote = plato[Math.floor(Math.random() * plato.length)];
  $(".quote").html("" + quote + "");
  // $(".quote").css("visibility" , "visible");
  $(".quote").css("opacity" , "1");
  console.log(quote);
}

function RemoveQuote(){
  // $(".quote").html("");
  $(".quote").css("opacity" , "0");
}

$(".img-books").on('mouseover', GetQuote)
$(".img-books").on('mouseleave', RemoveQuote)


//hamburger nav
function OpenNav(){
  $(".overlay").toggleClass("show");
}

$(".hamburger").on('click', OpenNav)
$(".close-nav").on('click', OpenNav)
