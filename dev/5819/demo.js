<script>(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "sq_text_img_change";
    var sq_text_img_change = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(sq_text_img_change, {
        "init": init
    })

    function init(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
        //
      	$('.sq_text_img_change .slick').slick({
        	dots: false,
            accessibility: false,
            arrows: false,
            autoplay: false,
            draggable: false
            //centerMode: true
    	});      
        function textChange(){
        	var tit = $selector.find('.sq_text_img_change .slick .slick-active').attr('tit');
            var des = $selector.find('.sq_text_img_change .slick .slick-active').attr('des');

            $selector.find('.sq_text_img_change .wrapC .innerC .tit').html(tit);
            $selector.find('.sq_text_img_change .wrapC .innerC .des').html(des);
        }
        textChange();
        $selector.find(".sq_text_img_change .panel .fa-angle-left").click(function(){
        	$('.sq_text_img_change .slick').slick("slickPrev");
             textChange();
        });
        $selector.find(".sq_text_img_change .panel .fa-angle-right").click(function(){
        	$('.sq_text_img_change .slick').slick("slickNext");
             textChange();
        });
        $(window).on('resize', function(){
        	viewChange()
        })
        function viewChange(){
            $selector.find('.xc-imggather-one').css('display', 'block');
        	if( ($(window).width()> 700 && $(window).width()< 800) || $(window).width()< 400){
                $selector.find('.xc-imggather-two').css('display', 'block');
            	if($selector.find('.xc-imggather-two img').length){
                	$selector.find('.xc-imggather-one').css('display', 'none');
                }else if($selector.find('.xc-imggather-two img').length === 0){
                    $selector.find('.xc-imggather-two .slick-active button').css('display', 'none');
                }
           }else{
           		$selector.find('.xc-imggather-two').css('display', 'none');
           }
        }
       	viewChange()
        //console.log($selector.find('.slick .slick-active button'));
        /*$selector.find('.slick .slick-active button').each(function(i){
        	$selector.find('.slick .slick-active button').eq(i).text("");
        });*/
    }
    })(window, jQuery);</script>