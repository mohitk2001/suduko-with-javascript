const boxes = {
  "00": ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  "01": ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  "02": ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  10: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  11: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  12: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  20: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  21: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  22: ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  "03": ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  "04": ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  "05": ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  13: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  14: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  15: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  23: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  24: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  25: ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  "06": ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  "07": ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  "08": ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  16: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  17: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  18: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  26: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  27: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  28: ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  30: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  31: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  32: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  40: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  41: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  42: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  50: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  51: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  52: ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  33: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  34: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  35: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  43: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  44: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  45: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  53: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  54: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  55: ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  36: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  37: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  38: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  46: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  47: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  48: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  56: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  57: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  58: ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  60: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  61: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  62: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  70: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  71: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  72: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  80: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  81: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  82: ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  63: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  64: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  65: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  73: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  74: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  75: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  83: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  84: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  85: ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  66: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  67: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  68: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  76: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  77: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  78: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  86: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  87: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
  88: ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
};
const difficulties = {
  easy: [
    [0, 3, 0, 0, 6, 5, 2, 4, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 8, 2, 3, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 6, 1, 0, 0], //3
    [0, 8, 9, 0, 0, 0, 0, 5, 0], //4
    [0, 0, 7, 0, 8, 9, 0, 0, 0], //5
    [4, 9, 0, 1, 0, 0, 0, 0, 2], //6
    [7, 0, 0, 0, 5, 8, 0, 6, 9], //7
    [0, 0, 0, 0, 0, 0, 4, 0, 0], //8
  ],
  medium: [
    [0, 0, 0, 0, 6, 0, 0, 7, 0], //0
    [0, 0, 8, 7, 4, 0, 0, 5, 0], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 7, 0, 8, 0, 0, 0, 0, 0], //3
    [2, 0, 0, 0, 3, 0, 6, 4, 0], //4
    [0, 4, 0, 0, 0, 9, 0, 3, 1], //5
    [0, 5, 0, 3, 0, 0, 2, 0, 0], //6
    [0, 0, 0, 0, 9, 0, 0, 0, 0], //7
    [0, 1, 7, 0, 0, 0, 5, 0, 0], //8
  ],
  hard: [
    [0, 6, 0, 9, 1, 0, 0, 0, 0], //0
    [5, 0, 7, 0, 0, 0, 0, 0, 8], //1
    [0, 2, 0, 0, 0, 0, 0, 5, 0], //2
    [0, 0, 0, 7, 0, 9, 6, 0, 4], //3
    [0, 0, 6, 8, 0, 0, 0, 0, 7], //4
    [0, 4, 0, 0, 0, 0, 0, 3, 0], //5
    [0, 0, 0, 0, 0, 4, 5, 1, 0], //6
    [4, 0, 0, 0, 0, 6, 7, 0, 9], //7
    [0, 0, 0, 0, 0, 7, 0, 0, 0], //8
  ],
};
let globalLevel = "easy";
let emptyCell = false;
let inputValue = null;
let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");
let defaultColor_back = "#EBEBE4";
let onFocus_color = "lightblue";
window.onload = () => {
  easy.focus();
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.easy[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.easy[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "easy";
};
const clearPreviousBoard = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      var removeThese = document.getElementById(`c${i}${j}`);
      removeThese.disabled = false;
      removeThese.value = "";
      removeThese.style.background = "#fff";
      if (removeThese.getAttribute("class")) {
        removeThese.classList.remove("hoverEffect");
      }
      if (
        removeThese.getAttribute("onfocus") &&
        removeThese.getAttribute("onblur")
      ) {
        removeThese.removeAttribute("onfocus");
        removeThese.removeAttribute("onblur");
      }
    }
  }
};
easy.addEventListener("click", () => {
  easy.focus();
  clearPreviousBoard();
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.easy[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.easy[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "easy";
});

medium.addEventListener("click", () => {
  medium.focus();

  clearPreviousBoard();

  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.medium[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.medium[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "medium";
});

hard.addEventListener("click", () => {
  clearPreviousBoard();
  hard.focus();

  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.hard[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.hard[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).style.background = "#fff";
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "hard";
});

//onfocusing on perticular cell

function runFocus(e) {
  e.style.background = "#BBDEFB";

  //for rowFocus
  let rowFocus = e.id.charAt(1);

  let rowFocusBack = parseInt(rowFocus);
  let rowFocusForward = parseInt(rowFocus);
  for (let i = rowFocusForward; i < 9; i++) {
    if (!document.getElementById(`c${i}${e.id.charAt(2)}`).disabled)
      document.getElementById(`c${i}${e.id.charAt(2)}`).style.background =
        "#E2E7ED";
  }
  for (let j = rowFocusBack; j >= 0; j--) {
    if (!document.getElementById(`c${j}${e.id.charAt(2)}`).disabled)
      document.getElementById(`c${j}${e.id.charAt(2)}`).style.background =
        "#E2E7ED";
  }
  //ends here

  //for column focus
  let columnFocus = e.id.charAt(2);

  let colFocusForward = parseInt(columnFocus);
  let columnFocusBack = parseInt(columnFocus);

  for (let m = colFocusForward; m < 9; m++) {
    if (!document.getElementById(`c${e.id.charAt(1)}${m}`).disabled)
      document.getElementById(`c${e.id.charAt(1)}${m}`).style.background =
        "#E2E7ED";
  }
  for (let n = columnFocusBack; n >= 0; n--) {
    if (!document.getElementById(`c${e.id.charAt(1)}${n}`).disabled) {
      document.getElementById(`c${e.id.charAt(1)}${n}`).style.background =
        "#E2E7ED";
    }
  }
  //for box focus

  for (let i = 0; i < boxes[e.id.slice(1, 3)].length; i++) {
    document.getElementById(`c${boxes[e.id.slice(1, 3)][i]}`).style.background =
      "#E2E7ED";
  }
  for (let e = 0; e < 9; e++) {
    for (let f = 0; f < 9; f++) {
      if (globalLevel === "easy") {
        if (difficulties.easy[e][f] !== 0)
          document.querySelector(`#c${e}${f}`).style.background =
            defaultColor_back;
      } else if (globalLevel === "medium") {
        if (difficulties.medium[e][f] !== 0)
          document.querySelector(`#c${e}${f}`).style.background =
            defaultColor_back;
      } else if (globalLevel === "hard") {
        if (difficulties.hard[e][f] !== 0)
          document.querySelector(`#c${e}${f}`).style.background =
            defaultColor_back;
      }
    }
  }
  //ends here
  e.style.background = "#BBDEFB";

  //validation for row
  e.addEventListener("keypress", (event) => {
    inputValue = event.key;
    for (let c = 0; c < 9; c++) {
      for (let d = 0; d < 9; d++) {
        if (globalLevel === "easy") {
          if (difficulties.easy[c][d] === 0)
            document.querySelector(`#c${c}${d}`).style.background = "#fff";
        } else if (globalLevel === "medium") {
          if (difficulties.medium[c][d] === 0)
            document.querySelector(`#c${c}${d}`).style.background = "#fff";
        } else if (globalLevel === "hard") {
          if (difficulties.hard[c][d] === 0)
            document.querySelector(`#c${c}${d}`).style.background = "#fff";
        }
      }
    }
    //same value will be highlight on the board
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (document.querySelector(`#c${i}${j}`).value === inputValue) {
          document.querySelector(`#c${i}${j}`).style.background = "lightblue";
        }
      }
    }

    //checkValid row
    let row_Validate = e.id.charAt(1);

    let rowTrack_back = parseInt(row_Validate);
    let rowTrack_for = parseInt(row_Validate);

    for (let i = rowTrack_for; i < 9; i++) {
      if (
        document.getElementById(`c${i}${e.id.charAt(2)}`).value === inputValue
      ) {
        alert(
          "Dublicate value not allowed You cant have same value in same column"
        );
        break;
      }
    }
    for (let j = rowTrack_back; j >= 0; j--) {
      if (
        document.getElementById(`c${j}${e.id.charAt(2)}`).value === inputValue
      ) {
        alert(
          "Dublicate value not allowed You cant have same value in same column"
        );
        break;
      }
    }

    // ckeckValid for column
    let column_Validate = e.id.charAt(2);

    let columnTrack_for = parseInt(column_Validate);
    let columnTrack_back = parseInt(column_Validate);

    for (let m = columnTrack_for; m < 9; m++) {
      if (
        document.getElementById(`c${e.id.charAt(1)}${m}`).value === inputValue
      ) {
        alert(
          "Dublicate value not allowed You cant have same value in same row"
        );
        break;
      }
    }
    for (let n = columnTrack_back; n >= 0; n--) {
      if (
        document.getElementById(`c${e.id.charAt(1)}${n}`).value === inputValue
      ) {
        alert(
          "Dublicate value not allowed You cant have same value in same row"
        );
        break;
      }
    }
  });
}

//onblur
function runBlur(e) {
  //for rowBlur
  let rowBlur = e.id.charAt(1);

  let rowBlurBack = parseInt(rowBlur);
  let rowBlurForward = parseInt(rowBlur);
  for (let i = rowBlurForward; i < 9; i++) {
    if (!document.getElementById(`c${i}${e.id.charAt(2)}`).disabled)
      document.getElementById(`c${i}${e.id.charAt(2)}`).style.background =
        "#fff";
  }
  for (let j = rowBlurBack; j >= 0; j--) {
    if (!document.getElementById(`c${j}${e.id.charAt(2)}`).disabled)
      document.getElementById(`c${j}${e.id.charAt(2)}`).style.background =
        "#fff";
  }
  //ends here
  //for ColBlur
  let columnBlur = e.id.charAt(2);

  let columnBlurForward = parseInt(columnBlur);
  let columnBlurBack = parseInt(columnBlur);
  for (let m = columnBlurForward; m < 9; m++) {
    if (!document.getElementById(`c${e.id.charAt(1)}${m}`).disabled)
      document
        .getElementById(`c${e.id.charAt(1)}${m}`)
        .removeAttribute("style");
  }
  for (let n = columnBlurBack; n >= 0; n--) {
    if (!document.getElementById(`c${e.id.charAt(1)}${n}`).disabled) {
      document
        .getElementById(`c${e.id.charAt(1)}${n}`)
        .removeAttribute("style");
    }
  }

  //alternative of highlight part it will set as the elements were
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (document.querySelector(`#c${i}${j}`).value === inputValue) {
        document.querySelector(`#c${i}${j}`).style.background =
          defaultColor_back;
      }
    }
  }

  for (let c = 0; c < 9; c++) {
    for (let d = 0; d < 9; d++) {
      if (globalLevel === "easy") {
        if (difficulties.easy[c][d] === 0)
          document.querySelector(`#c${c}${d}`).style.background = "#fff";
      } else if (globalLevel === "medium") {
        if (difficulties.medium[c][d] === 0)
          document.querySelector(`#c${c}${d}`).style.background = "#fff";
      } else if (globalLevel === "hard") {
        if (difficulties.hard[c][d] === 0)
          document.querySelector(`#c${c}${d}`).style.background = "#fff";
      }
    }
  }
}

const GoandCheckRow = () => {
  let counter = 0;
  for (let i = 0; i < 9; i++) {
    let sums = 0;
    for (let j = 0; j < 9; j++) {
      if (document.querySelector(`#c${i}${j}`).value !== "") {
        sums = sums + parseInt(document.querySelector(`#c${i}${j}`).value);
      }
    }
    if (sums === 45) {
      counter++;
    } else if (sums !== 45) {
    }
  }
  if (counter === 9) {
    return true;
  } else {
    return false;
  }
};

const GoandCheckCol = () => {
  let counter = 0;
  for (let i = 0; i < 9; i++) {
    let sums = 0;
    for (let j = 0; j < 9; j++) {
      if (document.querySelector(`#c${j}${i}`).value !== "") {
        sums = sums + parseInt(document.querySelector(`#c${j}${i}`).value);
      }
    }
    if (sums === 45) {
      counter++;
    } else if (sums !== 45) {
    }
  }
  if (counter === 9) {
    return true;
  } else {
    return false;
  }
};

const eachBox = [
  ["00", "01", "02", "10", "11", "12", "20", "21", "22"],
  ["03", "04", "05", "13", "14", "15", "23", "24", "25"],
  ["06", "07", "08", "16", "17", "18", "26", "27", "28"],
  ["30", "31", "32", "40", "41", "42", "50", "51", "52"],
  ["33", "34", "35", "43", "44", "45", "53", "54", "55"],
  ["36", "37", "38", "46", "47", "48", "56", "57", "58"],
  ["60", "61", "62", "70", "71", "72", "80", "81", "82"],
  ["63", "64", "65", "73", "74", "75", "83", "84", "85"],
  ["66", "67", "68", "76", "77", "78", "86", "87", "88"],
];

const GoandCheckBoxes = () => {
  let count = 0;
  for (let i = 0; i < 9; i++) {
    let sum = 0;
    for (let j = 0; j < 9; j++) {
      if (document.getElementById(`c${eachBox[i][j]}`).value !== "") {
        sum =
          sum + parseInt(document.getElementById(`c${eachBox[i][j]}`).value);
      }
    }
    if (sum === 45) {
      count++;
    }
  }
  if (count === 9) {
    return true;
  } else return false;
};
const validata_Button = document.getElementById("validationButton");
validata_Button.addEventListener("click", () => {
  let isValid = GoandCheckRow() && GoandCheckCol() && GoandCheckBoxes();
  if (isValid) {
    alert("Congratulation !! You made it ");
  } else alert("Please try again It's not completed prefectly");
});
