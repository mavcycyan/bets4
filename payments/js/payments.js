$(document).ready(function(){function a(a){$(".pay__tab_title-active").removeClass("pay__tab_title-active"),a.addClass("pay__tab_title-active"),$(".payment_method_button.pay__payments_item-active").removeClass("pay__payments_item-active"),$(".pay__payments").hide(),$(".pay__payments_form_content").hide(),$(".pay__history").hide(),"deposit_button"==a.attr("id")?$(".pay__payments_deposit").show():"withdraw_button"==a.attr("id")?$(".pay__payments_receive").show():"history_button"==a.attr("id")&&$(".pay__history").show()}function b(){var a=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],b=$(".pay__payments_form_content:visible .payment_form"),e=b.find(".payment_form_currency option:selected").data("cof"),f=b.find(".payment_form_currency option:selected").text(),g=0;if(b.find(".payment_form_currency option:selected").data("value")&&(g=b.find(".payment_form_currency option:selected").data("value"),$(".add_commission_value:visible").text("".concat(g," ").concat(f))),a){var h=b.find(".payment_form_value").val()/e-g,i=b.find(".payment_form_value").val()*e-g;h=0>h?0:h,i=0>i?0:i,b.find(".insert_forms_get input").val(d(h,2)),"BTC"==f?b.find(".receive_forms_get input").val(d(i,6)):b.find(".receive_forms_get input").val(d(i,2))}else{var h=b.find("input.payment_form_second_value").val()*e+g,i=(+b.find("input.payment_form_second_value").val()+g)/e;h=0>h?0:h,i=0>i?0:i,$(".pay__payments_receive input.payment_form_value:visible").val(d(Math.ceil(100*i)/100,2)),"BTC"==f?$(".pay__payments_deposit input.payment_form_value:visible").val(d(Math.ceil(1e6*h)/1e6,6)):$(".pay__payments_deposit input.payment_form_value:visible").val(d(Math.ceil(100*h)/100,2))}$(".receive_forms_get_currency").text(f),c()}function c(){"RUB"==$("#receive_forms_cards .payment_form_currency").find("option:selected").text()?($("#receive_forms_cards .card_name").show(),$("#receive_forms_cards .card_surname").show(),$("#receive_forms_cards .card_ValidDate").hide()):($("#receive_forms_cards .card_name").hide(),$("#receive_forms_cards .card_surname").hide(),$("#receive_forms_cards .card_ValidDate").show()),$("#receive_forms_cards input:visible").prop("required",!0),$("#receive_forms_cards input:hidden").prop("required",!1)}function d(a,b){if(a+="",-1!==a.indexOf(".")){var c=a.split(".");if(1==c.length)return+a;for(var d=c[0]+".",e=0;e<b;e++)d+=c[1].charAt(e);return+d}return+a}function e(){var a=$("#history_table_js"),b=$(".pay__history .loading-div"),c=$(".pay__history .button-load-ajax"),d=a.data("url")+"?page=".concat(h);console.log(d),c.hide(),b.show(),$.ajax({url:d,success:function success(d){return d&&"NONE"!=d.trim()?void(b.hide(),c.show(),a.append(d),$(window).trigger("resize"),h++):(b.hide(),void c.hide())}})}a($(".top_button.pay__tab_title-active")),$(".top_button").click(function(){a($(this))}),$(".pay__tabs").on("click",".payment_method_button",function(){var a="insert";$(this).parents(".payment_system_deposit").length?a="insert":$(this).parents(".pay__payments_receive").length&&(a="receive"),$(".payment_method_button.pay__payments_item-active").removeClass("pay__payments_item-active"),$(this).addClass("pay__payments_item-active"),$(".pay__payments_form_content").hide();var c=$(".pay__payments_item-active").attr("class").split(" ").filter(function(a){return a.includes("pay__payments_item-")&&"pay__payments_item-active"!=a})[0].replace("pay__payments_item-","");$("#".concat(a,"_forms_").concat(c)).show(),b()}),$("#receive_forms_cards .payment_form_currency").on("change",function(){b()}),$(".payment_form_currency").on("change",function(){b()}),$(".payment_form_value").on("keyup change",function(a){isNaN($(this).val())&&$(this).val(0),"change"==a.type&&"RUB"==$("#receive_forms_cards .payment_form_currency:visible option:selected").text()?$(".payment_form_second_value:visible").change():b()}),$(".payment_form_second_value").on("keyup change",function(a){isNaN($(this).val())&&$(this).val(0),"change"==a.type&&"RUB"==$("#receive_forms_cards .payment_form_currency:visible option:selected").text()?($(this).val(100*Math.ceil($(this).val()/100)),$(this).keyup()):b(!1)}),$(".pay").on("click",".payment_form_value, .payment_form_second_value",function(){0==$(this).val()&&$(this).val("")}),$(".pay").on("focusout",".payment_form_value, .payment_form_second_value",function(){""==$(this).val()&&$(this).val(0)});var f=$.masksSort($.masksLoad("https://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"),["#"],/[0-9]|#/,"mask"),g={inputmask:{definitions:{"#":{validator:"[0-9]",cardinality:1}},showMaskOnHover:!1,autoUnmask:!0,clearMaskOnLostFocus:!1},match:/[0-9]/,replace:"#",list:f,listKey:"mask"};$("input.phone_js_mask").inputmasks(g),$(".card_ValidDate input").inputmask("99/99"),$(".card_number input").inputmask("9999 9999 9999 9999"),$(".pay__history ").on("click",".details__tr_js",function(){var a=$(this).find(".details__arrow");a.toggleClass("details__arrow-on");var b=a.attr("data-link");$("#"+b).toggle(),$(".pay__history table tr td."+b+"1").toggleClass("details-on")}),$(".pay__history").on("click",".button-load-ajax",function(){e()});var h=0;e()});