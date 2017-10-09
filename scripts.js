// console.log($);
$(document).ready(() => {
    $('.main-wrapper').submit(function(event) {
        event.preventDefault();
        var userInput;
        var textInput;
        var userInterests;
        var inputClass;
        var inputError = `.${inputClass}-error`;
        $('.form-wrapper input').each(function() {
            userInput = $(this).val();
            inputClass = $(this).attr('class');
            var inputError = `.${inputClass}-error`
            if (userInput === "") {
                $(inputError).html("Field must not be empty.")
                $(inputError).show();
            } else {
                $(inputError).hide();
            }
        });
        $('.form-wrapper textarea').each(function() {
            textInput = $(this).val();
            textClass = $(this).attr('class');
            var textError = `.${textClass}-error`;
            if (textInput === "") {
                $(textError).html("Field must not be empty.");
                $(textError).show();
            } else {
                $(textError).hide();
            }
        });
        userInterests = $('select').val();
        $('.apply').click(function() {
            // alert("Thanks for applying!")

        });

    });
});