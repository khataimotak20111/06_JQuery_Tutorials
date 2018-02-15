$('#button, #para').click(
    function () {
        alert('Something was Clicked.');
    }
);

$('#button').click(
    function () {
        $(this).attr('value', 'Pacha');
    }
);