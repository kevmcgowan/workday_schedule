$(document).ready(function() {
$('#currentDay').text(moment().format('dddd MMMM Do YYYY, HH:mm'));
// Moment Current time 
var currHour = moment().hour();

  // Button function to clear local storage and clear contents
  $('#resetBtn').click(function (event) {
    event.preventDefault;
    $('textarea').val('');
    localStorage.clear('');
  });

//   $('.saveBtn').on('click', function(){
//     $('#notification').val('');
//   }


//Click of the save button stores values in Local Storage and displays popup confirmation
$('.saveBtn').on('click', function(){
    
    var hour = $(this).siblings('.hour').text();
    
    var event = $(this).siblings('.event-text').val();
    
    localStorage.setItem(hour, event);
    
    // var notification = document.querySelector('notification')
    // notification.textContent = 'Appointment Saved to localStorage';
    // notification.textContent = '';
    $('#notification').fadeIn().html('Appointment Saved to <span>localStorage</span>').delay(2000).fadeOut();
    $('#notification').attr('value', '');
    console.log('#notification')
});

//grab the stored value from localStorage and show inside the text area
$('.hour').each(function(i){
    var hour = $(this).text()
    var text = localStorage.getItem(hour);
    $(this).siblings('.event-text').val(text)   
});
    
//Change background colour based on the time of day
$('.time-block').each(function(i){
    var schedTime = $(this).attr('id');
    if(currHour < schedTime ){
        $(this).children('.event-text').addClass('future')
    }
    else if(currHour > schedTime ){
        $(this).children('.event-text').addClass('past');  
    }
    else{
        $(this).children('.event-text').addClass('present');
    }  
})
})