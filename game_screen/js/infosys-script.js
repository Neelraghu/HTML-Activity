function menu(id) {
    $(".taskwrap").removeClass('active');
    $("#task-" + id).addClass('active');

    $("li").removeClass('resp-tab-active');
    $("#menuid" + id).addClass('resp-tab-active');
}
function topic(page, PageSequence, Model, title, topic, hdnModelCnt) {
    document.getElementById('footerid').style.display = "block";
    document.getElementById('lblModuleitem').style.display = "contents";
    var pageName = '/html/' + page + '';
    var hdnPageSequence = PageSequence;
    var hdnPreviFrameId = PageSequence - 1;
    var hdnNextiFrameId = PageSequence + 1;
    var hdnModel = Model;
    $.ajax({
        url: "index.aspx/Menu",
        data: JSON.stringify({ "hdnPageSequence": hdnPageSequence, "hdnPreviFrameId": hdnPreviFrameId, "hdnNextiFrameId": hdnNextiFrameId, "hdnModel": hdnModel, "hdnModelCnt": hdnModelCnt, "title": title }),
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {

        }
    });
    $('#pageIframe').attr("src", pageName);
}

//function Proloader() {

//    document.getElementById('imgloader').style.display = 'none';
//}
//function Preloader() {

//    document.getElementById('imgloader').style.display = 'none';
//}


function popupshow() {
    setTimeout(function () {
        var overlay = $('<div id="overlay"></div>');
        overlay.show();
        overlay.appendTo(document.body);
        $('.notice-popup').show();
    }, 500);
}

function popuphide() {
    setTimeout(function () {
        var overlay = $('<div id="overlay"></div>');
        overlay.hide();
        overlay.appendTo(document.body);
        $('.notice-popup').hide();
    }, 500);
}



function Certificate() {
    setTimeout(function () {
        $("#Certificate").removeClass("disabled");
        $("#Conclusion").removeClass("disabled");
    }, 500);
}

function btnCertificate() {

    closeNav();
    $("#pageIframe").attr("src", "/html/showcertificate.aspx");
    document.getElementById('footerid').style.display = "none";
    document.getElementById('lblModuleitem').style.display = "none";
}


function btnConclusion() {

    closeNav();
    $("#pageIframe").attr("src", "/html/Conclusion.aspx");
    document.getElementById('footerid').style.display = "none";
    document.getElementById('lblModuleitem').style.display = "none";
}

var gText = '';
function chgtext(vals) {
    document.getElementById('lblTopic').innerHTML = vals;
    gText = vals;
}
//function access() {

//    $(".taskwrap").removeClass('active');
//    $("#task-1").addClass('active');
//    $("#menuid1").addClass('resp-tab-active');
//    var pageType = $('#hdnPageSessionType').val();
//    var iframe1 = document.getElementById("pageIframe");
//    if ($(iframe1).contents().find("#availableLanguagesContainerBody1 span:contains('Certificate')").length) {

//        $('#Pledge').removeClass('d-none');
//        $('#Pledge').addClass('intro');
//    }

//    //else {
//    //    $('#Pledge').addClass('d-none');
//    //}

//    if (pageType == 'currentPage') {

//        $(".taskwrap").removeClass('active');
//        $("#task-1").addClass('active');
//        $("#menuid1").addClass('resp-tab-active');
//        $("#menuid1").addClass('active');
//        //var pageName = hdnCurrentiFrame.toString();
//        var iframe = document.getElementById("pageIframe");
//        var elmnt = iframe.contentWindow.document.getElementsByTagName("video")[0];
//        if ($(iframe).contents().find("#availableLanguagesContainerBody span:contains('video')").length) {
//            // Title();
//            $('#BtnNext').addClass('d-none');
//          //  $("#pageIframe").contents().find("#myVideo").removeAttr('controls'); //-- first time load control 
//            $(elmnt).bind("ended", function () {
//                $('#BtnNext').removeClass('d-none');
//           //     $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls');  //-- first time load control 
//                // $('#BtnNext').addClass('intro');
//            });
//        } else {

