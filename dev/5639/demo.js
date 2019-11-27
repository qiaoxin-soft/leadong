<script>(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "sq_union_time";
    var sq_union_time = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(sq_union_time, {
        "init": init
    })

    function init(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
        // 第一个默认展开
        $selector.find('.sq_union_time ul li').eq(0).find('.right').removeClass('showFalse');
        $selector.find('.sq_union_time ul li').eq(0).find('.right').animate({left: '0px'}, 50);
      	$selector.find('.sq_union_time ul li').eq(0).find('.left .pictureC').removeClass('showFalse');
        $selector.find('.sq_union_time ul li').eq(0).find('.left .pictureC img').animate({left: '-10px'}, 50);
        $selector.find('.sq_union_time ul li').eq(0).find('.left .inTitle .icon').css('transform', 'rotate(0deg)');
        $selector.find('.sq_union_time ul li').eq(0).find('.left .inTitle').css('height', 'auto');
        // $selector.find('.sq_union_time ul li').eq(0).find('.middle').css('height', $selector.find('.sq_union_time ul li').eq(0).height());
        if($selector.find('.sq_union_time ul li').eq(0).find('.inTitle').next().find('img').height()+125>$selector.find('.sq_union_time ul li').eq(0).find('.inTitle').parent().next().next().find('.banner-docs').height()){
           // if ($selector.find('.sq_union_time ul li').eq(0).find('.inTitle').next().find('img').height() == 410) {
                $selector.find('.sq_union_time ul li').eq(0).find('.middle').css('height', $selector.find('.sq_union_time ul li').eq(0).find('.inTitle').next().find('img').height()+125+10);
              //  } else {
                //	$selector.find('.sq_union_time ul li').eq(0).find('.middle').css('height', 454);
              //  }
        } else {
            $selector.find('.sq_union_time ul li').eq(0).find('.middle').css('height', $selector.find('.sq_union_time ul li').eq(0).find('.inTitle').parent().next().next().find('.banner-docs').height()+60);
        }
        $selector.find('.sq_union_time ul li').eq(0).find('.middle').addClass('showUp');
        $selector.find('.sq_union_time ul li').eq(0).find('.middle .span').removeClass('span');
        $selector.find('.sq_union_time ul li').eq(0).css('margin-bottom', '62px');
        
        // 点击箭头展开
        $selector.find('.sq_union_time ul li .left .inTitle').click(function() {
                if ($(this).parents('li').find('.left .pictureC').hasClass('showFalse')) {
                    $(this).find('.icon').css('transform', 'rotate(0deg)');
                    $(this).css('height', 'auto');
                    $(this).parents('li').find('.left .pictureC').removeClass('showFalse');
                    $(this).parents('li').find('.left .pictureC img').animate({left: '-10px'}, 50);
                    $(this).parents('li').find('.right').removeClass('showFalse');
                    $(this).parents('li').find('.right').animate({left: '0px'}, 50);
                    // $(this).parents('li').find('.middle').css('height', $(this).parents('li').height());
                    if($(this).next().find('img').height()+125>$(this).parent().next().next().find('.banner-docs').height()){
                      //  if ($(this).next().find('img').height() == 410) {
                            $(this).parents('li').find('.middle').css('height', $(this).next().find('img').height()+125+10);
                         //   } else {
                          //  	$(this).parents('li').find('.middle').css('height', 454);
                         //   }
                       } else {
                       $(this).parents('li').find('.middle').css('height', $(this).parent().next().next().find('.banner-docs').height()+60);
                       }
                    // $(this).parents('li').find('.middle').css('height', 'auto');
                     $(this).parents('li').find('.middle').addClass('showUp');
                    $(this).parents('li').find('.middle span').removeClass('span');
                    $(this).parents('li').css('margin-bottom', '62px');
                 } else {
                    $(this).css('height', '97px');
                    $(this).find('.icon').css('transform', 'rotate(-90deg)');
                    $(this).parents('li').find('.left .pictureC img').animate({left: '-107px'}, 50);
                     $(this).parents('li').find('.left .pictureC').addClass('showFalse');
                    $(this).parents('li').find('.right').addClass('showFalse');
                    $(this).parents('li').find('.right').css({left: '100px'}, 50);
                    $(this).parents('li').find('.middle').css('height', 0);
                     $(this).parents('li').find('.middle').removeClass('showUp');
                    $(this).parents('li').find('.middle span').addClass('span');
                    $(this).parents('li').css('margin-bottom', '0px');
                 }
            });
        $(window).on('resize', function(){
        })
        /* function viewChange(){
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
        */ 
        //console.log($selector.find('.slick .slick-active button'));
        /*$selector.find('.slick .slick-active button').each(function(i){
        	$selector.find('.slick .slick-active button').eq(i).text("");
        });*/
    }
    })(window, jQuery);</script>