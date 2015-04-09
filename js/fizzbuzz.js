$('document').ready(function() {
    var i = 1;
    var iString;

    while(i <= 100) {

        if (i % 3 != 0 && i % 5 != 0) {
            $('ol').append('<li>' + i + '</li>');
        }
        else if (i % 3 == 0 && i % 5 == 0) {
             $('ol').append('<li>fizz buzz</li>');
        }
        else if (i % 3 == 0) {
            $('ol').append('<li>fizz</li>');
        }
        else {
            $('ol').append('<li>buzz</li>');
        }

        i++;
    }

});