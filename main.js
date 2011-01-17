(function(document,$,undefined){
  $(function(){
    $('#filter').bind('keyup',function(){
      $('ul li').each(function(){
        if($(this).text().toLowerCase().match($('#filter').val()))
           $(this).show();
        else
           $(this).hide();   
      });
    });
    
    $('#add-new-form form').bind('submit',function(){
      $('<li></li>').append('<h2>'+$('#add-new-form form input[name="title"]')+)
      return false;
    })
  });                                                                                                              
})(document,jQuery);
