if (screen.height > screen.width) {

    $('#show1').addClass('popup11');
}

var Score = 0;
var TotalScore = 0;
var cnt = 6;
var count = 0;
var i = 0;
$('#ClickCount').text(count);
function Clear(e, img) {
    cnt = cnt - 1;
   // alert(cnt);
    i = count + 1;
    count = i;
    $('#ClickCount').text(count);
    if (count == 6)
    {
        $("#myModal").modal('show');
    }
    ActivityScore(e);
    InsertScore();
    var popup = document.getElementById(e);
    popup.classList.toggle("show");
    var element = document.getElementById(img);
    element.classList.add('d-none');
    setTimeout(function () {
        document.getElementById(e).style.display = 'none';
    }, 3000);
}

function Activity(TotalScore) {
    $.ajax({
        url: "Module03-3-5.aspx/btnActivity",
        data: JSON.stringify({ "TotalScore": TotalScore }),
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            // alert(data.d);
        }
    });

}


function ActivityScore(data) {
    if (data == "pendrive") {
        TotalScore = TotalScore + 5;
       
    }
    if (data == "deskscreen") {
        TotalScore = TotalScore + 5;
       
    }
    if (data == "dustbin") {
        TotalScore = TotalScore + 5;
      
    }
}

function InsertScore() 
{
    var score = TotalScore;
   // alert(score);
    if (cnt == "0")
    {
        Activity(score);
    }
}

