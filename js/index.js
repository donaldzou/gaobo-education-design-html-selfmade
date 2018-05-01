var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

if ($(window).width() >= 992) {
    $(".navbar-search").click(function () {
        if ($(".navbar-search").main_2sClass("opened")) { console.log("opened"); }
        else { $(".navbar-search").addClass("opened"); var width = $(".navbar-nav").width(); $(".navbar-nav").hide(); $(".navbar-search").css("width", width); $(".navbar-search").show(); $(".search-cancel").show(); $("#submit-search").show(); }
    });

    $(".search-cancel").click(function () {
        $(".navbar-search").removeClass("opened");
        $(".navbar-search").css("width", "");
        $(".search-cancel").hide();
        $("#submit-search").hide();
        $(".navbar-nav").fadeIn();
    });

}

if($(window).width() <=992){
    $("#main_1_nav").hide();
}



//test

var main_1_nav = $("#main_1_nav");
var main_1_nav_offset = main_1_nav.offset().top;
var menu = $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top");
var height = main_1_nav.height() + menu.height() +30;





function menucollapse() {
    
    if (menu.offset().top > 30) {
        menu.addClass("material_shadow");
    }
    else {
        menu.removeClass("material_shadow")
    }

    if($(window).width() >= 992){
        if (menu.offset().top >= main_1_nav_offset) {
            $("#main_1_nav").css("position", "fixed");
            $("#main_1_nav").css("top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
            $("#main_1_nav").css("z-index", "2000");
            $("#main_1_nav").css("width", "100%");
            $(".main_2").css("top", $("#main_1_nav").height()+60);
        } 
        else {
            $("#main_1_nav").css("position", "");
            $("#main_1_nav").css("top", "");
            $(".main_2").css("top", "");
    
        }
    }
    
    
}



$(document).ready(function () {
    $("#carouselMain1").css("padding-top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
    $(window).scroll(menucollapse);

    $("body").attr("data-offset", height);
    console.log(height);
});

$(".custom_selection a").click(function(){
    $(this).addClass("active");
});

var type1 = '<a href="#" class="list-group-item list-group-item-action">语文</a><a href="#" class="list-group-item list-group-item-action">数学</a><a href="#" class="list-group-item list-group-item-action">英语</a><a href="#" class="list-group-item list-group-item-action">物理</a><a href="#" class="list-group-item list-group-item-action">化学</a><a href="#" class="list-group-item list-group-item-action disabled">生物</a>';
var type2 = '<a href="#" class="list-group-item list-group-item-action">听力</a><a href="#" class="list-group-item list-group-item-action">阅读</a><a href="#" class="list-group-item list-group-item-action">口语</a><a href="#" class="list-group-item list-group-item-action">写作</a>';
var cars = ["Saab", "Volvo", "BMW"];
$("#program_select").change(function(){
    var course = $(this).val();
    $(".class_selection h2").text("请选择您学习的"+course+"科目");

    if ($(this).val() == "IGCSE" || $(this).val() == "DP"|| $(this).val() == "MYP" || $(this).val() == "A-Level"|| $(this).val() == "AP"|| $(this).val() == "IFD" ){
        $(".class_list").html(type1);
    }
    else{
        $(".class_list").html(type2);
    }
    
});