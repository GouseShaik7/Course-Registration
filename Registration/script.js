document.getElementById('next1').addEventListener('click', function () {
    document.getElementById('personal-info').style.display = 'none';
    document.getElementById('course-selection').style.display = 'block';
});

document.getElementById('next2').addEventListener('click', function () {
    document.getElementById('course-selection').style.display = 'none';
    document.getElementById('payment-details').style.display = 'block';
});

document.getElementById('next3').addEventListener('click', function () {
    document.getElementById('payment-details').style.display = 'none';
    document.getElementById('account-setup').style.display = 'block';
});

document
