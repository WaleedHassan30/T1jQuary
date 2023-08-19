import{GetDuration , Design} from "./logic.js"
// Start Handling Menu Events

let designApp = new Design()

designApp.menu()

// ---------------------------------------------------------------------
// Start Handling details Events

designApp.details()

// End Handling details Events
// ---------------------------------------------------------------------

// Start Handling Duration Events
designApp.duration()

// End Handling Duration Events

// Start Handling form Events
designApp.form()
// End Handling form Events



// Start To Up Button
$(function(){

  $(document).ready(function() {
    // Show or hide the button based on scroll position
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.toUp').fadeIn(1000);
      } else {
        $('.toUp').fadeOut(1000);
      }
    });
  
    // Scroll to top when the button is clicked
    $('.toUp').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 3000);
     
    });
    $('html, body').animate({ scrollTop: 0 }, 3000);
  });

}).ready()

// End To Up Button



// Start Setting

$(function(){

  designApp.setting()

}).ready()

// End Setting

// Start Change Theme

$(function(){
  designApp.changeTheme()
}).ready();

// End Change Theme


// Start Loading Screen

$(function(){
  designApp.loadingScreen()

}).ready();



