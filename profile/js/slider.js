$(document).ready(function(){function a(a){function b(b){a.find(".slider__top-wrapper div").removeClass("slider__title-active").eq(b).addClass("slider__title-active")}function c(b){for(var c=d[b]/-2,e=0,f=0;f<b;f++)e-=d[f];var g=0;a.find(".slider__top-wrapper div").each(function(a){$(this).css("margin-left",c+e+g+"px"),g+=d[a]})}var d=[],e=a.find(".slider__top-wrapper .slider__title-active").prevAll().length;a.find(".slider__top-wrapper div").each(function(){d.push(+$(this).innerWidth())}),c(e),a.find(".slider").off("afterChange").on("afterChange",function(){c(a.find(".slider").slick("slickCurrentSlide")),b(a.find(".slider").slick("slickCurrentSlide"))}),a.find(".slider__top-wrapper div").off("click").click(function(){var d=$(this).prevAll().length;b(d),c(d),a.find(".slider").slick("slickGoTo",d)})}$(".wrapper-for-slider").each(function(){$(this).clone().appendTo($(this).data("slider_item-selector"))}),$(".slider").each(function(){$(this).slick({arrows:!1,dots:!1,infinite:!1,adaptiveHeight:!0}),a($(this).parents(".mobile-wrapper"))});$(window).resize(function(){$(".slider").each(function(){a($(this).parents(".mobile-wrapper")),$(this).find(".slick-slide").height("auto"),$(this).find(".slick-list").height("auto"),$(this).slick("setOption","","",!0)})})});