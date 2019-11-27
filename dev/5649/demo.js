<script>(function (window, $, undefined) {
        var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
        var name = "iofUpKAfFbZz1";
        var iofUpKAfFbZz1 = _block_namespaces_[name] || (_block_namespaces_[name] = {});
        $.extend(iofUpKAfFbZz1, {
            "init": init
        })

        function init(nodeObj) {
            if (!!!nodeObj) {
                return;
            }

            var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
            var carouselLineLength=$selector.find(".description-item").length;
            var itemWidth=$selector.find(".description-item").width();
            var $carouselLine=$selector.find(".carousel-line-in").html();
            var itemX=0
            console.log(itemWidth)
            //初始化
            function imgListInit(){
                for(var i=0;i<4;i++){
                    $selector.find(".img-tiem").eq(i+1).attr("data-pos",i+1)
                }
                $selector.find(".carousel-line-in").append($carouselLine);
                var activityIndex = $selector.find(".img-tiem[data-pos='2']").index()
                $selector.find(".description-item").eq(activityIndex).addClass("activity")
                $selector.find(".description-item").eq(activityIndex+carouselLineLength).addClass("activity")
            }
            //轮播方法
            function  imgNext(that){
                var imgArr = [];
                $.each($selector.find(".img-tiem"), function() {
                    imgArr.push($(this).attr("data-pos"))
                })
                imgArr.push(imgArr[0])
                imgArr.splice(0, 1)
                $.each($selector.find(".img-tiem"), function(index) {
                    $(this).attr("data-pos", imgArr[index])
                })
                activityIndex = $selector.find(".img-tiem[data-pos='2']").index();
                if(that){
                   that.attr("disabled", true)
                }
                setTimeout(function() {
                    $selector.find(".btn-r").removeAttr("disabled")
                }, 1000)
            }
            
            function imgPrev(that){
                var imgArr = [];
                $.each($selector.find(".img-tiem"), function() {
                    imgArr.push($(this).attr("data-pos"))
                })
                imgArr.splice(0, 0, (imgArr[imgArr.length - 1]))
                imgArr.splice((imgArr.length - 1), 1)
                $.each($selector.find(".img-tiem"), function(index) {
                    $(this).attr("data-pos", imgArr[index])
                })
                activityIndex = $selector.find(".img-tiem[data-pos='2']").index()

                that.attr("disabled", true)
                setTimeout(function() {
                    $selector.find(".btn-l").removeAttr("disabled")
                }, 1000)
            }
           
            //dos移动方法
            function dosMove(direction){
                if(direction){
                  if(direction.hasClass("btn-r")){ 
                    //左
                    if(itemX==0){
                        $selector.find(".carousel-line-in").css("transition","none")
                        $selector.find(".carousel-line-in").css("transform","translateX("+(-itemWidth*carouselLineLength)+"px)")
                        itemX=(-itemWidth*carouselLineLength)
                    }
                    setTimeout(function(){
                        $selector.find(".carousel-line-in").css("transition","1s")
                        itemX+=itemWidth  
                        $selector.find(".carousel-line-in").css("transform","translateX("+itemX+"px)")
                    },100);

                }else{
                    //右
                    if(itemX==-itemWidth*carouselLineLength){
                        $selector.find(".carousel-line-in").css("transition","none")
                        $selector.find(".carousel-line-in").css("transform","translateX(0px)")
                        itemX=0
                    }
                    setTimeout(function(){
                        $selector.find(".carousel-line-in").css("transition","1s")
                        itemX-=itemWidth
                        $selector.find(".carousel-line-in").css("transform","translateX("+itemX+"px)")
                    },100)

                }
                } else{
                 if(itemX==0){
                        $selector.find(".carousel-line-in").css("transition","none")
                        $selector.find(".carousel-line-in").css("transform","translateX("+(-itemWidth*carouselLineLength)+"px)")
                        itemX=(-itemWidth*carouselLineLength)
                    }
                    setTimeout(function(){
                        $selector.find(".carousel-line-in").css("transition","1s")
                        itemX+=itemWidth  
                        $selector.find(".carousel-line-in").css("transform","translateX("+itemX+"px)")
                    },100);
                }
              
                $selector.find(".description-item").removeClass("activity");
                $selector.find(".description-item").eq(activityIndex).addClass("activity")
                $selector.find(".description-item").eq(activityIndex+carouselLineLength).addClass("activity")
            }
            //点击事件
            imgListInit()
            $selector.find(".btn-r").on("click", function() {
                imgNext($(this))
                dosMove($(this))
            })
            $selector.find(".btn-l").on("click", function() {
                imgPrev($(this))
                dosMove($(this))
            })
             var moveAuto = setInterval(function(){
                 imgNext();
                  dosMove();
            },4500)
          	$selector.find(".img-ul-box .img-tiem").mouseenter(function(){
            	clearInterval(moveAuto)
            })
            $selector.find(".img-ul-box .img-tiem").mouseleave(function(){
                console.log('leave')
            	 moveAuto = setInterval(function(){
                 imgNext();
                  dosMove();
                },4500)
            })
            $selector.find(".description-item").on("click", function() {
                var dosIndex=$(this).data("index");
                console.log(dosIndex);
                if(!$(this).hasClass("activity")){
                    $selector.find(".img-tiem").attr("data-pos",4);
                    $selector.find(".img-tiem").eq(dosIndex).attr("data-pos",2);
                    if(dosIndex == 0){
                        $selector.find(".img-tiem").eq(carouselLineLength-1).attr("data-pos",1);
                        $selector.find(".img-tiem").eq(dosIndex+1).attr("data-pos",3);
                    } else if(dosIndex == carouselLineLength-1){
                        $selector.find(".img-tiem").eq(dosIndex-1).attr("data-pos",1);
                        $selector.find(".img-tiem").eq(0).attr("data-pos",3);
                    } else {
                        $selector.find(".img-tiem").eq(dosIndex-1).attr("data-pos",1);
                        $selector.find(".img-tiem").eq(dosIndex+1).attr("data-pos",3);
                    }
                   // itemX=-itemWidth*dosIndex+480;
                   // $selector.find(".carousel-line-in").css("transform","translateX("+itemX+"px)")
                    $selector.find(".description-item").removeClass("activity");
                    $selector.find(".description-item").eq(dosIndex).addClass("activity")
                	$selector.find(".description-item").eq(dosIndex+carouselLineLength).addClass("activity")
                }
            })
        }
    })(window, jQuery);</script>