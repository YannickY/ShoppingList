$(function() {
//when page loads, the list of shopping items slides down
    let $list = $("li").hide().slideDown();
//When you click on a list item, it will check if item has class attr
    $list.on("click", function() {
        if ($(this).attr("class")) {
        $(this).css("background-color", "#6d616f"); //this changes background color of item that is clicked to grey
        $(this).removeClass();          //this removes class of item
        $(this).attr("id", "grey");        //this line adds an ID attr of grey
        $("ul").append($(this));        //This is appends items that have been selected already to the bottom of UL list
       
        //This piece of code removes items from list using some animation
        } else if ($(this).attr("id")){ //code checks if item has ID attribute
        $(this).animate({               //then customizes css properties to create a sliding effect removal of item off of the list
            opacity: 0.0,
            paddingLeft: "+=80"
        }, 500, function() {
            $(this).remove();
        });
        
}
    
    

     
    

})



   

  

});

    
   

