
//利用jquery插件实现定点滚动

$("#nav-home-button").click(function () {
    $.scrollTo("#banner",2000);
});
$("#nav-about-button").click(function () {
    $.scrollTo("#about-us",800);
});
$("#nav-join-button").click(function () {
    $.scrollTo("#join-us",800);
});
$("#nav-connact-button").click(function () {
    $.scrollTo("#connact-us",800);
});