$('#menuList li').click(function(e){
    e.preventDefault();
       $('#menuList li').removeClass("active");
       $(this).addClass("active");
       
   });