//            $('#BtnNext').removeClass('d-none');
//         //   $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls');  //-- first time load control 
//            // $('#BtnNext').addClass('intro');
//        }
//    }
//    if (pageType == 'nextPage') {
//        $(".taskwrap").removeClass('active');
//        $("#task-1").addClass('active');
//        $("#menuid1").addClass('resp-tab-active');
//        //var pageName = hdnCurrentiFrame.toString();
//        var iframe = document.getElementById("pageIframe");
//        var elmnt = iframe.contentWindow.document.getElementsByTagName("video")[0];

//        if ($(iframe).contents().find("#availableLanguagesContainerBody span:contains('video')").length) {

//            $('#BtnNext').addClass('d-none');
//        //    $("#pageIframe").contents().find("#myVideo").removeAttr('controls'); //-- first time load control 
//            $(elmnt).bind("ended", function () {
//                $('#BtnNext').removeClass('d-none');
//            //    $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls'); //-- first time load control 
//                // $('#BtnNext').addClass('intro');
//            });
//        }
//        else if ($(iframe).contents().find("#availableLanguagesContainerBody span:contains('hold')").length) {
//            elmnt = iframe.contentWindow.document.getElementsByTagName("availableLanguagesContainerBody")[0];
//            $('#BtnNext').addClass('d-none');
//         //   $("#pageIframe").contents().find("#myVideo").removeAttr('controls'); //-- first time load control 
//            $(elmnt).bind("ended", function () {
//                $('#BtnNext').removeClass('d-none');
//           //     $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls'); //-- first time load control 
//                //   $('#BtnNext').addClass('intro');
//            });
//        }
//        else {
//            $('#BtnNext').removeClass('d-none');
//         //   $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls'); //-- first time load control 
//            //   $('#BtnNext').addClass('intro');
//        }
//    }

//    if (pageType == 'prevPage') {
//        $(".taskwrap").removeClass('active');
//        $("#task-1").addClass('active');
//        $("#menuid1").addClass('resp-tab-active');
//        // $('#BtnNext').removeClass('d-none');
//        //  var pageName = hdnCurrentiFrame.toString();
//        var iframe = document.getElementById("pageIframe");
//        var elmnt = iframe.contentWindow.document.getElementsByTagName("video")[0];

//        if ($(iframe).contents().find("#availableLanguagesContainerBody span:contains('video')").length) {

//            $('#BtnNext').addClass('d-none');
//         //   $("#pageIframe").contents().find("#myVideo").removeAttr('controls'); //-- first time load control 
//            $(elmnt).bind("ended", function () {
//                $('#BtnNext').removeClass('d-none');
//            //    $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls'); //-- first time load control 
//                //   $('#BtnNext').addClass('intro');
//            });
//        }
//        else {
//            $('#BtnNext').removeClass('d-none');
//     //       $("#pageIframe").contents().find("#myVideo").attr('controls', 'controls'); //-- first time load control 
//        }


//    }

//    if ($(iframe1).contents().find("#availableLanguagesContainerBody1 span:contains('conclusion')").length) {

//        $('#Pledge').addClass('d-none');
//        $('#BtnNext').addClass('d-none');

//    }
//    Title();
//    function Title() {

