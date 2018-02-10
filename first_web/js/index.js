$(document).ready(function(){
     var wid=document.body.clientWidth;
    var j=0;
    var i=0;
    var angle=0;
    var xs=0;
    var l=500;
    var flag=true;
    var flag1=true;
    var flag2=true;
    $(".stage1").css("width", "" + wid + "px");
    $(".nav1").css("width",""+wid+"px");
    $(".html").css("width",""+wid+"px");
    $(".css").css("width",""+wid+"px");
    $(".jQuery").css("width",""+wid+"px");
        $(window).scroll(function () {
        var top=$(window).scrollTop();
                if(top<500) {
            if (top > 400)
                $("#jiantou").stop().fadeIn()
            else
                $("#jiantou").stop().fadeOut()
        }
        else {
            var ht = $(window).scrollTop();
            if (ht > j)
                $("#jiantou").stop().fadeIn();
            else
                $("#jiantou").stop().fadeOut();
            j = ht
        }
        if(top>460){
            $(".w_html h1,.w_html h2,.w_html p,.w_html h3").addClass("onscroll")
        }
        if(top>500&&top<1000)
        {
            var d=top-l;
            l=top;
            
            $(".tot_text").css("transform","translateZ("+(angle+=d/2)+"px)");
            $(".tot_text span").css("text-shadow","0 4px "+(xs+=d/30)+"px rgba(31, 31, 31, 0.91)")
        }
        if(top>1100)
        {
            $(".yang").css({"font-size":"3.3vw"});
        }
         while(flag&&top>1300)
            {
                if(top>1300)
        {
            $(".css_text h2").slideDown(3000);
            $(".css_text h4").fadeIn(3000);
            $(".css_text h3").fadeIn(3000);
        }
        flag=false;
        console.log(flag)
            }
            while(flag1&&top>2000)
            {
                                if(top>2000)
        {
            $(".css3 h2").slideDown(1500);
            setTimeout(function () {
                $(".css3 h3").css("left","0");
            },1500)
        }
        flag1=false;
        console.log(flag1)
            }
            while(flag2&&top>2400)
            {
                                if(top>2400)
        {
            setTimeout(function () {
                $(".jQuery .h4_1").slideDown(1000);
                $(".jQuery .h4_2").slideDown(2000);
                $(".jQuery .h4_3").slideDown(3000);
            },2500)
        }
        flag2=false;
        console.log(flag2)
            }

    })
     setTimeout((function () {
        $(".daiti").remove();
        $("header").fadeIn(1600);
    }),1500)
        $("#jiantou").click(function () {
        $("body","html").animate({scrollTop:0},300);
    })
           $(".btn_css3").hover(function () {
        setTimeout(function () {
            $("#cov").addClass("slide_btn")
        },400);
    },function () {
        $("#cov").removeClass("slide_btn")
        
    })
       $("#jiantou").hover(function () {
        $("#jit").stop().fadeIn();
    },function () {
        $("#jit").stop().fadeOut();
    })
        $("header .head1 li").hover(function () {
        $(this).find(".xiala1").stop().slideDown({duration:1000,easing:'easeOutBounce'})
    },function () {
        $(this).find(".xiala1").stop().slideUp({duration:1000,easing:'easeOutBounce'})
    })
       	 setTimeout(function () {
        $("._line").css("animation","myline1 10s linear infinite"),
        $(".ronqi").css("animation","mybox 40s  linear infinite"),
        $(".ronqi2").css("animation","mybox2 40s linear infinite"),
        $(".stage1").css("background","MediumAquamarine")
    },5500)
    setTimeout(function () {
        $(".stage1").css("background","rgba(0,0,0,0.9)")
    },12000)
    setTimeout(function () {
        $(".box_fl").css("background","black"),
        $(".box_bl").css("background","black"),
        $(".box_ll").css("background","black"),
        $(".box_rl").css("background","black"),
        $(".box_tl").css("background","black"),
        $(".box_bol").css("background","black")
    },8000)
    setTimeout(function () {
        $(".box_fl").css("background","transparent"),
        $(".box_bol").css("background","transparent"),
        $(".box_bl").css("background","transparent"),
        $(".box_ll").css("background","transparent"),
        $(".box_rl").css("background","transparent"),
        $(".box_tl").css("background","transparent")
    },12000)
    setTimeout(function () {
        $(" .box_f").css("transform","translateZ(250px)"),
        $(" .box_bo").css("transform","rotateX(-90deg)translateZ(250px)"),
        $(" .box_b").css("transform","rotateY(180deg)translateZ(250px)"),
        $(" .box_l").css("transform","rotateY(-90deg)translateZ(250px)"),
        $(" .box_r").css("transform","rotateY(90deg)translateZ(250px)"),
        $(" .box_t").css("transform","rotateX(90deg)translateZ(250px)")
    },11500)
    setTimeout(function(){
    	$(".ronqi>div").css(
    		{
    			transition:'2s',
    			background:'transparent'
    		}
    	)
    },20000)
})
$(window).resize(function () {
    var wid = document.body.clientWidth;
    $(".nav1").css("width",""+wid+"px");
    $(".html").css("width",""+wid+"px");
    $(".css").css("width",""+wid+"px");
    $(".jQuery").css("width",""+wid+"px");
    $(".stage1").css("width", "" + wid + "px");
})
       

 