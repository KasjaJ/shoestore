var slider = document.getElementById("myRange");
var output = document.getElementById("range");
//  output.innerHTML = slider.value;  Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = '$'+this.value;
}



//funkcija za skrivanje
jQuery(document).ready(function($){
  
  //pritiskom na ovaj element
  $(document.getElementById('flipflop')).click(function( event ) {
  // event.preventDefault();
    //OVI odabrani elementi se sakriju
    $( document.querySelectorAll('[data-category="flipflop"]') ).hide('slow');
  });


  $(document.getElementById('sneaker')).click(function( event ) {
    // event.preventDefault();
    //OVI odabrani elementi se sakriju
    $( document.querySelectorAll('[data-category="sneaker"]') ).hide('slow');
  }); 


  $(document.getElementById('heel')).click(function( event ) {
    // event.preventDefault();
    //OVI odabrani elementi se sakriju
    $( document.querySelectorAll('[data-category="heel"]') ).hide('slow');
  }); 
  

  $(document.getElementById('lace-up')).click(function( event ) {
    // event.preventDefault();
    //OVI odabrani elementi se sakriju
    $( document.querySelectorAll('[data-category="lace-up"]') ).hide('slow');
  }); 
  })

 


