<script>(function(window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "blockquote2019092401";
  var blockNamespace = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(blockNamespace, {
    "init": init
  })

  function init(nodeObj) {
    if (!!!nodeObj) {
      return;
    }
    var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
    
    // 后续代码
   var items = $selector.find(".blockquote__item").length
    var breakpointCurrent = '';
    var widthCurrent = '';
    var leftCurrent = 0;
    var pointWidth = 100 / items;
    var i = 0;
      
      var currentSlide = 0;
      var breakpointFlag = false;
      
    var scrollerWidthCurrent = 0;
    var blockquoteCon = $selector.find('.blockquote__con');
    var blockquoteScrollerBar = $selector.find('.blockquote__scrollbar--front');
    var blockquoteScrollerBarArrowLeft = $selector.find('.arrow-left');
    var blockquoteScrollerBarArrowRight = $selector.find('.arrow-right');
    var initWidth = blockquoteCon.outerWidth(true);
    if (initWidth > 1024) {
      widthCurrent = 4 / items * 100;
      blockquoteScrollerBar.css('width', widthCurrent + '%')
    } else if (initWidth >= 768 && initWidth <= 1024) {
      widthCurrent = 3 / items * 100;
      blockquoteScrollerBar.css('width', widthCurrent + '%')
    } else if (initWidth >= 575 && initWidth < 768) {
      widthCurrent = 2 / items * 100;
      blockquoteScrollerBar.css('width', widthCurrent + '%')
    } else if (initWidth < 575) {
      widthCurrent = 1 / items * 100;
      blockquoteScrollerBar.css('width', widthCurrent + '%')
    }
    blockquoteCon.slick({
      slidesToShow: 4,
      infinite: false,
      prevArrow: blockquoteScrollerBarArrowLeft,
      nextArrow: blockquoteScrollerBarArrowRight,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }]
    });
    blockquoteCon.on('breakpoint', function(event, slick, breakpoint) {
      breakpointCurrent = breakpoint;
        breakpointFlag = true
        currentSlide = blockquoteCon.slick('slickCurrentSlide');
        i = currentSlide;
        var leftCurrent = currentSlide * pointWidth;
      if (breakpointCurrent == 1200) {
        widthCurrent = 4 / items * 100;
        blockquoteScrollerBar.css('width', widthCurrent + '%')
        blockquoteScrollerBar.css('left', leftCurrent + '%')
      } else if (breakpointCurrent == 1024) {
        widthCurrent = 3 / items * 100;
        blockquoteScrollerBar.css('width', widthCurrent + '%')
        blockquoteScrollerBar.css('left', leftCurrent + '%')
      } else if (breakpointCurrent == 768) {
        widthCurrent = 2 / items * 100;
        blockquoteScrollerBar.css('width', widthCurrent + '%')
        blockquoteScrollerBar.css('left', leftCurrent + '%')
      } else if (breakpointCurrent == 575) {
        widthCurrent = 1 / items * 100;
        blockquoteScrollerBar.css('width', widthCurrent + '%')
        blockquoteScrollerBar.css('left', leftCurrent + '%')
      } else {
        widthCurrent = 4 / items * 100;
        blockquoteScrollerBar.css('width', widthCurrent + '%')
        blockquoteScrollerBar.css('left', leftCurrent + '%')
      }
    });
    
    blockquoteCon.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if(breakpointFlag){
			return false
		}
      if (currentSlide == undefined || nextSlide == undefined) {
        return false;
      }
      if (currentSlide > nextSlide) {
        i = i-1;
        scrollerWidthCurrent = pointWidth * i;
        blockquoteScrollerBar.css('left', scrollerWidthCurrent + '%')
      } else {
        i=i+1;
        scrollerWidthCurrent = pointWidth * i;
        blockquoteScrollerBar.css('left', scrollerWidthCurrent + '%')
      }
    });
       blockquoteCon.on('afterChange', function(event, slick, currentSlide, nextSlide) {
          scrollerWidthCurrent = pointWidth * currentSlide;
          blockquoteScrollerBar.css('left', scrollerWidthCurrent + '%')
          i = currentSlide;
          breakpointFlag = false
        })
  }
})(window, jQuery);</script>