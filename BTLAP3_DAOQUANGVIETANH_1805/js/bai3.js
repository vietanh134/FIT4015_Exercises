$(document).ready(function() {
    const form = $('#registrationForm');
    
    // Xử lý sự kiện submit form
    form.submit(function(e) {
        e.preventDefault();
        
        // Reset trạng thái lỗi
        clearErrors();
        
        // Lấy giá trị input
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();
        
        let isValid = true;
        
        // Kiểm tra tên
        if (!name) {
            showError('name', 'Vui lòng nhập tên của bạn');
            isValid = false;
        }
        
        // Kiểm tra email
        if (!email) {
            showError('email', 'Vui lòng nhập email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Email không hợp lệ');
            isValid = false;
        }
        
        // Kiểm tra mật khẩu
        if (!password) {
            showError('password', 'Vui lòng nhập mật khẩu');
            isValid = false;
        } else if (password.length < 6) {
            showError('password', 'Mật khẩu phải có ít nhất 6 ký tự');
            isValid = false;
        }
        
        if (isValid) {
            // Nếu form hợp lệ, có thể submit ở đây
            alert('Đăng ký thành công!');
            form[0].reset();
        }
    });
    
    // Hàm kiểm tra email hợp lệ
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Hàm hiển thị lỗi
    function showError(fieldName, message) {
        $(`#${fieldName}`).addClass('error-input');
        $(`#${fieldName}Error`).text(message);
    }
    
    // Hàm xóa tất cả lỗi
    function clearErrors() {
        $('.error').text('');
        $('input').removeClass('error-input');
    }
    
    // Xóa thông báo lỗi khi người dùng bắt đầu nhập
    $('input').on('input', function() {
        $(this).removeClass('error-input');
        $(`#${this.id}Error`).text('');
    });
}); 