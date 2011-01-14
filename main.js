(function(document,$,undefined){
  $(function(){
    $('#filter').bind("keyup",function(){
      $('ul li').each(function(){
        if($(this).text().toLowerCase().match($('#filter').val()))
           $(this).show();
        else
           $(this).hide();   
      });
    });
  });                                                                                                              
})(document,jQuery);
