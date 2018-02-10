$(document).ready(function(){
	    $("#yasuo .up_img").hover(function () {
        $("#yasuo .triangle").addClass("radiu_scale")
        $("#yasuo .up_img img").addClass("scale_img")
    },function(){
        $("#yasuo .up_img img").removeClass("scale_img")
        $("#yasuo .triangle").removeClass("radiu_scale")
    })
    $("#fiona .up_img").hover(function () {
        $("#fiona .triangle").addClass("radiu_scale")
        $("#fiona .up_img img").addClass("scale_img")
    },function(){
        $("#fiona .up_img img").removeClass("scale_img")
        $("#fiona .triangle").removeClass("radiu_scale")
    })
    $("#monkey .up_img").hover(function () {
        $("#monkey .triangle").addClass("radiu_scale")
        $("#monkey .up_img img").addClass("scale_img")
    },function(){
        $("#monkey .up_img img").removeClass("scale_img")
        $("#monkey .triangle").removeClass("radiu_scale")
    })
    $("#ahri .up_img").hover(function () {
        $("#ahri .triangle").addClass("radiu_scale")
        $("#ahri .up_img img").addClass("scale_img")
    },function(){
        $("#ahri .up_img img").removeClass("scale_img")
        $("#ahri .triangle").removeClass("radiu_scale")
    })
})
