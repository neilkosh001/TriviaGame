$("#end").hide();

$('#start').on('click', function () {
    game.start();

})
//$('#subwrapper').remove();
// console.log("YOU CLICKED ME!")

$('#end').on('click', function(){
    console.log("button");
    game.done();
})

var questions = [{
    question: "Which fictional city is the home of Batman?",
    answers: ["Miami", "Boynton", "Gotham City", "Houston"],
    correctAnswer: "Gotham City"
}, {
    question: "In which sport would you perform the Fosbury Flop?",
    answers: ["The high jump", "shot put", "swimming", "wrestling"],
    correctAnswer: "The high jump"
}, {
    question: "Who won the 2018 NBA finals?",
    answers: ["Miami Heat", "Houston Rockets", "Golden State Warriors", "Cleveland Cavaliers"],
    correctAnswer: "Golden State Warriors"
}, {
    question: "What was Mohammed Ali’s birth name?",
    answers: ["John", "Cassius Clay", "Salazar", "Quintin"],
    correctAnswer: "Cassius Clay"
}, {
    question: "Which planet is the closest to Earth?",
    answers: ["Pluto", "Venus", "Mercury", "Mars"],
    correctAnswer: "Mercury"
}, {
    question: "Which is the tallest mammal?",
    answers: ["Giraffe", "Lion", "Whale", "Tiger"],
    correctAnswer: "Giraffe"
}, {
    question: "How many strings does a violin have?",
    answers: ["three", "two", "four", "five"],
    correctAnswer: "four"
}, {
    question: "How many sides does an octagon have?",
    answers: ["seven", "four", "eight", "nine"],
    correctAnswer: "eight"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 15,
    countDown: function () {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter <= 0) {
            console.log("Time is up!");
            clearInterval(timer);
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countDown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">15</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + " ' value=' " + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }


        $('#subwrapper').append('<br> <button id="end">DONE</button>')


    },

    done: function () {
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]": checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2]': checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3]': checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4]': checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5]': checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6]': checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7]': checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });


    game.result();
    },

    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

    }
}
