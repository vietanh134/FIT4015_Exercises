$(document).ready(function() {
    let countdown;
    let timeLeft = 10;
    let isRunning = false;

    // Xử lý nút Bắt đầu
    $('#startBtn').click(function() {
        if (!isRunning) {
            startCountdown();
            $(this).addClass('disabled');
        }
    });

    // Xử lý nút Đặt lại
    $('#resetBtn').click(function() {
        resetCountdown();
    });

    function startCountdown() {
        isRunning = true;
        $('#message').text('');
        
        countdown = setInterval(function() {
            timeLeft--;
            $('#timer').text(timeLeft);
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                $('#message').text('Thời gian đã hết!');
                $('#startBtn').removeClass('disabled');
                isRunning = false;
            }
        }, 1000);
    }

    function resetCountdown() {
        clearInterval(countdown);
        timeLeft = 10;
        $('#timer').text(timeLeft);
        $('#message').text('');
        $('#startBtn').removeClass('disabled');
        isRunning = false;
    }
}); 