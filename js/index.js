$(function(){
    $(".bg").css("height",window.screen.height+"px");
    $(".typecont ul li").css("height",window.screen.width/2+"px");
    $(window).scroll(function(event){
      var winPos =$(window).scrollTop();
      if(winPos == 0){
        $(".header").removeClass("hactive");
        $(".logo").removeClass("logoh").addClass("logow");
        $(".more").removeClass("moreh").addClass("morew");
      }else{
        $(".header").addClass("hactive");
        $(".logo").addClass("logoh").removeClass("logow");
        $(".more").addClass("moreh").removeClass("morew");
      }
      if(winPos > 300 ){
        $(".typecont li").addClass("typestyle");
      }
      if(winPos > 600 ){
        $(".casespacing").addClass("bounce");
      }
    });
    $(".more").click(function(){
        var ac = $(this).attr("active");
        if(ac == "false"){
            $(".seritem").slideDown(1000);
            $(this).attr("active","true");
        }else{
            $(".seritem").slideUp(800);
            $(this).attr("active","false");
        }
    })
})