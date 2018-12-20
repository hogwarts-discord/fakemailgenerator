$(function(){
  $("a").bind("focus", function(){
        if(this.blur){
          this.blur();
        }
      });
// top loading line
  $({property: 0}).animate({property: 100}, { 
      duration: 2000, 
      step: function() { 
          var percentage = Math.round(this.property); 
   
          $('#loading-line').css('width',  percentage+"%"); 
   
           if(percentage == 100) { 
                  $("#loading-line").addClass("done");//finished and hide it
              } 
      } 
  }); 

  var show1='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fc+4v+9h-c1-8x" data-ad-client="ca-pub-2241510628554662" data-ad-slot="7664344861"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({});</script>';
    $('.show1').each(function(){
      $(this).html(show1);
    });
    
  var show2='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- all-300 --><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-2241510628554662" data-ad-slot="9607981929"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({});</script>';
    $('.show2').each(function(){
      $(this).html(show2);
    });

  

});