//        $.ajax({
//            url: "index.aspx/Header",
//            type: 'POST',
//            contentType: 'application/json; charset=utf-8',
//            success: function (data) {
//                debugger;
//                var array = data.d;
//                var arrayvalue = array.substring(2);
//                var split = arrayvalue.slice(0, -2);
//                var val = split.replace(/\\"/g, '"');
//                var value = JSON.parse(val);
//                var Module = "Module " + value.Model;
//                if (gText !== "") {
//                    $('#lblTopic').html(gText);
//                    gText = '';
//                }
//                else {
//                    $('#lblTopic').html(value.PageName);
//                }
//                $('#lblModule').html(Module);
//                var TopicCnt = 100 / value.hdnModelCnt;
//                var Progressbar = (value.PageSequence - 0.5) * TopicCnt;
//                //var strin = "Progressbar :- " + Progressbar + " Topic Count:- " + TopicCnt + " PageSequence:- " + value.PageSequence;
//                //alert(strin);
//                if (Progressbar > 100) {
//                    Progressbar = 100;
//                }
//                $("#ltrPersentage").css("width", parseInt(Progressbar) + "%");
//                $("#LtrlPersentageCnt").html(parseInt(Progressbar) + "%");
//                //$(".taskwrap").removeClass('active');
//                ////$("#task-" + value.Model).addClass('active');

//                //$("li").removeClass('resp-tab-active');
//                //$("#menuid" + value.Model).addClass('resp-tab-active');
//            }
//        });
//    }
//    FirstTimeVolumnSessionSet();
//    function FirstTimeVolumnSessionSet() {

//        $.ajax({
//            url: "index.aspx/FirstTimeVolumnSessionSet",
//            type: 'POST',
//            contentType: 'application/json; charset=utf-8',
//            success: function (data) {
//                if (data["d"] == "true") {
//                    $('#soundBtn i').removeClass('fa-volume-up');
//                    $('#soundBtn i').addClass('fa-volume-off');
//                    $("#pageIframe").contents().find("#myVideo").get(0).muted = true;
//                }//if (Projects)}
//                else {
//                    $('#soundBtn i').removeClass('fa-volume-off');
//                    $('#soundBtn i').addClass('fa-volume-up');
//                    $("#pageIframe").contents().find("#myVideo").get(0).muted = false;
//                }
//            }
//        });
//    }
//}

//$('#soundBtn').click(function (e) {
//    VolumnSessionSet();
//});

//function VolumnSessionSet() {
//    $.ajax({
//        url: "index.aspx/VolumnSessionSet",
//        type: 'POST',
//        contentType: 'application/json; charset=utf-8',
//        success: function (data) {
//            if (!$('#soundBtn i').hasClass('fa-volume-off')) {
//                $('#soundBtn i').removeClass('fa-volume-up');
//                $('#soundBtn i').addClass('fa-volume-off');
//                $("#pageIframe").contents().find("#myVideo").get(0).muted = true;
//            }
//            else {
//                $('#soundBtn i').removeClass('fa-volume-off');
//                $('#soundBtn i').addClass('fa-volume-up');
//                $("#pageIframe").contents().find("#myVideo").get(0).muted = false;
//            }
//        }
//    });
//}

function ValidateForm() {
    $('input[name="qname500"]:checked').each(function () {
        $("#QAnswer5").val(this.value);
    });
    if ($("#hdnAnswer5").val() == "") {
        $("#lblSelection").show();
        return false;
    } else {
        $("#lblSelection").hide();
        console.log($.base64.decode($("#hdnAnswer5").val()))
        if ($("#hdnAnswer5").val() == $("#QAnswer5").val()) {
            AnswerRight()
        } else {
            AnswerWrong()
        }
        setTimeout(function () {
            return true;
        }, 3000);
    }
}
function AnswerRight() {
    $('.questionwrap [type="radio"]:checked').each(function () {
        $(this).checked = false;
    });
    $(".questionwrap [type='radio']:not(:checked) + label span").css("Color", "#475055");
    $(".questionwrap [type='radio']:checked + label").css("background", "green");
    $(".questionwrap [type='radio']:checked + label span").css("color", "#FFF");
} function AnswerWrong() {
    $('.questionwrap [type="radio"]:checked').each(function () {
        $(this).checked = false;
    });
    $(".questionwrap [type='radio']:not(:checked) + label span").css("Color", "#475055");
    $(".questionwrap [type='radio']:checked + label").css("background", "red");
    $(".questionwrap [type='radio']:checked + label span").css("color", "#FFF");
}