function fizzbuzzer(numIterations) {
    var counter = 1;

    while(counter <= numIterations) {

        if (counter % 3 != 0 && counter % 5 != 0) {
            $('ol').append('<li>' + counter + '</li>');
        }
        else if (counter % 3 == 0 && counter % 5 == 0) {
             $('ol').append('<li>fizz buzz</li>');
        }
        else if (counter % 3 == 0) {
            $('ol').append('<li>fizz</li>');
        }
        else {
            $('ol').append('<li>buzz</li>');
        }

        counter++;
    }
}

$('document').ready(function() {
    var numIterations;

    numIterations = +prompt('How far should we make fizzbuzz go?');
    while(typeof(numIterations) != 'number' || numIterations % 1 != 0 ) {
        numIterations = +prompt('Please enter an integer:');
    }

    fizzbuzzer(numIterations);

});