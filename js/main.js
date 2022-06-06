function submit_form() {
    event.preventDefault();
    var fname = $.trim($('#fname').val());
    var lname = $.trim($('#lname').val());
    var phone = $.trim($('#phone').val());
    var email = $.trim($('#email').val());
    var message = $.trim($('#message').val());
    //var captcha =     $.trim($('#captcha').val()); //"<?php //echo $_SESSION['security_number']?>";

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{1})/;
    //var regex_contact =   /^(\+|\(\+)?\d+(\-|\)|\s)+?\d+/;

    var error = 0;
    var elementToBeFocus = "";

    if (fname == "" || fname == "Name *") {
        $('#fname').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "fname";
        error = 1;
    } else {
        $('#fname').css('borderColor', '');
    }

    if (lname == "" || lname == "LAST NAME") {
        $('#lname').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "lname";
        error = 1;
    } else {
        $('#lname').css('borderColor', '');
    }

    if (phone == "" || phone == "PHONE NUMBER") {
        $('#phone').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "phone";
        error = 1;
    } else if (!phoneRegex.test(phone)) {
        $('#phone').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "phone";
        error = 1;
    } else {
        $('#phone').css('borderColor', '');
    }

    if (email == "" || email == "EMAIL ADDRESS") {
        $('#email').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "email";
        error = 1;
    } else if (!regex.test(email)) {
        $('#email').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "email";
        error = 1;
    } else {
        $('#email').css('borderColor', '');
    }

    if (message == "WRITE A MESSAGE...." || message == "" || message == "WRITE A MESSAGE..." || message == "WRITE A MESSAGE.." || message == "WRITE A MESSAGE " || message == "WRITE A MESSAGE" || message == "WRITE A MESSAGE.") {
        $('#message').css('borderColor', 'red');
        if (elementToBeFocus == "")
            elementToBeFocus = "message";
        error = 1;
    } else {
        $('#message').css('borderColor', '');
    }


    if (error == 1) {
        $('#' + elementToBeFocus).focus();
        // alert("ERROR");
        return false;
    } else {
        $.ajax({
            url: "contact.php",
            method: "POST",
            data: {
                fname: fname,
                lname: lname,
                phone: phone,
                email: email,
                message: message
            },
            success: function(data) {
                console.log(data);
                if (data == 1) {
                    $('#contact_form').trigger('reset');
                    $('.errS').hide();
                    $('.f_success').html("Your Message has been sent!");
                } else {
                    $('.f_success').hide();
                    $('.errS').html("An Error Occurred!");
                }
            }
        });
    }
    return false;
};