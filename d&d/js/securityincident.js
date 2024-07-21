/**
 * jTinder initialization
 */
var Score = 0;
var TotalScore = 0;
//document.getElementById("myVideo").controls = false;
$("#myVideo").click(function () {

    if (this.paused)
        this.play();
    else
        this.pause();

});
$("#tinderslide").jTinder({
    // dislike callback
    onDislike: function (item) {
        var id = item.index() + 1;
        //Activity(Id, 'dont');
        // alert(id);
        ActivityScore(id, 'dont', 'cross');
        // set the status text
        $('#status').html('Dislike image ' + (item.index() + 1));
    },
    // like callback
    onLike: function (item) {
        var id = item.index() + 1;
        //Activity(Id, 'do');
        //alert(id);
        ActivityScore(id, 'do', 'check');
        // set the status text
        $('#status').html('Like image ' + (item.index() + 1));
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function (e) {
    e.preventDefault();
    $("#tinderslide").jTinder($(this).attr('class'));
    var ss = $("#tinderslide").jTinder($(this).attr('class'));

});

function Activity(TotalScore) {
    $.ajax({
        url: "Module01-1-3.aspx/btnActivity",
        data: JSON.stringify({ "TotalScore": TotalScore }),
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            // alert(data.d);
        }
    });
}

function ActivityScore(id, position, useranswer) {

     if (id == 9 && position == "dont") {
    TotalScore = TotalScore + 1;
        right(useranswer);
    }
    else if (id == 8 && position == "do") {
    TotalScore = TotalScore + 1;
    $('#audiocheck').get(0).play();
        right(useranswer);
    }
    else if (id == 7 && position == "dont") {
    TotalScore = TotalScore + 1;
        right(useranswer);
    }
    else if (id == 6 && position == "dont") {
    TotalScore = TotalScore + 1;
        right(useranswer);
    }
else if (id == 5 && position == "dont") {
    TotalScore = TotalScore + 1;
        right(useranswer);
    }
else if (id == 4 && position == "do") {
    TotalScore = TotalScore + 1;
    $('#audiocheck').get(0).play();
        right(useranswer);
    }
    else if (id == 3 && position == "do") {
    TotalScore = TotalScore + 1;
        right(useranswer);
    }
    else if (id == 2 && position == "do") {
    TotalScore = TotalScore + 1;
        right(useranswer);
    }
    else if (id == 1 && position == "dont") {
    TotalScore = TotalScore + 1;
         right(useranswer);
        $('#score').text(TotalScore);
        setTimeout(function () {
            $("#myModal").modal('show');
        }, 1000);
        Activity(TotalScore);
    }
else if (id == 1 && position == "do") {
    wrong(useranswer);
        $('#score').text(TotalScore);
        setTimeout(function () {
            $("#myModal").modal('show');
        }, 1000);
        Activity(TotalScore);
    }
else {
        wrong(useranswer);
    }

}

function right(useranswer) {
    $('#audiocheck').get(0).play();
    $("#Result").html("<div class='" + useranswer + "''><svg  class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark_circle_success' cx='26' cy='26' r='25' fill='#7ac142'/><path class='checkmark_check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg></div>");
    setTimeout(function () {
        $("#Result").html("");
    }, 2000);
}

function wrong(useranswer) {
    $('#audiocross').get(0).play();
    $("#Result").html("<div class='" + useranswer + "'><svg  class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark_circle_error' cx='26' cy='26' r='25' fill='#ee3939'/><path class='checkmark_check' fill='#ee3939' d='M16 16 36 36 M36 16 16 36 red'/></svg></div>");
    setTimeout(function () {
        $("#Result").html("");
    }, 2000);
}
