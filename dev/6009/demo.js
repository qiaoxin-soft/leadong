<script>(function(window, $, undefined) {
  var _block_namespaces_ = window._block_namespaces_ || (window._block_namespaces_ = {});
  var name = "blockquote20191106";
  var blockNamespace = _block_namespaces_[name] || (_block_namespaces_[name] = {});
  $.extend(blockNamespace, {
    "init": init
  })

  function init(nodeObj) {
    if (!!!nodeObj) {
      return;
    }
    var $selector = $('div[data-settingid=' + nodeObj.settingId + ']');
    var blockquoteCon = $selector.find(".item_box_con");
    var img = $selector.find(".item__right img");
    var imgLeftBg = $selector.find(".item__left-bg img");
    var imgBg = $selector.find(".item__bg img");
    var blockquoteScrollerBarArrowLeft = $selector.find(".item_box_icon_left");
    var blockquoteScrollerBarArrowRight = $selector.find(".item_box_icon_right");
    blockquoteCon.slick({
      slidesToShow: 1,
      infinite: true,
      touchMove: true,
      swipe: false,
      draggable: false,
	  fade: true,
      prevArrow: blockquoteScrollerBarArrowLeft,
      nextArrow: blockquoteScrollerBarArrowRight,
    });
      var preSlick;
    blockquoteCon.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        preSlick = currentSlide
        blockquoteCon.find('.item:eq(' + nextSlide + ') .item__right img').addClass('active')
        blockquoteCon.find('.slick-slide').css('opacity',1)
      imgLeftBg.removeClass('active')
      imgBg.removeClass('active')
    });
    blockquoteCon.on('afterChange', function(event, slick, currentSlide) {
      //img.addClass('active')
        blockquoteCon.find('.item:eq('+preSlick+') .item__right img').removeClass('hide')
          blockquoteCon.find('.item:eq('+preSlick+') .item__right img').removeClass('active')
          //blockquoteCon.find('.item:eq('+currentSlide+') .item__right img').addClass('active')
      imgLeftBg.addClass('active')
      imgBg.addClass('active')

    })
  }
})(window, jQuery);</script>