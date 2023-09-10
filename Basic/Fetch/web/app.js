const listCoursesBlock = document.getElementById('posts-block');

const coursesAPI = 'http://localhost:3000/courses';

function start() {
    // Hoặc viết getCourses(renderCourses); luôn
    getCourses(function (courses) {
        renderCourses(courses);
    });

    handleSaveForm();
}

function isValidInput() {
    let isValid = true;
    debugger
    document.querySelectorAll('textarea').forEach(function (element) {
        if (element.value === '') {
            isValid = false;
            element.classList.add('item-error');
        } else {
            element.classList.remove('item-error');
        }
    });
    return isValid;
}

// Functions
function getCourses(callBack) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callBack);
}

function saveCourse(course, callBack) {
    const courseItemId = document.getElementById('btn-save').getAttribute('course-item');
    let url = coursesAPI;
    let method = 'POST';
    if (courseItemId != undefined) {
        url += '/' + courseItemId;
        method = 'PUT';
    }

    var options = {
        method: method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(course)
    };

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(callBack);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    };
    fetch(coursesAPI + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // Xoá course trên giao diện
            const courseItem = document.querySelector(`.course-item-${id}`);
            courseItem.remove();
        });
}

function handleUpdateCourse(id) {
    const courseItem = document.querySelector(`.course-item-${id}`);
    const title = courseItem.querySelector('h2').innerText;
    const description = courseItem.querySelector('p').innerText;
    document.querySelector('textarea[name="title"]').value = title;
    document.querySelector('textarea[name="description"]').value = description;

    document.getElementById('btn-save').setAttribute('course-item', id.toString());
}

/**
 * 
 * @param {Array} courses 
 */
function renderCourses(courses) {
    let html = '';
    courses.forEach(function (course) {
        html += `<li class="course-item-${course.id}">
            <div class='div-title'>
                <h2>${course.title}</h2>
                <button onclick="handleUpdateCourse(${course.id})" class="btn-update">Sửa</button>
                <button onclick="handleDeleteCourse(${course.id})" class="btn-delete">Xoá</button>
            </div>
            <p>${course.description}</p>
        </li>`
    })
    listCoursesBlock.innerHTML = html;
}

function handleSaveForm() {
    const createBtn = document.getElementById('btn-save');
    createBtn.onclick = function () {
        const title = document.querySelector('textarea[name="title"]').value;
        const description = document.querySelector('textarea[name="description"]').value;

        if (!isValidInput()) {
            return;
        }
        const formData = {
            title: title,
            description: description
            // hoặc chỉ cần { title, description } là được
        }
        saveCourse(formData, function (createdCourse) {
            const courseItemId = document.getElementById('btn-save').getAttribute('course-item');
            if (courseItemId == undefined) {
                // Trường hợp thêm mới
                const html = listCoursesBlock.innerHTML +
                    `<li class="course-item-${createdCourse.id}">
                    <div class='div-title'>
                        <h2>${createdCourse.title}</h2>
                        <button onclick="handleUpdateCourse(${createdCourse.id})" class="btn-update">Sửa</button>
                        <button onclick="handleDeleteCourse(${createdCourse.id})" class="btn-delete">Xoá</button>
                    </div>
                    <p>${createdCourse.description}</p>
                </li>`;
                listCoursesBlock.innerHTML = html;
            } else {
                // Trường hợp chỉnh sửa
                const courseItem = document.querySelector(`.course-item-${courseItemId}`);
                courseItem.querySelector('h2').innerText = title;
                courseItem.querySelector('p').innerText = description;

                // Xoá đi attribute này trên button xoá để tránh lần sau bị nhầm đây là trường hợp chỉnh sửa
                document.getElementById('btn-save').removeAttribute('course-item');
            }
        });

        // Xoá nội dung input
        document.querySelector('textarea[name="title"]').value = '';
        document.querySelector('textarea[name="description"]').value = '';
    }
}

start();