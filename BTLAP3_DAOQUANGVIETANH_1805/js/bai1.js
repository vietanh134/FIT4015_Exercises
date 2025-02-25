$(document).ready(function() {
    // Thêm công việc mới
    $('#addTask').click(function() {
        const taskText = $('#taskInput').val().trim();
        if (taskText) {
            addTask(taskText);
            $('#taskInput').val('');
        }
    });

    // Thêm công việc khi nhấn Enter
    $('#taskInput').keypress(function(e) {
        if (e.which === 13) {
            const taskText = $(this).val().trim();
            if (taskText) {
                addTask(taskText);
                $(this).val('');
            }
        }
    });

    // Hàm thêm công việc mới
    function addTask(text) {
        const li = $('<li>').text(text);
        const deleteBtn = $('<button>')
            .addClass('delete-btn')
            .text('Xóa')
            .click(function() {
                $(this).parent().fadeOut(300, function() {
                    $(this).remove();
                });
            });
        
        li.append(deleteBtn);
        $('#taskList').append(li);
        
        // Thêm hiệu ứng fade in cho công việc mới
        li.hide().fadeIn(300);
    }

    // Đánh dấu công việc đã hoàn thành
    $(document).on('click', '#taskList li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).toggleClass('completed');
        }
    });
}); 