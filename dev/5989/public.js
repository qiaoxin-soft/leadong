<script>(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "indexbox20191107";
    var blockNamespace = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(blockNamespace, {
        "init": innit
    })

    function innit(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
	var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');

   	$selector.find('.indexbox_201911041156 .no_padding').slick({
        	slidesToScroll: 1, 
			slidesToShow: 1,
            autoplay:false,
            autoplaySpeed:3000,
            arrows: false,
            dots: false,
            infinite: true,responsive: [

			{

			  breakpoint: 768,

			  settings: {
                slidesToScroll: 1, 

				slidesToShow: 1

			  }

			},

			{

			  breakpoint: 640,

			  settings: {

				arrows: false,

				centerMode: true,

				centerPadding: '40px',


			  }

			}

		  ]
     });
        
  
     var ww = $(window).width();
    if( ww > 640) {
         $selector.find("#bottonMoveId").mousemove(function (){
  		  $selector.find(".indexbox_201911041156 .lineTop").css("width","30px");
        $selector.find(".indexbox_201911041156 .lineBottom").css("width","50px");
        
		   
		 })
		 
        
          $("#bottonMoveId").mouseleave(function (){
	    $selector.find(".indexbox_201911041156 .lineTop").css("width","0px");
        $selector.find(".indexbox_201911041156 .lineBottom").css("width","0px");
        
		 })
        
    
    }
		
		
		
	 	$selector.find('.slick-prev-qk').on('click', function(){

			$selector.find('.indexbox_201911041156 .no_padding').slick('slickPrev');

	});
	
	 	$selector.find('.slick-next-qk').on('click', function(){

			$selector.find('.indexbox_201911041156 .no_padding').slick('slickNext');

	});

    }
})(window, jQuery);</script>