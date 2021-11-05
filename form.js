let edu = 0;
let skill = 0;
let work = 0;
let interest = 0;


//  **********    **********    **********    **********    **********

function toggChk(el) {
  // console.log(el);
  let ele = $(el).parent('div').parent('div').prev().find("input")[0];
  // console.log(typeof (ele));
  // console.log(ele);
  ele.disabled = !ele.disabled;
}


function validate_chg_color(el) {
  let isValid = true;
  if ($.trim($(el).val()) == '' || $.trim($(el).val()) == 'Select level') {
    isValid = false;
    $(el).css({ "border": "1.5px solid red" });
  }
  else {
    $(el).css({ "border": "1.5px solid rgb(206, 212, 218)" });
  }
  return isValid;
}

//  **********    **********    **********    **********    **********


//  **********    **********  Form - 1  Validation  **********    **********    **********

$('#next1').click(function (e) {
  console.log(e);
  let isValid = true;
  $('#form1').find('input').each(function () {
    if ($(this).attr('id') == 'linkedIn' || $(this).attr('id') == 'Website') { }
    else {
      isValid = validate_chg_color(this);
    }
  });
  if (isValid == false) {
    e.preventDefault();
  }

});

//  **********    **********    **********    **********    **********



//  **********  ********** Work Experience  **********  **********

function updateWork() {
  for (let i = 0; i < $('#accordionWork .accordion-item').length; i++) {
    let a = ($(`#accordionWork .accordion-item:nth-child(${i + 1}) .job_title`).val().trim() == '') ? 'Work Experience' : $(`#accordionWork .accordion-item:nth-child(${i + 1}) .job_title`).val().trim();

    let c = ($(`#accordionWork .accordion-item:nth-child(${i + 1}) .employer`).val().trim() == '') ? '' : ' at ' + $(`#accordionWork .accordion-item:nth-child(${i + 1}) .employer`).val().trim();

    $(`#accordionWork .accordion-item:nth-child(${i + 1}) .accordion-button`).html(a + c);
  }
}

function wmakeVisible() {
  $("#accordionWork .accordion-header").css("display", "block");
  updateWork();
}

