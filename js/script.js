$(".box").mouseover(function(){
 $(this).find("video").get(0).play();
})

$(".box").mouseout(function(){
 $(this).find("video").get(0).pause();
})
/* 자식은 children 자손은 find 
get(0) 인덱스 넘버 적어주기*/

$(".box1").click(function(){
 $(".page1").addClass("on")
})
$(".box2").click(function(){
 $(".page2").addClass("on")
})
$(".box3").click(function(){
 $(".page3").addClass("on")
})
$(".box4").click(function(){
 $(".page4").addClass("on")
})
$(".close").click(function(){
 $(".page").removeClass("on")
})