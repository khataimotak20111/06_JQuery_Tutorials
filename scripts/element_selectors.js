$('p:first').text('Hello World');

$(':button').click(
    function () {
        alert('Button is clicked!');
    }
);

$(':submit').click(
    function () {
        alert('Submit is clicked!');
        $(':button').attr('value', 'TADA');
    }
);

$(':text').focusin(
    function () {
        $(this).css('background-color', 'yellow');
    }
);

$(':text').focusout(
    function () {
        $(this).css('background-color', 'blue');
    }
);

$('#new').click(
    function () {
        $('p').css('background-color', 'green');
    }
);