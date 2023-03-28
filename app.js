$(function () {

    //SEARCH BUTTON
    let searchBtn = $(`.searchBtn`)
    let searchBar = $(`.search`)
    let cancelBtn = $(`.cancelBtn`)

    searchBtn.click( function() {
        searchBar.fadeIn(350);
        $(this).hide()
        cancelBtn.css({
            "opacity": 1,
            "visibility": "visible"
        });
    } )

    cancelBtn.click(function(){

        searchBar.fadeOut();
        $(this).css({
            "opacity": 0,
            "visibility": "hidden"
        });
        searchBtn.fadeIn();
    })


    //NAVBAR FIXED
    let navbar = $(".navbar")
    let navbarTop = Math.ceil(navbar.offset().top)

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop()

        if(scrTop > navbarTop){
            navbar.addClass("menuFixed")
        }else{
            navbar.removeClass("menuFixed")
        }
    })

    //AOS animation
    AOS.init();

    //NICE SCROLL

    $("body").niceScroll({
        cursorcolor: "#0f2f44",
        scrollspeed: 60,
    });

})

$('#jq').LineProgressbar({
          percentage: 90, 
          ShowProgressCount: true,
          fillBackgroundColor: '#050ca1',
	    backgroundColor: '#EEEEEE',
	  radius: '5px',
	  height: '10px',
      width: '100%',
});
$('#jq2').LineProgressbar({
          percentage: 85, 
          ShowProgressCount: true,
          fillBackgroundColor: '#744700',
	    backgroundColor: '#EEEEEE',
	  radius: '5px',
	  height: '10px',
      width: '100%',
    });
$('#jq3').LineProgressbar({
          percentage: 75,
          ShowProgressCount: true,
          fillBackgroundColor: '#38761d',
	    backgroundColor: '#EEEEEE',
	  radius: '5px',
	  height: '10px',
      width: '100%',
    });
$('#jq4').LineProgressbar({
          percentage: 80, 
          ShowProgressCount: true,
          fillBackgroundColor: '#6a329f',
	    backgroundColor: '#EEEEEE',
	  radius: '5px',
	  height: '10px',
      width: '100%',
    });
        
$(function () {

    var typed = new Typed('#typed', {
        strings: ['Services', 'Contact'],
        typeSpeed: 50,
        smartBackspace: true,
        loop: true,
        backSpeed: 50,
      });
      
    var typed = new Typed('#Portfolio', {
        strings: ['Portfolio'],
        typeSpeed: 50,
        smartBackspace: true,
        loop: true,
        backSpeed: 50,
      });


})