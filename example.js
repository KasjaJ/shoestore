var slider = document.getElementById("myRange");
var output = document.getElementById("range");

var sortByPrice = document.getElementById('price');

var shoes = document.querySelectorAll('.shoeLabel');
 // ovdje je napravljen pravi array od nodeliste
var shoesArray = Array.from(shoes);
 
var drop = document.querySelectorAll('#drop');



//  output.innerHTML = slider.value;  Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = '$'+this.value;
  currentPrice = this.value;
  $(shoes).hide('slow');
  

  /* jebo majku ovo je radilo sinoc, kad odaberes manji broj od 100 pokaze ti prevelike cijene..
  takodje slajder poludi kad ga ne kliknes nego ga zaista povuces do odredjene cijene
  */
  shoes.forEach(function (shoe) {
    if (shoe.dataset.price <= currentPrice) {
      $(shoe).show('slow');
    };
  });
      // console.log('objects that cost less or equal to $' + this.value);
};



sortByPrice.onclick = function() {
  console.log(shoesArray);
  shoesArray.forEach(function (shoe) {
    price = shoe.dataset.price;
    size = shoe.dataset.size;
    console.log(shoesArray[2].price);
  });

};





//funkcija za skrivanje
jQuery(document).ready(function($){
  
 //click on flipflop radio button to hide from results
  $(document.getElementById('flipflop')).click(function( event ) {
   
    $(shoes).hide('slow');
    $(document.querySelectorAll('[data-category="flipflop"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Flipflops');
  
  });


  //click on sneaker radio button to hide from results
  $(document.getElementById('sneaker')).click(function( event ) {

    $(shoes).hide('slow');
    $(document.querySelectorAll('[data-category="sneaker"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Sneakers');
  
  }); 


//click on heel radio button to hide from results
  $(document.getElementById('heel')).click(function( event ) {

    $(shoes).hide('slow');
    $(document.querySelectorAll('[data-category="heel"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Heels');
  }); 
  

//click on lace up radio button to hide from results
  $(document.getElementById('lace-up')).click(function( event ) {

    $(shoes).hide('slow');
    $(document.querySelectorAll('[data-category="lace-up"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Lace-up Shoes');
  });  
})







$('button').click(function( event ) {
      
  $(shoes).hide('slow');
  $(selectedSize = $(this).val());
  $(console.log(selectedSize));
  (shoes).forEach(function (shoe) {
   
   if (shoe.dataset.size.includes(selectedSize)) {
      $(shoe).show('slow');
    }
  });
  $(document.querySelector('h1').innerHTML = 'Size '+ selectedSize);

});



// show dropdown categories
$(drop).click(function( event ) {

 if (drop[0].classList.contains('rotate')) {
    $(document.getElementsByClassName('dropdown') ).hide(100);
    $(drop[0]).toggleClass("rotate");
    console.log('dropdown podignut'); 
    // inace je ovo trebalo biti classList.toggle() ali iz nekog razloga je to undefined!!

  } else {
    $(document.getElementsByClassName('dropdown') ).show(100);
    $(drop[0]).toggleClass("rotate");
  }

});



/*
$(document.getElementById('price')).click(function( event ) {
  $(sorted = document.querySelectorAll("data-price")).sort();
  $(console.log(sorted));
  
  $(document.querySelectorAll('[data-category="flipflop"]')).style.order = "1"; }); 
*/



// search funkcija koja radi za sve, filtrira prema imenu, nadimku, cijeni, sve.
$(".search").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $(".shoeLabel").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});
