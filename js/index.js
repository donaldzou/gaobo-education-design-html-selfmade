
//副菜单置顶
var main_1_nav = $("#main_1_nav");
var main_1_nav_offset = main_1_nav.offset().top;
var menu = $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top");
var height = main_1_nav.height() + menu.height() + 30;

function menucollapse() {

    if (menu.offset().top > 30) {
        menu.addClass("material_shadow");
    }
    else {
        menu.removeClass("material_shadow");
    }

    if ($(window).width() >= 992) {
        menu.removeClass("material_shadow");
        if (menu.offset().top >= main_1_nav_offset) {
            
            $("#main_1_nav").css("position", "fixed");
            $("#main_1_nav").css("top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
            $("#main_1_nav").css("z-index", "1000");
            $("#main_1_nav").css("width", "100%");
            $(".main_2").css("top", $("#main_1_nav").height() + 60);
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

$(".custom_selection a").click(function () {
    $(this).addClass("active");
});



//选择项目显示课程

var type_num, current_html, new_html, program, current_list; //Declare

$("#program_select").change(function () {
    $(".class_list").html("");//Clear Course list for every changes
    $(".teacher_selection").addClass("blur");
    $(".teacher_list_main").html("");//Clear teacher list for every changes 

    $(".class_selection .text-muted").addClass("display_none");
    program = $(this).val();
    if(program == "0"){
        $(".class_selection .text-muted").removeClass("display_none");
        $(".class_selection h2").text("请选择您学习的科目");
        $(".class_selection").addClass("blur");
    }
    else{
        $(".class_selection").removeClass("blur");
        $(".class_selection h2").text("请选择您学习的" + program + "科目");   
        current_list = JSON.parse($("."+program+"").text());
        console.log(current_list);
    
        for (type_num = 0; type_num<current_list.length; type_num++){
            current_html = $(".class_list").html();
            new_html = current_html + '<a href="#" class="list-group-item list-group-item-action material_shadow">'+current_list[type_num]+'</a>';
            $(".class_list").html(new_html);
        }



        $(".list-group-item").click(function(){//Show Teacher List using database
            $(".teacher_selection").removeClass("blur");
            $(".teacher_list_main").html(""); 
            var selected_course = program+"_"+$(this).text();
            console.log(selected_course);
            var teacher_list = fuse.search(selected_course);
            console.log(teacher_list);
            var next_row = 0;

            for (var teacher_l = 0; teacher_l<teacher_list.length; teacher_l++){
                next_row++;
                if (next_row > 3){
                    current_html = $(".teacher_list_main").html();
                    new_html = current_html + ' <div class="w-100"></div><div class="col-sm"><div class="card"><div class="card-body"><img class="card-img-top" src="pic/man1.png" alt="Card image cap"><h5 class="card-title">'+teacher_list[teacher_l].name+'</h5><p class="card-text">'+teacher_list[teacher_l].slogan+'</p></div></div>';
                    $(".teacher_list_main").html(new_html);
                    next_row = 1;
                }
                else{
                    current_html = $(".teacher_list_main").html();
                    new_html = current_html + '<div class="col-sm"><div class="card"><div class="card-body"><img class="card-img-top" src="pic/man1.png" alt="Card image cap"><h5 class="card-title">'+teacher_list[teacher_l].name+'</h5><p class="card-text">'+teacher_list[teacher_l].slogan+'</p></div></div>';
                    $(".teacher_list_main").html(new_html);  
                }
            }
            if ($(window).width() >= 992){
                $('html, body').animate({
                    scrollTop: $(".teacher_list_main").offset().top+height
                  }, 800);
            }
            else{
                $('html, body').animate({
                    scrollTop: $(".teacher_list_main").offset().top - main_1_nav.height()
                  }, 800);
            }
            
        });


    }
});








// Create DB and fill it with records






//选择课程显示老师



