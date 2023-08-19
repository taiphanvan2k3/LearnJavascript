const handleEventClick = function () {
    const btn = document.getElementById('btn');
    const colors = ['red', 'blue', 'green'];
    let isFirstClicked = true;
    let index = 0;

    function btnClick() {
        if (index >= colors.length) {
            index = 0;
        }
        btn.style.background = colors[index++];

        // 3s kể từ lần click đầu tiên thì sẽ thực hiện xóa đi màu green
        if (isFirstClicked) {
            isFirstClicked = false;

            // Không chặn dòng code tiếp theo chạy sau dòng setTimeout này mà đơn thuần đoạn column
            // bên trong function của setTimeout sẽ được thực hiện sau 3000ms kể từ thời điểm đọc
            // đến dòng lệnh này
            setTimeout(function () {
                colors.pop();
            }, 3000);
        }
    }

    btn.addEventListener('click', btnClick);
}

handleEventClick();