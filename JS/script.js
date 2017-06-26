
// quote arrays
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
  '"For friendship we believe to be the greatest good of states"'
]
var machiavelli = [
  '"Is it better to be loved than feared, or vice versa?"',
  '"All armed prophets have been victorious, and all unarmed prophets have been destroyed"',
]
var hobbes = [
  '“The first and fundamental law of Nature, which is, to seek peace and follow it.”',
  '"Covenants without the sword are but words and of no strength to secure a man at all."',
  '"The passions of men are commonly more potent than their reason.""'
]
var rousseau = [
  '"Man was born free, and everywhere he is in chains"',
  '"Those that think themselves the masters are indeed greater slaves than they"',
  '"The strongest is never strong enough to be always the master, unless he transforms strength into right, and obedience into duty"',
]
var nietzsche = [
  '"The belly is the reason man does not so eaily take himself to be a god"',
  '"In all desire to know there is already a drop of cruelty"',
  '"Does one not write books precisely to conceal what lies within us?"',
  '"Perhaps no one has ever been sufficiently truthful about what truthfulness is"',
  '"He who fights with monsters should look to it that he himself does not become a monster."'
]
var strauss = [
  '"The conflict of the philosopher confronted with the tyrant is nothing else than the conflict of the intellectual faced with action."',
  '"Tyranny is a danger coeval with political life"',
  '"There is a disproption between the intransigent quest for truth and the requirements of society"'
]

// GetQuote functions
function GetQuote1(){
  var quote = plato[Math.floor(Math.random() * plato.length)];
  $("#quote1").html("" + quote + "");
  $("#quote1").css("opacity" , "1");
  $("#title1").css("color" , "#F0A202");
  console.log(quote);
}
function GetQuote2(){
  var quote = aristotle[Math.floor(Math.random() * aristotle.length)];
  $("#quote2").html("" + quote + "");
  $("#quote2").css("opacity" , "1");
  $("#title2").css("color" , "#F0A202");
  console.log(quote);
}
function GetQuote3(){
  var quote = machiavelli[Math.floor(Math.random() * machiavelli.length)];
  $("#quote3").html("" + quote + "");
  $("#quote3").css("opacity" , "1");
  $("#title3").css("color" , "#F0A202");
  console.log(quote);
}
function GetQuote4(){
  var quote = hobbes[Math.floor(Math.random() * hobbes.length)];
  $("#quote4").html("" + quote + "");
  $("#quote4").css("opacity" , "1");
  $("#title4").css("color" , "#F0A202");
  console.log(quote);
}
function GetQuote5(){
  var quote = rousseau[Math.floor(Math.random() * rousseau.length)];
  $("#quote5").html("" + quote + "");
  $("#quote5").css("opacity" , "1");
  $("#title5").css("color" , "#F0A202");
  console.log(quote);
}
function GetQuote6(){
  var quote = nietzsche[Math.floor(Math.random() * nietzsche.length)];
  $("#quote6").html("" + quote + "");
  $("#quote6").css("opacity" , "1");
  $("#title6").css("color" , "#F0A202");
  console.log(quote);
}
function GetQuote7(){
  var quote = strauss[Math.floor(Math.random() * strauss.length)];
  $("#quote7").html("" + quote + "");
  $("#quote7").css("opacity" , "1");
  $("#title7").css("color" , "#F0A202");
  console.log(quote);
}

// remove quote function
function RemoveQuote(){
  $(".quote").css("opacity" , "0");
  $("h3").css("color" , "#F7F7FF");
}

// event handlers for quotes
$("#the-republic").on('mouseover', GetQuote1)
$("#the-politics").on('mouseover', GetQuote2)
$("#the-prince").on('mouseover', GetQuote3)
$("#leviathan").on('mouseover', GetQuote4)
$("#social-contract").on('mouseover', GetQuote5)
$("#BGE").on('mouseover', GetQuote6)
$("#on-tyranny").on('mouseover', GetQuote7)
$(".carousel-item").on('mouseleave', RemoveQuote)

//hamburger nav
function OpenNav(){
  $(".overlay").toggleClass("show");
}

$(".hamburger").on('click', OpenNav)
$(".close-nav").on('click', OpenNav)
