
    var AtivityScore = 0;
function allowDrop(ev) {
    ev.target.style.border = "3px dotted red";
    var id = ev.target.id; HighlightBorder(id)
    //ev.target.style.border = "3px dotted red";
        ev.preventDefault();
    }
     var dragndropid = null;
function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    dragndropid = ev.target.id;
	//drag1

}
function drop(ev) {
        ev.preventDefault();
    var drag = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(drag));
    var id = ev.target.id;

    if (drag == 'drag1')
    {
        $('#1').addClass('d-none');
    $('#2').removeClass('d-none');
    $('#3').addClass('d-none');
    $('#4').addClass('d-none');
    $('#5').addClass('d-none');
    $('#6').addClass('d-none');
    $('#7').addClass('d-none');
    $('#8').addClass('d-none');
	
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);

}
 if (drag == 'drag2')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').removeClass('d-none');
     $('#4').addClass('d-none');
      $('#5').addClass('d-none');
    $('#6').addClass('d-none');
    $('#7').addClass('d-none');
    $('#8').addClass('d-none');
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);
	
}
 if (drag == 'drag3')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').addClass('d-none');
     $('#4').removeClass('d-none');
      $('#5').addClass('d-none');
    $('#6').addClass('d-none');
    $('#7').addClass('d-none');
    $('#8').addClass('d-none');
	ev.target.style.border = "3px dotted red";
HighlightBorder(id);
}
 if (drag == 'drag4')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').addClass('d-none');
    $('#4').addClass('d-none');
      $('#5').removeClass('d-none');
    $('#6').addClass('d-none');
    $('#7').addClass('d-none');
    $('#8').addClass('d-none');
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);
	
	
}
     if (drag == 'drag5')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').addClass('d-none');
    $('#4').addClass('d-none');
    $('#5').addClass('d-none');
    $('#6').removeClass('d-none');
    $('#7').addClass('d-none');
    $('#8').addClass('d-none');
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);
}
     if (drag == 'drag6')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').addClass('d-none');
    $('#4').addClass('d-none');
    $('#5').addClass('d-none');
    $('#6').addClass('d-none');
    $('#7').removeClass('d-none');
    $('#8').addClass('d-none');
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);
}
     if (drag == 'drag7')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').addClass('d-none');
    $('#4').addClass('d-none');
    $('#5').addClass('d-none');
    $('#6').addClass('d-none');
    $('#7').addClass('d-none');
    $('#8').removeClass('d-none');
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);
}
    if (drag == 'drag8')
    {
        $('#1').addClass('d-none');
    $('#2').addClass('d-none');
    $('#3').addClass('d-none');
    $('#4').addClass('d-none');
    $('#5').addClass('d-none');
    $('#6').addClass('d-none');
    $('#7').addClass('d-none');
    $('#8').addClass('d-none');
	ev.target.style.border = "3px dotted red";
	HighlightBorder(id);

}

    if (id == "div1" && drag == "drag1") {
        AtivityScore = AtivityScore + 1;
    right();
}
    else if (id == "div1" && drag == "drag2") {
        AtivityScore = AtivityScore + 1;
    right();
}
    else if (id == "div2" && drag == "drag3") {
        AtivityScore = AtivityScore + 1;
    right();
}
    else if (id == "div2" && drag == "drag4") {
        AtivityScore = AtivityScore + 1;
    right();
}
        else if (id == "div3" && drag == "drag5") {
        AtivityScore = AtivityScore + 1;
    right();
}
        else if (id == "div3" && drag == "drag6") {
        AtivityScore = AtivityScore + 1;
    right();
}
        else if (id == "div4" && drag == "drag7") {
        AtivityScore = AtivityScore + 1;
    right();
}
        else if (id == "div4" && drag == "drag8") {
        AtivityScore = AtivityScore + 1;
    right();
}
else
    {
        wrong();
    }
    if (drag == "drag8") {
        $('#score').html(AtivityScore);
    setTimeout(function () {
        $("#myModal").modal('show');
    }, 1000);
        $.ajax({
        url: "Module02-2-6.aspx/Activity",
            data: JSON.stringify({"AtivityScore": AtivityScore}),
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
            success: function (data) {
        //alert(data.d);
    }
    });
}
function right()
{
        $('#audiocheck').get(0).play();
        $("#right").html("<div class='check'><svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark_circle_success' cx='26' cy='26' r='25' fill='#7ac142'/><path class='checkmark_check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/></svg></div>");
    setTimeout(function () {
        $("#right").html("");
    }, 2000);
    }

    function wrong() {
        $('#audiocross').get(0).play();
        $("#right").html("<div class='cross'><svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'><circle class='checkmark_circle_error' cx='26' cy='26' r='25' fill='#ee3939'/><path class='checkmark_check' fill='#ee3939' d='M16 16 36 36 M36 16 16 36 red'/></svg></div>");
    setTimeout(function () {
        $("#right").html("");
    }, 2000);
    }
    }
	

	function HighlightBorder(id)
	{
		
		
	if (id == 'div1')
	{
        document.getElementById('div2').setAttribute("style", "border:none");
        document.getElementById('div3').setAttribute("style", "border:none");
        document.getElementById('div4').setAttribute("style", "border:none");
		
	}
	else if(id=='div2')
	{

        document.getElementById('div1').setAttribute("style", "border:none");
        document.getElementById('div3').setAttribute("style", "border:none");
        document.getElementById('div4').setAttribute("style", "border:none");
	}
	else if(id=='div3')
	{

        document.getElementById('div1').setAttribute("style", "border:none");
        document.getElementById('div2').setAttribute("style", "border:none");
        document.getElementById('div4').setAttribute("style", "border:none");
	}
	else if(id=='div4')
	{

        document.getElementById('div1').setAttribute("style", "border:none");
        document.getElementById('div3').setAttribute("style", "border:none");
        document.getElementById('div2').setAttribute("style", "border:none");
	}

		
	}


