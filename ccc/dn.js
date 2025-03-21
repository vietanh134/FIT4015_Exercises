document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const validEmail = "123@vanhmobile.com";
    const validPassword = "123456";

    if (emailInput === validEmail && passwordInput === validPassword) {
        alert("Đăng nhập thành công!");
        window.location.href = "c.html"; // Trang chính sau khi đăng nhập thành công
    } else {
        alert("Email hoặc mật khẩu không đúng. Vui lòng thử lại!");
    }
});
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Không cho submit mặc định

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password === '123456') {
        window.location.href = "c.html"; // chuyển trang
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});

