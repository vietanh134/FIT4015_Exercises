document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Ngăn load lại trang

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert("Vui lòng nhập đầy đủ thông tin vào tất cả các trường.");
        } else {
            alert(`Cảm ơn ${name}, chúng tôi đã nhận được tin nhắn của bạn!`);
            form.reset();
        }
    });
});
