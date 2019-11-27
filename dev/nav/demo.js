<script>(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "sq2HeaderOne";
    var sq2HeaderOne = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(sq2HeaderOne, {
        "init": innit
    })

    function innit(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
        //监听滚动条高度
        $(window).on('scroll', function(){
        	if( $(window).scrollTop() == 0 ){
            	$selector.find(".sq_header_1").removeClass("sq_header_1_screen");
            }else if($(window).scrollTop() > 0){
                     $selector.find(".sq_header_1").addClass("sq_header_1_screen");
             }
        })
        //搜索框点击弹出消失
        $selector.find(".sq_search_1 .serach .search-wrap .search-input>img").click(function(){
        	$selector.find(".sq_search_1 .serach .search-wrap .search-input>input").show().focus().addClass("inputOn");
            $selector.find(".sq_search_1 .serach .search-wrap .search-input>img").hide();
            $selector.find(".sq_search_1 .serach .search-wrap .search-input>button").show();
        });
        $selector.find(".sq_search_1 .serach .search-wrap .search-input input").blur(function(){
            $(document).click(function(e){
                if($selector.find(".sq_search_1 .serach .search-wrap .search-input")[0].contains(e.target)){
                   // $selector.find(".sq_search_1 .serach .search-wrap .search-input>button").show();
                }else{
                    $selector.find(".sq_search_1 .serach .search-wrap .search-input>input").removeClass("inputOn").hide();
                    $selector.find(".sq_search_1 .serach .search-wrap .search-input>button").hide();
                    $selector.find(".sq_search_1 .serach .search-wrap .search-input>img").show();
                }
            });
        });
        //点击语言栏弹出消失 sq_language_span
        var lanHeight = 0;
        $selector.find(".sq_language_1 .lang-list li").each(function(){
        	lanHeight = lanHeight+$(this).height();
        });
        $selector.find(".sq_language_1 .lang-show-word .sq_language_span").click(function(){
            if($(this).attr("att")=="on"){
               $(this).css("border","").attr("att","");
                $selector.find(".sq_language_1 .lang-list").css("height",0);
                $selector.find(".sq_language_1 .lang-show-word .sq_language_span").find("img").removeClass("imgOn");
               }else{
                   $selector.find(".sq_language_1 .lang-show-word .sq_language_span").find("img").addClass("imgOn");
                   $(this).css("border","1px solid #fff").attr("att","on");
                   if($selector.find(".sq_language_1 .lang-list li").length==1){
                      $selector.find(".sq_language_1 .lang-list").css("height",lanHeight+10);
                   $selector.find(".sq_language_1 .lang-list li").css("line-height",lanHeight+10+"px");
                   }else{
                   $selector.find(".sq_language_1 .lang-list").css("height",lanHeight+2);
                   }
               }
             $(document).click(function(e){
                if(!$selector.find(".sq_language_1 .lang-show-word .sq_language_span")[0].contains(e.target)){
                	$selector.find(".sq_language_1 .lang-show-word .sq_language_span").css("border","").attr("att","");
                	$selector.find(".sq_language_1 .lang-list").css("height",0);
                    $selector.find(".sq_language_1 .lang-show-word .sq_language_span").find("img").removeClass("imgOn");
                }
             });
        });
        //导航栏鼠标滑过，子菜单显示与隐藏
        	var hoverATrue=false;
            var hoverIndex=0,hoverHeight=0;
            $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li>a").hover(function(){
                
                
                if($(this).siblings(".sub").length>0){
                    $selector.find(".sq_header_2>.sq_header_1Hover").addClass("sq_header_1Hover2");
                    hoverATrue=true;
                    hoverIndex=$(this).parent("li").index();
                    $(this).siblings(".sub").addClass("active");

                    $(this).siblings(".sub").find('.subUl>li>a').hover(function(el){
                        // console.log(el);
                        $selector.find('.sub-nav-active').removeClass('sub-nav-active');
                        // alert($(this).siblings('.sub-nav').length);
                        if( $(this).siblings('.sub-nav').length>0 ){
                            $(this).siblings(".sub-nav").addClass("sub-nav-active");
                        }
                    },function (el){
                        // alert(1);
                        // console.log(el.toElement.tagName);
                        if(el.toElement.tagName=="LI"){
                            return;
                        }
                        $(this).siblings(".sub-nav").removeClass("sub-nav-active");
                    });
                    hoverHeight=$(this).siblings(".sub").children("ul").height();
                    $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(hoverHeight);
                    $selector.find(".sq_header_2>.sq_header_1Hover").height(hoverHeight+20);
                   }
            },function(){
                $(this).parent("li").hover(function(){
                    hoverIndex = $(this).index();
                    if(hoverATrue){
                       $selector.find(".sq_header_2>.sq_header_1Hover").addClass("sq_header_1Hover2");
                        $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").addClass("active");
                        $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(hoverHeight);
                        $selector.find(".sq_header_2>.sq_header_1Hover").height(hoverHeight+20);
                       }
                },function(){
                    $selector.find(".sq_header_2>.sq_header_1Hover").removeClass("sq_header_1Hover2");
                   $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").removeClass("active");
                   $selector.find('.sub-nav-active').removeClass('sub-nav-active');
                    $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(0);
                    $selector.find(".sq_header_2>.sq_header_1Hover").height(0);
                    hoverATrue=false;
                });
            });
             $selector.find(".sq_header_2>.sq_header_1Hover").mouseenter(function(){
                $(this).addClass("sq_header_1Hover2");
                 $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").addClass("active");
                 $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(hoverHeight);
                 $selector.find(".sq_header_2>.sq_header_1Hover").height(hoverHeight+20);
             }).mouseleave(function(){
                $(this).removeClass("sq_header_1Hover2");
                 $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").removeClass("active");
                 $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(0);
                 $selector.find(".sq_header_2>.sq_header_1Hover").height(0);
             });
            $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").mouseenter(function(){
                $selector.find(".sq_header_2>.sq_header_1Hover").addClass("sq_header_1Hover2");
                 $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").addClass("active");
                $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(hoverHeight);
                $selector.find(".sq_header_2>.sq_header_1Hover").height(hoverHeight+20);
            }).mouseleave(function(){
                // $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").removeClass("active");
                $selector.find(".sq_header_2>.sq_header_1Hover").removeClass("sq_header_1Hover2");
                $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").height(0);
                $selector.find(".sq_header_2>.sq_header_1Hover").height(0);
             });
            if($selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub ul").height()>400){
                //$selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").eq(hoverIndex).find(".sub").css("overflow-y","auto");
            }
        //pc端和手机端分别调用不同方法
        $(window).resize(function(){
        	if( $(window).width()>1240 ){
           		$selector.find(".sq_header_1").addClass("sq_header_2").removeClass("sq_header_3");
                $selector.find(".sq_header_1 .sq_nav_menu").hide();
                // $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").width(1180);
            	$selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub>ul>li").width(280);
                $selector.find(".sq_header_1 .sq_nav_1 .navigation ul li .sub").attr("style","");
                $selector.find(".sq_header_1 .sq_nav_1 .navigation ul li .sub ul li .sub-nav").attr("style","");
            }else{
            	$selector.find(".sq_header_1").removeClass("sq_header_2").addClass("sq_header_3");
                $selector.find(".sq_header_1 .sq_nav_menu").show();
                $selector.find(".sq_header_3>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").css("width","auto");
            	$selector.find(".sq_header_3>.sq_nav_1 .navigation .blockNavBar>li").find(".sub>ul>li").css("width","auto");
                $selector.find(".sq_header_1 .sq_nav_1 .navigation ul li .sub").attr("style","");
                $selector.find(".sq_header_1 .sq_nav_1 .navigation ul li .sub ul li .sub-nav").attr("style","");
                $selector.find(".sq_header_1 .sq_nav_1 .navigation>ul>li>.fa-angle-down").each(function(){
                	if($(this).hasClass("fa-angle-downOn")){
                    	$(this).removeClass("fa-angle-downOn");
                    }
                });
                $selector.find(".sq_header_1 .sq_nav_1 .navigation>ul>li>.sub>ul>li>.fa-angle-down").click(function(){
                	if($(this).hasClass("fa-angle-downOn")){
                    	//$(this).removeClass("fa-angle-downOn");
                    }
                });
            }
        });                
     if($(window).width()>1240){
        //  $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").width(1180);
         $selector.find(".sq_header_2>.sq_nav_1 .navigation .blockNavBar>li").find(".sub>ul>li").width(280);
         $selector.find(".sq_header_1").addClass("sq_header_2").removeClass("sq_header_3");
         $selector.find(".sq_header_1 .sq_nav_menu").hide();
     }else{
         $selector.find(".sq_header_1").removeClass("sq_header_2").addClass("sq_header_3");
         $selector.find(".sq_header_1 .sq_nav_menu").show()
         $selector.find(".sq_header_3>.sq_nav_1 .navigation .blockNavBar>li").find(".sub").css("width","auto");
         $selector.find(".sq_header_3>.sq_nav_1 .navigation .blockNavBar>li").find(".sub>ul>li").css("width","auto");
     }
      //手机端 导航的显示与隐藏  
        $selector.find(".sq_header_1 .sq_nav_menu .fa-bars").click(function(){
        	$selector.find(".sq_header_1 .sq_nav_menu .fa-bars").hide(300);
            $selector.find(".sq_header_1 .sq_nav_menu .fa-close").show(300);
            $selector.find(".sq_header_1 .sq_nav_1").addClass("navactive");
        });
        $selector.find(".sq_header_1 .sq_nav_menu .fa-close").click(function(){
        	$selector.find(".sq_header_1 .sq_nav_menu .fa-close").hide(300);
            $selector.find(".sq_header_1 .sq_nav_menu .fa-bars").show(300);
            $selector.find(".sq_header_1 .sq_nav_1").removeClass("navactive");
        });
        //手机端 二级导航 下拉显示与隐藏
        $selector.find(".sq_header_1 .sq_nav_1 .navigation>ul>li>.fa-angle-down").click(function(){
            if($(this).hasClass("fa-angle-downOn")){
               		$(this).removeClass("fa-angle-downOn");
                	$(this).next(".sub").slideUp(500);
               }else{
               		$(this).addClass("fa-angle-downOn");
                   $(this).next(".sub").slideDown(500);
               }
        });
        //手机端 三级导航显示与隐藏
        $selector.find(".sq_header_1 .sq_nav_1 .navigation>ul>li>.sub>ul>li>.fa-angle-down").click(function(){
            var _this=$(this);
            if($(this).hasClass("fa-angle-downOn")){
               	$(this).removeClass("fa-angle-downOn");
                $(this).next(".sub-nav").slideUp(500);
            }else{
                $(this).addClass("fa-angle-downOn");
                $(this).next(".sub-nav").slideDown(500);
            }
        });
        //当前导航高亮
        $selector.find(".backstage-blocksEditor-wrap.navigation a").each(function(i,n){
            if($(this).attr('data-currentindex')){
                $(this).parents('li').addClass('sqOnNav');
            }
        });
    }
    })(window, jQuery);</script>