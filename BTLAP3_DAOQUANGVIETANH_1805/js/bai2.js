$(document).ready(function() {
    const images = $('.slideshow img');
    const colors = ['#f0f0f0', '#e8f5e9', '#e3f2fd', '#fce4ec'];
    let currentIndex = 0;

    // Ẩn tất cả hình ảnh trừ hình đầu tiên
    images.not(':first').hide();

    // Xử lý nút "Tiếp theo"
    $('#nextBtn').click(function() {
        changeImage(1);
    });

    // Xử lý nút "Quay lại"
    $('#prevBtn').click(function() {
        changeImage(-1);
    });

    function changeImage(direction) {
        const nextIndex = (currentIndex + direction + images.length) % images.length;
        
        // Ẩn hình ảnh hiện tại
        images.eq(currentIndex).fadeOut(500);
        
        // Hiển thị hình ảnh tiếp theo
        images.eq(nextIndex).fadeIn(500);
        
        // Thay đổi màu nền
        $('body').css('background-color', colors[nextIndex]);
        
        // Cập nhật chỉ số hiện tại
        currentIndex = nextIndex;
    }

    // Thiết lập màu nền ban đầu
    $('body').css('background-color', colors[0]);
}); 