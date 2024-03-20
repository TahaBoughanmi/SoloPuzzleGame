$(function () {
  const originalArr = [
    24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5,
    4, 3, 2, 1,
  ];
  let arrOfIds = [];
  let Arr = [].concat(originalArr);
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
      console.log("bravo");
    }
  }
  shuffle(Arr);
  $("#start").click(function () {
    let j = 1;
    let checker = $(this).parent().attr("id");

    for (var i = 0; i < Arr.length; i++) {
      if (checker === "lion") {
        $(`#y${j}`).append(
          `<img class='lionPuzzle' id=${Arr[i]} src=/LionKing/${Arr[i]}.jpg>`
        );
      } else if (checker === "peter") {
        $(`#y${j}`).append(
          `<img class='lionPuzzle' id=${Arr[i]} src=/PerterPan/${Arr[i]}.jpg>`
        );
      }

      j++;
    }
    $(`#${checker}`).fadeOut(1000);
    $("#sortable").sortable({
      update: function () {
        arrOfIds = getImageIds();
        console.log(arrOfIds, originalArr);
        checkPos()
      },
    });
  });
});
