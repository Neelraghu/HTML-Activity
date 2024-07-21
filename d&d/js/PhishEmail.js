
  
var cnt = 0;
var i = 0;
$('#ClickCount').text(cnt);
function btnClick(name, click) {
    var popup = document.getElementById(name);
    popup.classList.toggle('show');
    $('#' + click).css({ "pointer-events": "none"});
    i = cnt + 1;
    cnt = i;
    $('#ClickCount').text(cnt);
    if (cnt == 6)
    {
        $("#myModal").modal('show');
    }
}

