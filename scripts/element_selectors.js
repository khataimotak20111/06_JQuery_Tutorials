$('p:last').text('Hello World');

$(':button').click(
    function(){
        alert('Button is clicked!');
    }
);

$(':submit').click(
    function(){
        alert('Submit is clicked!');
        $(':button').attr('value', 'TADA');
    }
);