function delWork2(event) {
  event.preventDefault();
  if ($("#accordionWork .accordion-item").length > 1) {
    wmakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

$('.fc2').click(function () {
  work = 1;
  $('.fc2').off('click');
})
let workAdder = $("#accordionWork").html();
let workCounter = 1;

$("#add_work").click(function (e) {
  let isValid = true;
  $("#accordionWork .accordion-item:last-child").find("input").each(function () { isValid = validate_chg_color(this); });

  if (isValid == false) {
    e.preventDefault();
  }
  else {
    updateWork();
    workCounter++;
    if ($("#accordionWork .accordion-item").length > 0) {
      $("#accordionWork .accordion-header").css("display", "block");
      let count = $("#accordionWork .accordion-item").length;
      if (document.getElementById("accordionWork").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionWork").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionWork").append(workAdder);
    $("#accordionWork .accordion-header").last().attr("id", "wheading" + workCounter);
    $("#accordionWork .accordion-collapse").last().attr("aria-labelledby", "wheading" + workCounter);
    $("#accordionWork .accordion-collapse").last().attr("id", "wcollapse" + workCounter);
    $("#accordionWork .accordion-button").last().attr("data-bs-target", "#wcollapse" + workCounter);
    $("#accordionWork .accordion-button").last().attr("aria-controls", "wcollapse" + workCounter);
  }
});

$(".fc2").mouseleave(function () {
  if (work == 0) { return; }
  let timer = window.setTimeout(function () {
    wmakeVisible();
    let count = $("#accordionWork .accordion-item").length;
    for (let i = 0; i < count; i++) {
      if (document.getElementById("accordionWork").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionWork").getElementsByClassName("accordion-button")[i].click();
      }
    }
  }, 5000);
  $(".fc2").mouseenter(function () {
    window.clearTimeout(timer);
    $(".fc2").unbind('mouseenter');
  });
});

//  **********    **********    **********    **********    **********




//  **********  ********** Education and Qualifications **********  **********

function updateEdu() {
  for (let i = 0; i < $('#accordionEdu .accordion-item').length; i++) {

    let a = ($(`#accordionEdu .accordion-item:nth-child(${i + 1}) .degree`).val().trim() == '') ? 'Education' : $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .degree`).val().trim();

    let c = ($(`#accordionEdu .accordion-item:nth-child(${i + 1}) .School`).val().trim() == '') ? '' : ' at ' + $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .School`).val().trim();

    $(`#accordionEdu .accordion-item:nth-child(${i + 1}) .accordion-button`).html(a + c);
  }
}

function emakeVisible() {
  $("#accordionEdu .accordion-header").css("display", "block");
}

function delEdu2(event) {
  event.preventDefault();
  if ($("#accordionEdu .accordion-item").length > 1) {
    emakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}


$('.fc1').click(function () {
  edu = 1;
  $('.fc1').off('click');
});

let eduAdder = $("#accordionEdu").html();
let eduCounter = 1;

$("#add_edu").click(function (e) {
  let isValid = true;
  $('#accordionEdu .accordion-item:last-child').find('input').each(function () { isValid = validate_chg_color(this); });

  if (isValid == false) {
    e.preventDefault();
  }
  else {

    eduCounter++;
    if ($("#accordionEdu .accordion-item").length > 0) {
      $("#accordionEdu .accordion-header").css("display", "block");
      let count = $("#accordionEdu .accordion-item").length;
      if (document.getElementById("accordionEdu").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionEdu").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionEdu").append(eduAdder);
    $("#accordionEdu .accordion-header").last().attr("id", "eheading" + eduCounter);
    $("#accordionEdu .accordion-collapse").last().attr("aria-labelledby", "eheading" + eduCounter);
    $("#accordionEdu .accordion-collapse").last().attr("id", "ecollapse" + eduCounter);
    $("#accordionEdu .accordion-button").last().attr("data-bs-target", "#ecollapse" + eduCounter);
    $("#accordionEdu .accordion-button").last().attr("aria-controls", "ecollapse" + eduCounter);
  }
});

$(".fc1").mouseleave(function () {
  if (edu == 0) { return; }
  let timer = window.setTimeout(function () {
    emakeVisible();
    let count = $("#accordionEdu .accordion-item").length;
    for (let i = 0; i < count; i++) {
      if (document.getElementById("accordionEdu").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionEdu").getElementsByClassName("accordion-button")[i].click();
      }
    }
  }, 5000);
  $(".fc1").mouseenter(function () {
    window.clearTimeout(timer);
    $(".fc1").unbind('mouseenter');
  });
});

//  **********    **********    **********    **********    **********




//  **********  ********** Skills **********  **********

function smakeVisible() {
  $("#accordionSkill .accordion-header").css("display", "block");
}

function delSkill2(event) {
  event.preventDefault();
  if ($("#accordionSkill .accordion-item").length > 1) {
    smakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

$('.fc3').click(function () {
  skill = 1;
  $('.fc3').off('click');
})
let skillAdder = $("#accordionSkill").html();
let skillCounter = 1;

$("#add_skill").click(function (e) {
  let isValid = true;
  $("#accordionSkill .accordion-item:last-child").find("input, select").each(function () { isValid = validate_chg_color(this); });
  if (isValid == false) {
    e.preventDefault();
  }
  else {
    skillCounter++;
    if ($("#accordionSkill .accordion-item").length > 0) {
      $("#accordionSkill .accordion-header").css("display", "block");
      let count = $("#accordionSkill .accordion-item").length;
      if (document.getElementById("accordionSkill").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionSkill").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionSkill").append(skillAdder);
    $("#accordionSkill .accordion-header").last().attr("id", "sheading" + skillCounter);
    $("#accordionSkill .accordion-collapse").last().attr("aria-labelledby", "sheading" + skillCounter);
    $("#accordionSkill .accordion-collapse").last().attr("id", "scollapse" + skillCounter);
    $("#accordionSkill .accordion-button").last().attr("data-bs-target", "#scollapse" + skillCounter);
    $("#accordionSkill .accordion-button").last().attr("aria-controls", "scollapse" + skillCounter);
  }
});

$(".fc3").mouseleave(function () {
  if (skill == 0) { return; }
  let timer = window.setTimeout(function () {
    smakeVisible();
    let count = $("#accordionSkill .accordion-item").length;
    for (let i = 0; i < count; i++) {
      if (document.getElementById("accordionSkill").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionSkill").getElementsByClassName("accordion-button")[i].click();
      }
    }
  }, 5000);
  $(".fc3").mouseenter(function () {
    window.clearTimeout(timer);
    $(".fc3").unbind('mouseenter');
  });
});

//  **********    **********    **********    **********    **********




//  **********  ********** Interests  **********  **********

function imakeVisible() {
  $("#accordionInt .accordion-header").css("display", "block");
}

function delInt2(event) {
  event.preventDefault();
  if ($("#accordionInt .accordion-item").length > 1) {
    imakeVisible();
    event.target.parentElement.parentElement.parentElement.remove();
  }
  event.stopPropagation();
}

$('.fc4').click(function () {
  interest = 1;
  $('.fc4').off('click');
})
let interestAdder = $("#accordionInt").html();
let interestCounter = 1;

$("#add_interest").click(function () {
  let isValid = true;
  console.log("isValid");
  $("#accordionInt .accordion-item:last-child").find('input').each(function () { isValid = validate_chg_color(this); });
  if (isValid == false) {
    e.preventDefault();
  }
  else {
    interestCounter++;
    if ($("#accordionInt .accordion-item").length > 0) {
      $("#accordionInt .accordion-header").css("display", "block");
      let count = $("#accordionInt .accordion-item").length;
      if (document.getElementById("accordionInt").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionInt").getElementsByClassName("accordion-item")[count - 1].getElementsByClassName("accordion-button")[0].click();
      }
    }
    $("#accordionInt").append(interestAdder);
    $("#accordionInt .accordion-header").last().attr("id", "iheading" + interestCounter);
    $("#accordionInt .accordion-collapse").last().attr("aria-labelledby", "iheading" + interestCounter);
    $("#accordionInt .accordion-collapse").last().attr("id", "icollapse" + interestCounter);
    $("#accordionInt .accordion-button").last().attr("data-bs-target", "#icollapse" + interestCounter);
    $("#accordionInt .accordion-button").last().attr("aria-controls", "icollapse" + interestCounter);
  }
});

$(".fc4").mouseleave(function () {
  if (interest == 0) { return; }
  let timer = window.setTimeout(function () {
    imakeVisible();
    let count = $("#accordionInt .accordion-item").length;
    for (let i = 0; i < count; i++) {
      if (document.getElementById("accordionInt").getElementsByClassName("accordion-item")[i].getElementsByClassName("accordion-collapse")[0].classList.contains("show")) {
        document.getElementById("accordionInt").getElementsByClassName("accordion-button")[i].click();
      }
    }
  }, 5000);
  $(".fc4").mouseenter(function () {
    window.clearTimeout(timer);
    $(".fc4").unbind('mouseenter');
  });
});

//  **********    **********    **********    **********    **********


  // if ($('#form1').find('#fname').val().trim() == '' || $('#form1').find('#lname').val().trim() == '' || $('#form1').find('#email').val().trim() == '' || $('#form1').find('#cnumber').val().trim() == '' || $('#form1').find('#address').val().trim() == '' || $('#form1').find('#city').val().trim() == '' || $('#form1').find('#state').val().trim() == '' || $('#form1').find('#zip').val().trim() == '' || $('#form1').find('#gender').val().trim() == '' || $('#form1').find('#bdate').val().trim() == '') {

  // }


  let auth_token;
  $(document).ready(function(){
      $.ajax({
          type: 'get',
          url: 'https://www.universal-tutorial.com/api/getaccesstoken',
          success: function(data){
              auth_token = data.auth_token;
              getCountries();
          },
          error: function(error){
              console.log(error);
          },
          headers: {
              "Accept": "application/json",
              "api-token": "QFZCxL-P9DDVZzxIYTti85dbkTb-RZYqW4fG39dTvmeLJ9TCRmVj-UQSruPENKH3MCw",
              "user-email": "murtazamister1@gmail.com"
          }
      })
  })
  function getCountries(){
      $.ajax({
          type: 'get',
          url: 'https://www.universal-tutorial.com/api/countries',
          success: function(data){
            $('#country').empty();
              data.forEach((ele)=>{
                $('#country').append(`<option value="${ele.country_name}">${ele.country_name}</option>`);
              })
              getStates();
          },
          error: function(error){
              console.log(error);
          },
          headers: {
              "Authorization": "Bearer "+auth_token,
              "Accept": "application/json"
          }
      })
  }
  function getStates(){
      $.ajax({
          type: 'get',
          url: 'https://www.universal-tutorial.com/api/states/'+$('#country').val(),
          success: function(data){
            $('#state').empty();
            data.forEach((ele)=>{
              $('#state').append(`<option value="${ele.state_name}">${ele.state_name}</option>`);
            })
            getCities();
          },
          error: function(error){
              console.log(error);
          },
          headers: {
              "Authorization": "Bearer "+auth_token,
              "Accept": "application/json"
          }
      })
  }
  function getCities(){
      $.ajax({
          type: 'get',
          url: 'https://www.universal-tutorial.com/api/cities/'+$('#state').val(),
          success: function(data){
            $('#city').empty();
            data.forEach((ele)=>{
              $('#city').append(`<option value="${ele.city_name}">${ele.city_name}</option>`);
            })
          },
          error: function(error){
              console.log(error);
          },
          headers: {
              "Authorization": "Bearer "+auth_token,
              "Accept": "application/json"
          }
      })
  }