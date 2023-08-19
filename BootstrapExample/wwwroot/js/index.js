$('#btn').on('click', function () {
    if ($('input').val() === '') {
        $(this).text('Xóa nội dung')
        $('input').val('Test Bootstrap')
    } else {
        $(this).text('Thêm nội dung')
        $('input').val('')
    }
    $(this).toggleClass('btn-info btn-danger')
});