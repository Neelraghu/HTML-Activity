$(document).ready(function () {
	$("body").on("contextmenu", function (e) {
		return false;
	});
});
var sum = 0
function testalert(a) {
    sum = sum + a;

    if (sum > 67) {
        // alert('by');
        window.top.$("#BtnNext").removeClass('d-none');
        window.top.$("#BtnNext").addClass('intro');
        
    }
    else {
        //alert('hi');
    }

   

}
$(document).ready(function () {
	setTimeout(function () {
		$(".fixtooltip").removeClass("active");
	}, 3000);
	$(".fixtooltip").mouseover(function () {
		$(".fixtooltip").addClass("active");
	});
});

$(document).ready(function () {
	$(".mobile_menu").click(function () {
		$(".sidebar").animate({
			left: "0"
		}, 500);
		$(".bg-overlay").show();
	});

	$(".hassubmenu").on('click', function () {
		$("ul.taskmenu").slideToggle();
		$('ul.taskmenu li').removeClass('active');
		$('.taskwrap').removeClass('active');
	});

	$(document).ready(function () {
		$('ul.taskmenu li').on('click', function () {
			var tab_id = $(this).attr('data-tab');
			$('ul.taskmenu li').removeClass('active');
			$('.taskwrap').removeClass('active');

			$(this).addClass('active');
			$("#" + tab_id).addClass('active');
		});
	});
	
	$(".backbtn").click(function () {
		$('.taskwrap').removeClass('active');
	});
	$(".bg-overlay").click(function () {
		$(".sidebar").animate({
			left: "-200px"
		}, 500);
		$(".bg-overlay").hide();
		$("ul.taskmenu").hide();
		$('ul.taskmenu li').removeClass('active');
		$('.taskwrap').removeClass('active');
	});
	$('.mobile_search').on('click', function () {
		$('#search').show();
		$(".mobile_searchbar .close").show();
	});
	$('.mobile_searchbar .close').on('click', function () {
		$('#search').hide();
		$(".mobile_searchbar .close").hide();
	});
	$(".chatcontent button.close").click(function () {
		$(".chattxt").animate({
			right: "-100%"
		}, 500);
		$(".chatperson").animate({
			left: "90%"
		}, 500)
	});
	$(".chatperson").click(function () {
		$(".chattxt").animate({
			right: "0"
		}, 500);
		$(".chatperson").animate({
			left: "60px"
		}, 500)
	});
});

AOS.init({
	easing: 'ease-in-out-sine',
	duration: '1000',
	delay: '6',
	disable: function () {
		var maxWidth = 1024;
		return window.innerWidth < maxWidth;
	}
});


