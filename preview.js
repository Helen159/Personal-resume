
function preview(id) {
    var sprnhtml = $('#' + id).html();   //获取区域内容
    var selfhtml = $('body').html(); //获取当前页的html
    $('body').html(sprnhtml);
    window.print();
    $('body').html(selfhtml);
}
