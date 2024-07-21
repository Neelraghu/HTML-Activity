var btnvalue = 1;
var hdnAnswer1 = '';
var hdnAnswer2 = '';
var hdnAnswer3 = '';
var hdnAnswer4 = '';
var hdnAnswer5 = '';
var Q1;
var Q2;
var Q3;
var Q4;
var Q5;
var interval;
function startTimer(duration, display) {
    var timer = duration, seconds;
    clearInterval(interval);
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }


        if (timer == 0) {
            if (btnvalue == 1) {
                // timercoundown();
                Q1 = setTimeout(function () {
                    btnvalue = 2;
                    document.getElementById('btn1').click();
                }, 1000);
            }
            else if (btnvalue == 2) {
                clearTimeout(Q1);
                Q2 = setTimeout(function () {
                    btnvalue = 3;
                    document.getElementById('btn2').click();
                }, 1000);
            }
            else if (btnvalue == 3) {
                clearTimeout(Q2);
                Q3 = setTimeout(function () {
                    btnvalue = 4;
                    document.getElementById('btn3').click();
                }, 1000);
            }
            else if (btnvalue == 4) {
                clearTimeout(Q3);
                Q4 = setTimeout(function () {
                    btnvalue = 5;
                    document.getElementById('btn4').click();
                }, 1000);
            }
            else if (btnvalue == 5) {
                clearTimeout(Q4);
                Q5 = setTimeout(function () {
                    // document.getElementById('btnSubmit').click();
                    document.getElementById('btn5').click();

                }, 1000);
            }
        }

    }, 1000);
}

function timercoundown(id) {
    var timeleft = 30;
    var downloadTimer = setInterval(function () {
        document.getElementById("progressBar" + id).value = 30 - --timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000);

    btnvalue = id;

}

function Score(hdnAnswer1, hdnAnswer2, hdnAnswer3, hdnAnswer4, hdnAnswer5, QuestionNo) {
    $.ajax({
        url: "Module02-3-2.aspx/btnActivity",
        data: JSON.stringify({ "hdnAnswer1": hdnAnswer1, "hdnAnswer2": hdnAnswer2, "hdnAnswer3": hdnAnswer3, "hdnAnswer4": hdnAnswer4, "hdnAnswer5": hdnAnswer5, "QuestionNo": QuestionNo }),
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            points(data.d);
            $('#score').text(data.d);
        }
    });
}

function points(score) {
    $("#points1").html(score);
    $("#points2").html(score);
    $("#points3").html(score);
    $("#points4").html(score);
    $("#points5").html(score);
}
window.onload = function () {
    timercoundown(1);
    var fiveMinutes = 29,
        display = document.querySelector('#time1');
    startTimer(fiveMinutes, display);
};

function timer(id) {
    var timer = id + 1;
    timercoundown(timer);
    var fiveMinutes = 29,
        display = document.querySelector('#time' + timer);
    startTimer(fiveMinutes, display);

}
$("#points1").html("0");
function btnSub() {
    $("#myModal").modal('show');
}
$("#btn1").click(function () {
    Score($("#hdnAnswer1").val(), $("#hdnAnswer2").val(), $("#hdnAnswer3").val(), $("#hdnAnswer4").val(), $("#hdnAnswer5").val(), 1);
    // startTimer(200, document.querySelector('#time1'));
});
$("#btn2").click(function () {
    //  alert('j');
    Score($("#hdnAnswer1").val(), $("#hdnAnswer2").val(), $("#hdnAnswer3").val(), $("#hdnAnswer4").val(), $("#hdnAnswer5").val(), 2);
    //startTimer(200, document.querySelector('#time2'));
});
$("#btn3").click(function () {
    Score($("#hdnAnswer1").val(), $("#hdnAnswer2").val(), $("#hdnAnswer3").val(), $("#hdnAnswer4").val(), $("#hdnAnswer5").val(), 3);
    // startTimer(200, document.querySelector('#time3'));
});
$("#btn4").click(function () {
    Score($("#hdnAnswer1").val(), $("#hdnAnswer2").val(), $("#hdnAnswer3").val(), $("#hdnAnswer4").val(), $("#hdnAnswer5").val(), 4);
    // startTimer(200, document.querySelector('#time4'));
});
$("#btnSubmit").click(function () {
    Score($("#hdnAnswer1").val(), $("#hdnAnswer2").val(), $("#hdnAnswer3").val(), $("#hdnAnswer4").val(), $("#hdnAnswer5").val(), 5);
    // startTimer(200, document.querySelector('#time5'));
});
