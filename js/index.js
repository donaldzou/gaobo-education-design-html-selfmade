
//副菜单置顶
var main_1_nav = $("#main_1_nav");
var main_1_nav_offset = main_1_nav.offset().top;
var menu = $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top");
var height = main_1_nav.height() + menu.height() + 30;


function menucollapse() {


    if ($(window).width() >= 992) {
        if (menu.offset().top >= main_1_nav_offset) {
            menu.removeClass("material_shadow");
            $("#main_1_nav").css("position", "fixed");
            $("#main_1_nav").css("top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
            $("#main_1_nav").css("z-index", "1000");
            $("#main_1_nav").css("width", "100%");
            $(".main_2").css("top", $("#main_1_nav").height() + 60);
            $("#main_1_nav").addClass("material_shadow");
        }
        else {
            $("#main_1_nav").css("position", "");
            $("#main_1_nav").css("top", "");
            $(".main_2").css("top", "");
            $("#main_1_nav").removeClass("material_shadow");
        }
    }


}

if($(window).width() <= 992){
    menu.addClass("material_shadow");  
}



$(document).ready(function () {
    $("#carouselMain1").css("padding-top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
    $(window).scroll(menucollapse);

    $("body").attr("data-offset", height);

    // console.log(height);
});

$(".custom_selection a").click(function () {
    $(this).addClass("active");
});



//选择项目显示课程

var type_num, current_html, new_html, program, current_list, teacher_list, trial_list, trial_name, trial_list_name, height_info_a; //Declare

$("#program_select").change(function () {
    $(".comfirm_course").hide();
    $('html, body').animate({
        scrollTop: $(".class_selection").offset().top - height - 20
      }, 800);
    $(".class_list").html("");//Clear Course list for every changes
    $(".teacher_list_main").html("");//Clear teacher list for every changes 
    $(".trial_list_main").html("");
    $(".teacher_selection .text-muted").show();
    $(".trial_selection .text-muted").show();
    $(".class_selection .text-muted").addClass("display_none");
    program = $(this).val();
    if(program == "0"){
        $(".class_selection .text-muted").removeClass("display_none");
        $(".class_selection h2").text("2.请选择您学习的科目");
    }
    else{
        $(".class_selection h2").text("2. 请选择您学习的" + program + "科目");   
        current_list = JSON.parse($("."+program+"").text());
        // console.log(current_list);
    
        for (type_num = 0; type_num<current_list.length; type_num++){
            current_html = $(".class_list").html();
            new_html = current_html + '<a href="#" class="wow fadeInUp list-group-item list-group-item-action material_shadow" data-wow-duration="0.5s">'+current_list[type_num]+'</a>';
            $(".class_list").html(new_html);
        }



        $(".list-group-item").click(function(){//Show Teacher List using database
            $(".comfirm_course").hide();
            $(".trial_list_main").html("");
            $(".trial_selection .text-muted").show();
            $(".teacher_list_main").html(""); 
            $(".teacher_selection .text-muted").hide();
            $(".class_selection .active").removeClass("active");
            $(this).addClass("active");
            
            var selected_course = program+"_"+$(this).text();
            // console.log(selected_course);
            teacher_list = fuse.search(selected_course);
            // console.log(teacher_list);
            var next_row = 0;

            for (var teacher_l = 0; teacher_l<teacher_list.length; teacher_l++){
                next_row++;
                if (next_row > 3){
                    current_html = $(".teacher_list_main").html();
                    new_html = current_html + ' <div class="w-100"></div><div class="col-sm"><div class="card teacher-card material_shadow wow fadeInUp" data-wow-duration="0.5s" value="'+teacher_l+'"><div class="card-body"><img class="card-img-top" src="pic/man1.png" alt="Card image cap"><h5 class="card-title teacher-name">'+teacher_list[teacher_l].name+'</h5><p class="card-text">'+teacher_list[teacher_l].slogan+'</p></div></div>';
                    $(".teacher_list_main").html(new_html);
                    next_row = 1;
                }
                else{
                    current_html = $(".teacher_list_main").html();
                    new_html = current_html + '<div class="col-sm"><div class="card teacher-card material_shadow wow fadeInUp" data-wow-duration="0.5s" value="'+teacher_l+'"><div class="card-body "><img class="card-img-top" src="pic/man1.png" alt="Card image cap"><h5 class="card-title teacher-name">'+teacher_list[teacher_l].name+'</h5><p class="card-text">'+teacher_list[teacher_l].slogan+'</p></div></div>';
                    $(".teacher_list_main").html(new_html);  
                }
            }
            if ($(window).width() >= 992){
                $('html, body').animate({
                    scrollTop: $(".teacher_list_main").offset().top - height - 110
                  }, 800);
            }
            else{
                $('html, body').animate({
                    scrollTop: $(".teacher_list_main").offset().top - main_1_nav.height()
                  }, 800);
            }


            $(".teacher-card").click(function(){
                $(".comfirm_course").hide();
                $(".trial_list_main").html("");
                $(".trial_selection .text-muted").hide();
                $(".teacher-card.active").removeClass("active");
                $(this).addClass("active");
                trial_name = $(this).attr("value");
                trial_list = teacher_list[trial_name];
                // console.log(trial_list);
    
                next_row=0;
                // console.log(next_row);
                trial_list_name = trial_list.course;
                for (var n = 0; n < trial_list_name.length; n++){
                        next_row++;
                        if (next_row > 3){
                            current_html = $(".trial_list_main").html();
                            new_html = current_html + '<div class="w-100"></div><div class="col-sm"><i class="material-icons trial_info wow fadeInUp">menu</i><div class="card trial-card material_shadow wow fadeInUp" data-wow-duration="0.5s" value="'+n+'"><div class="info"><p class="info_des"></p></div><img class="card-img-top" src="pic/trial.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+trial_list_name[n].title+'</h5><p class="card-text">'+trial_list.name+'    |    '+trial_list_name[n].time+'</p></div>'
                            $(".trial_list_main").html(new_html);
                        }
                        else{
                            current_html = $(".trial_list_main").html();
                            new_html = current_html + '<div class="col-sm"><i class="material-icons trial_info wow fadeInUp">menu</i><div class="card trial-card material_shadow wow fadeInUp" data-wow-duration="0.5s" value="'+n+'"><div class="info"><p class="info_des"></p></div><img class="card-img-top" src="pic/trial.jpg" alt="Card image cap"><div class="card-body "><h5 class="card-title">'+trial_list_name[n].title+'</h5><p class="card-text">'+trial_list.name+'    |    '+trial_list_name[n].time+'</p></div>'
                            $(".trial_list_main").html(new_html);
                        }
                }
                if ($(window).width() >= 992){
                    $('html, body').animate({
                        scrollTop: $(".trial_list_main").offset().top - height - 110
                      }, 800);
                }
                else{
                    $('html, body').animate({
                        scrollTop: $(".trial_list_main").offset().top - main_1_nav.height()
                      }, 800);
                }
                $(".info").css("height", "0px");


                $(".trial-card").click(function(){
                    $(".trial-card.active").removeClass("active");
                    $(this).addClass("active");
                    $(".comfirm_course").show();
                    $(".comfirm_course").addClass("animated fadeInUp");
                    
                    $(".comfirm_course .lead").text("您选择了"+program+"项目的"+$(".list-group-item.active").text()+"课程，并且选择了"+$(".teacher-card.active .teacher-name").text()+"的"+$(".trial-card.active .card-title").text()+"试听课");
                });

                $(".trial_info").click(function () {
                        var child = $(".info_des");
                        var sub_child = $(".info");
                        var open = $(".info.opened_trial_info");
                        var k = $(this).next().attr("value")
                        var modal_title = trial_list_name[k].title;
                        var modal_title_teacher = trial_list.name;
                        var modal_title_time = trial_list_name[k].time;
                        $(this).parent().find(child).text(trial_list_name[k].description);
                        var height_info = $(this).parent().find(child).height();
                        var sub_height = $(this).parent().find(sub_child);
                        height_info_a = height_info +70+ "px";
                        


                        if($(this).parent().find($(".info.opened_trial_info")).length == 1){
                            $(this).parent().find($(".info.opened_trial_info")).css("height", "0px");
                            $(this).parent().find($(".info.opened_trial_info")).removeClass("opened_trial_info");
                            $(this).text("menu");
                            $(this).css("color", "#ffffff");
                        }
                        else{
                            sub_height.css("height", height_info_a);
                            sub_height.addClass("opened_trial_info");
                            
                            $(this).text("close");
                            $(this).css("color", "#1565C0")

                        }

                    
                    
                    //     if ($(".info.opened_trial_info").length == 1) {
                    //         $(".info.opened_trial_info").css("height", "0px");
                    //         $(".info.opened_trial_info").removeClass("opened_trial_info");
                    //     }
                    //     else {
                    //         sub_height.css("height", height_info_a);
                    //         sub_height.addClass("opened_trial_info");
                    //         $(".info.opened_trial_info").css("height", "0px");
                    //         $(".info.opened_trial_info").removeClass("opened_trial_info");
                    // }

                })


                
                


            });


            
        });

        




    }
});








// Create DB and fill it with records






//选择课程显示老师



