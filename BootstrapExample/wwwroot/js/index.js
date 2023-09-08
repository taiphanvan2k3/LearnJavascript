$('#btn').on('click', function () {
    // Xóa element có class cadre-info cuối cùng của collection trả về
    const result = Array.from($('.cadre-info')).reduce(function (total, element) {
        return total + $(element).data('number')
    }, 0);
    $('#result').val(result)
    debugger
    const array = $('.cadre-info').slice(0).toArray();
    $('.cadre-info').slice(-2).remove();
    if ($('input').val() === '') {
        $(this).text('Xóa nội dung')
        $('input:not(#result)').val('Test Bootstrap')
    } else {
        $(this).text('Thêm nội dung')
        $('input:not(#result)').val('')
    }
    $(this).toggleClass('btn-info btn-danger')
});

function test(...obj) {
    console.log(obj);
    // ...$('.cadre-info') trả về 1 mảng các HTMLElement
    obj.forEach(function (element) {
        if (element instanceof HTMLElement) {
            console.log(element.className);
        }
    })
}
// test('abc', ...$('.cadre-info'));

const cadreInfos = document.querySelectorAll('.cadre-info');
const cadreInfos_ = document.getElementsByClassName('cadre-info');
const cadreInfoArray = $('.cadre-info').toArray();
const cadreInfoArray2 = Array.from($('.cadre-info'))
const cadreInfoArray3 = $('.cadre-info');
console.log(cadreInfoArray3)
console.log([...cadreInfoArray3])
// for (let i = 0; i < cadreInfoArray3.length; i++) {
//     // console.log(cadreInfos[i] instanceof HTMLElement);
//     // console.log(cadreInfos_[i] instanceof HTMLElement);
//     console.log(cadreInfoArray3[i] instanceof HTMLElement);
// }
const temp = [...cadreInfoArray3]
console.log(Array.isArray(temp));
const temp2 = { ...cadreInfoArray3 }
console.log(temp2[0] instanceof HTMLElement);

const numbers = [1, 2, 3, 4, 50];
numbers.forEach(function (number) {
    console.log(number);
})

$('.cadre-info').each()