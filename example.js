var slider = document.getElementById("myRange");
var output = document.getElementById("range");
//  output.innerHTML = slider.value;  Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = '$'+this.value;
}




$(document).ready(function() {
  console.log('funkcija pozvana cim se ucitala stranica');
}
)





//funkcija za skrivanje
jQuery(document).ready(function($){
  
 //click on flipflop radio button to hide from results
  $(document.getElementById('flipflop')).click(function( event ) {
   
    $(document.querySelectorAll('.shoeLabel')).hide('slow');
    $(document.querySelectorAll('[data-category="flipflop"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Flipflops');
  
  });


  //click on sneaker radio button to hide from results
  $(document.getElementById('sneaker')).click(function( event ) {

    $(document.querySelectorAll('.shoeLabel')).hide('slow');
    $(document.querySelectorAll('[data-category="sneaker"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Sneakers');
  
  }); 


//click on heel radio button to hide from results
  $(document.getElementById('heel')).click(function( event ) {

    $(document.querySelectorAll('.shoeLabel')).hide('slow');
    $(document.querySelectorAll('[data-category="heel"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Heels');
  }); 
  

//click on lace up radio button to hide from results
  $(document.getElementById('lace-up')).click(function( event ) {

    $(document.querySelectorAll('.shoeLabel')).hide('slow');
    $(document.querySelectorAll('[data-category="lace-up"]')).show(200);
    $(document.querySelector('h1').innerHTML = 'Lace-up Shoes');
  }); 



// show dropdown categories
 
})

$(document.getElementById('drop')).click(function( event ) {
  $( document.getElementsByClassName('dropdown') ).show(100);
}); 


