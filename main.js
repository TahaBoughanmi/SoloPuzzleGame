$(function () {
  let audio;
  let checker;
  let playAudio = function () {
    audio.play();
  };
  const originalArr = [
    24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
    4, 3, 2, 1,
  ];
  let arrOfIds = [];
  let Arr = [].concat(originalArr);
  $(".PHTP ").slideUp(0);
  $("#watch").hide();
  $("#gif").hide();
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      const y = arr[i];
      arr[i] = arr[x];
      arr[x] = y;
    }
    return arr;
  }
  function getImageIds() {
    let imageIds = [];
    $(".lionPuzzle").each(function () {
      let id = parseInt($(this).attr("id"));
      imageIds.push(id);
    });
    return imageIds;
  }
  function checkPos() {
    let result = false;
    for (var i = 0; i < arrOfIds.length; i++) {
      if (arrOfIds[i] === originalArr[i]) {
        result = true;
      } else {
        return (result = false);
      }
    }
    if (result) {
      console.log();
      audio = document.querySelector(".done");
      $("#gameMode").fadeOut(3000);
      playAudio();
      setTimeout(function () {
        audio = document.querySelector(".end");
        $(".giphy").append(
          `<p class='giphy'>You made it in ${$("#watch").html()} secondes</P>`
        );
        $("#gif").show();
        playAudio();
      }, 4000);
    }
  }
  shuffle(Arr);
  $('#signup').click(function(){
    $('#id01').css({'display':'block'})
  })
  $('.cancelbtn').click(function(){
    $('#id01').css({'display':'none'})
  })
  $('.login').click(function(){
    
    $("#myForm").css({'display' : 'block'})
  })
  $('.cancel').click(function(){
    $('#myForm').css({'display':'none'})
  })
  $(".HTP").click(function () {
    $(".PHTP ").slideToggle();
  });
  $(".sound").click(function () {
    const audios = document.querySelectorAll("audio");
    for (var i = 0; i < audios.length; i++) {
      if (audios[i].muted === false) {
        audios[i].muted = true;
        $(this).html('<i class="fa-solid fa-volume-xmark fa-lg"></i>');
      } else {
        audios[i].muted = false;
        $(this).html('<i class="fa-solid fa-volume-high fa-lg"></i>');
      }
    }
  });
  $(".start").click(function () {
    let s = 0;
    let m = 0;
    let j = 1;
    setInterval(function () {
      $("#watch").html(m + ":" + s);
      s++;
      if (s === 59) {
        m++;
        s = 0;
      }
      $("#watch").show();
    }, 1000);
    checker = $(this).parent().attr("id");
    for (var i = 0; i < Arr.length; i++) {
      if (checker === "lion") {
        audio = document.querySelector(".lionKing");

        $(`#y${j}`).append(
          `<img class='lionPuzzle' id=${Arr[i]} src=/LionKing/${Arr[i]}.jpg>`
        );
      } else if (checker === "peter") {
        audio = document.querySelector(".peterPan");
        $(`#y${j}`).append(
          `<img class='lionPuzzle' id=${Arr[i]} src=/PerterPan/${Arr[i]}.jpg>`
        );
      }
      j++;
    }
    playAudio();
    $(`#${checker}`).fadeOut(1000);
    audio = document.querySelector(".po9");
    $("#sortable").sortable({
      update: function () {
        playAudio();
        arrOfIds = getImageIds();
        checkPos();
      },
    });
  });
});
