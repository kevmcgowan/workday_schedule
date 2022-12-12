$(document).ready(function() {
$('#currentDay').text(moment().format('dddd MMMM Do YYYY, HH:mm'));
// Moment Current time 
var currHour = moment().hour();


//Click of the save button stores values in Local Storage
$('.saveBtn').on('click', function(){
    //grab hour.
    var hour = $(this).siblings('.hour').text();
    
    //grab the information from textarea
    var event = $(this).siblings('.event-text').val();
    
    //Store event in localStorage in key/value format
    localStorage.setItem(hour, event);
    // Fade notification out then clear
    $("#notification").fadeIn().append('Appointment Saved to localStorage').delay(2000).fadeOut();
    $('#notification').val('');
    // });
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




       
    
    



   
        
        
    
       
        