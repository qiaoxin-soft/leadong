<script>(function (window, $, undefined) {
    var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
    var name = "sq_Union1";
    var sq_Union1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
    $.extend(sq_Union1, {
        "init": innit
    })

    function innit(nodeObj) {
        if (!!!nodeObj) {
            return;
        }
        var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
        var widthAll=$(window).width();
         var noaddWidth=0;
        //搜索框点击弹出消失
        item();
        navPosition();
        $selector.find(".sq2_search_1 .serach .search-wrap .search-input .search-inputImg").click(function(){
            if($selector.find(".backBlackhidden").hasClass("on")){
               $selector.find(".backBlackhidden").removeClass("on");
                $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1").removeClass("buttonOn");
                //$selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 input").removeClass("inputOn");
                $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 span").removeClass("spanOn2");
               }else{
               	$selector.find(".backBlackhidden").addClass("on");
                   $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1").addClass("buttonOn");
                   $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 input").addClass("inputOn");
                   $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 span").addClass("spanOn2");
               }
        });
        /*$selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 input").focus(function(){
            $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 span").addClass("spanOn");
        }).blur(function(){
            if($(this).val()==""){
               $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 span").removeClass("spanOn");
               }
        });*/
        //导航栏鼠标滑过，子菜单显示与隐藏
        	var navWidth =0;
        	var indexLi =0;
        	var lengthLi=0;
        	lengthLi=$selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar>li").length;
        	$selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar li a").mouseover(function(){
                $selector.find(".sq2_header_2 .sq2_nav_1 .navigation").addClass("on");
                var  _this=$(this);
                indexLi=_this.parent("li").index();
                var maxWidth=0;
                _this.siblings(".sub").children("ul").children("li").each(function(){
                       if($(this).children("a").width()>maxWidth){
							maxWidth=$(this).children("a").width();                                                  
                        }                                                                     
                });
                if(_this.siblings(".sub").find(".sub-nav").length>0){
                   	 _this.siblings(".sub").children("ul").children("li").children("a").css("transform","translateX(-6px)");
                   }
            	if(_this.siblings(".sub").length>0){
                    if(indexLi<lengthLi/2){
                      _this.siblings(".sub").addClass("activeRight");
                       _this.siblings(".sub").width(maxWidth+40);  
                       }
                    _this.siblings(".sub").addClass("active");
                   }
            })
        	$selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar li .sub>ul>li").mouseover(function(){
                var  _this=$(this);
                var subNavMaxWidth=0;
            	if(_this.find(".sub-nav").length>0){
                    if(indexLi<lengthLi/2){
                        _this.find(".sub-nav li").each(function(){
                            if(subNavMaxWidth<$(this).width()){
                                subNavMaxWidth=$(this).width();
                            }
                         });
                        _this.find(".sub-nav").css("width",subNavMaxWidth);
                        _this.find(".sub-nav li").css("width",subNavMaxWidth);
                    }
                    _this.find(".sub-nav").addClass("active");
                   }
            }).mouseout(function(){
            	var  _this=$(this);
                _this.find(".sub-nav").removeClass("active");
            });
            $selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar>li").hover(function(){
               var  _this=$(this);
                navWidth = _this.find(".sub>ul>li").width();
                indexLi=_this.index();
                 if(indexLi<lengthLi/2){
                 	_this.find(".sub ul li .sub-nav").css("left",navWidth+44);
                 }else{
                	_this.find(".sub ul li .sub-nav").css("right",navWidth+44);
                 }
                },function(){
                    var _this=$(this);
                _this.find(".sub").removeClass("active");
                _this.find(".sub-nav").removeClass("active");
                $selector.find(".sq2_header_2 .sq2_nav_1 .navigation").removeClass("on");
                });
        //导航项过多情况下，以按钮形式切换
        var ulWidth=0;
        $selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar>li").each(function(){
            ulWidth=ulWidth+$(this).width();
        });
        function tabNext(widthAll,noaddWidth){
            //console.log("widthAll",widthAll);
            //console.log("ulWidth",ulWidth);
            if(widthAll>(ulWidth+noaddWidth)){
					$selector.find(".sq2_header_2 .sq2_right_tab").hide();
                	$selector.find(".sq2_header_2 .sq2_nav_1").width(ulWidth+80);
                	//$selector.find(".sq2_header_2 .sq2_nav_1").addClass("sq2_nav_1_smallMiddle");
               }else{
               		$selector.find(".sq2_header_2 .sq2_right_tab").show();
                   if(widthAll>1220){
                       	 $selector.find(".sq2_header_2 .sq2_nav_1").width(797);
                      }else{
                      $selector.find(".sq2_header_2 .sq2_nav_1").width(widthAll-noaddWidth);
                      }
               }
        }
        if(widthAll>1400){
            noaddWidth=722;
           }else if(widthAll>1180){
            noaddWidth=530;        
                    }else{
           noaddWidth=260;
           }
        //tabNext(widthAll,noaddWidth);

        //pc端和手机端分别调用不同方法
        $(window).resize(function(){
           item();
            var widthAll=$(window).width();
             if(widthAll>1400){
            noaddWidth=722;
           }else if(widthAll>1180){
            noaddWidth=530;        
                    }else{
           noaddWidth=260;
           }
            navPosition();
       // tabNext(widthAll,noaddWidth);
        });      
        function item(){
        	 $selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar").css("margin-left",0+"px");
        	if($(window).width()>990){
                $selector.find(".sq2_header_1").addClass("sq2_header_2").removeClass("sq2_header_3");
                $selector.find(".sq2_header_1 .sq2_nav_menu").hide();
                widthAll=$(window).width();
           		//tabNext(widthAll);
                $selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar li .sub").attr("style","");
                $selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar li .sub ul li .sub-nav").attr("style","");
                $selector.find(".sq2_header_2").css("position","relative");
            }else{
                $selector.find(".sq2_header_1").removeClass("sq2_header_2").addClass("sq2_header_3");
            	$selector.find(".sq2_header_1 .sq2_nav_menu").show();
                $selector.find(".sq2_header_1 .sq2_nav_1").attr("style","");
            }
        }
        function navPosition(){
            var ulWidth=0;
            var navigationWidth=Math.floor($selector.find(".sq2_nav_1 .navigation").width());
           
            var translateX=0;
        	$selector.find(".sq2_nav_1 .blockNavBar li").each(function(){
            	ulWidth+=Math.floor($(this).width());
            })
            $selector.find(".sq2_nav_1 .blockNavBar").width(ulWidth+'px');
            if(ulWidth<=navigationWidth){
            	$selector.find(".sq2_right_tab").hide();
            }else{
            	$selector.find(".sq2_right_tab").show();
            }
            //点击左右按钮切换导航
            $selector.find(".sq2_header_2 .sq2_right_tab .sq2_right_prev .fa-chevron-left").click(function(){
                //var thisLeft=$(this).offset().left;
                //var tabLeft=$selector.find(".sq2_header_2 .sq2_nav_1 .navigation .blockNavBar").offset().left;
                 var navigationLeft=Math.floor($selector.find(".sq2_nav_1 .navigation").offset().left);
            var navigationRight=Math.floor($selector.find(".sq2_nav_1 .navigation").width())+navigationLeft;
                var liDom=$selector.find(".sq2_nav_1 .blockNavBar>li");
                var liLength=liDom.length;
                for(var i=liLength-1;i>=0;i--){
                    var lengths=liLength-i-1;
                var thisLeft=Math.floor(liDom.eq(i).offset().left);
                    var thisRight=Math.floor(liDom.eq(i).width())+thisLeft;
                  //  console.log(thisLeft,navigationLeft);
                    if(thisLeft<navigationLeft){
                        //   console.log(liDom.eq(i).attr('id'),thisLeft);
                      //  console.log('nav:',navigationLeft);
                        if(thisRight>navigationLeft){
                        	     var offset=navigationLeft-thisLeft;
                        	translateX+=offset;
                        }else{
                        	translateX+=Math.floor(liDom.eq(i).width());
                        }
                          $selector.find(".sq2_nav_1 .navigation .blockNavBar").css({'transform':'translateX('+translateX+'px)'})
                    return;
                    }
                }
            });
            $selector.find(".sq2_header_2 .sq2_right_tab .sq2_right_next .fa-chevron-right").click(function(){
 var navigationLeft=Math.floor($selector.find(".sq2_nav_1 .navigation").offset().left);
            var navigationRight=Math.floor($selector.find(".sq2_nav_1 .navigation").width())+navigationLeft;
                 $selector.find(".sq2_nav_1 .blockNavBar>li").each(function(){
                    var thisLeft=Math.floor($(this).offset().left);
                    var thisRight=Math.floor($(this).width())+thisLeft;
                   
                    if(thisRight>navigationRight){
                        //  console.log($(this).attr('id'),thisRight);
                      //  console.log('nav:',navigationRight);
                        if(thisLeft<navigationRight){
                            var offset=thisRight-navigationRight;
                        	translateX-=offset;
                        }else{
                            translateX-=Math.floor($(this).width());
                        }
                    //    console.log(translateX);
                          $selector.find(".sq2_nav_1 .navigation .blockNavBar").css({'transform':'translateX('+translateX+'px)'})
                    return false;
                    }
                   
                });
                
            });
        }
    /* if($(window).width()>990){
         $selector.find(".sq2_header_1").addClass("sq2_header_2").removeClass("sq2_header_3");
         $selector.find(".sq2_header_1 .sq2_nav_menu").hide();
     }else{
         $selector.find(".sq2_header_1").removeClass("sq2_header_2").addClass("sq2_header_3")
         $selector.find(".sq2_header_1 .sq2_nav_menu").show();
         $selector.find(".sq2_header_1 .sq2_nav_1").attr("style","");
     }*/
      //手机端 导航的显示与隐藏  
        $selector.find(".sq2_header_1 .sq2_nav_menu .fa_bars").click(function(){
            $selector.find(".backBlackhidden").addClass("on2");
        	$selector.find(".sq2_header_1 .sq2_nav_menu .fa_bars").hide();
            $selector.find(".sq2_header_1 .sq2_nav_menu .fa_close").show();
            $selector.find(".sq2_header_1 .sq2_nav_1").addClass("navactive");
            //$selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1").addClass("buttonOn");
            //$selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 input").addClass("inputOn");
              //  $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 span").addClass("spanOn2");
            $selector.find(".sq2_header_3").css("position","fixed");
        });
        $selector.find(".sq2_header_1 .sq2_nav_menu .fa_close").click(function(){
            $selector.find(".backBlackhidden").removeClass("on2");
        	$selector.find(".sq2_header_1 .sq2_nav_menu .fa_close").hide();
            $selector.find(".sq2_header_1 .sq2_nav_menu .fa_bars").show();
            $selector.find(".sq2_header_1 .sq2_nav_1").removeClass("navactive");
            //$selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1").removeClass("buttonOn");
            //$selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 input").removeClass("inputOn");
            //    $selector.find(".sq2_search_1 .serach .search-wrap .search-input .sq2_right_btn1 span").removeClass("spanOn2");
            $selector.find(".sq2_header_3").css("position","relative");
        });
        //手机端 二级导航 下拉显示与隐藏
        $selector.find(".sq2_header_1 .sq2_nav_1 .navigation>section>ul>li>i").click(function(){
            if($(this).hasClass("sqNavDownOn")){
               		$(this).removeClass("sqNavDownOn");
                	$(this).siblings(".sub").slideUp(300);
               }else{
               		$(this).addClass("sqNavDownOn");
                   $(this).siblings(".sub").slideDown(300);
               }
        });
        //手机端 三级导航显示与隐藏
        $selector.find(".sq2_header_1 .sq2_nav_1 .navigation>section>ul>li>.sub>ul>li>i").click(function(){
            var _this=$(this);
            if($(this).hasClass("sqNavDownOn")){
               	$(this).removeClass("sqNavDownOn");
                $(this).siblings(".sub-nav").slideUp(300);
            }else{
                $(this).addClass("sqNavDownOn");
                $(this).siblings(".sub-nav").slideDown(300);
            }
        });
        //当前导航高亮
        $selector.find(".backstage-blocksEditor-wrap.navigation a").each(function(i,n){
            if($(this).attr('data-currentindex')){
                $(this).parents('li').addClass('sqOnNav');
            }
        });
        //使用轮播插件 调用方法
        $('.sq_Union1_banner .customBlue-slick').slick({
            arrows: false,
            autoplay: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
            dots: true,
            accessibility: false,
    	});
        //监听滚动条高度
        $(window).on('scroll', function(){
        	if( $(window).scrollTop() == 0 ){
            	$selector.find(".sq2_header_1").removeClass("sq_header_1_screen");
            }else if($(window).scrollTop() > 0){
                     $selector.find(".sq2_header_1").addClass("sq_header_1_screen");
             }
        })
    }
    })(window, jQuery);</script>