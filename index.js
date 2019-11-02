// Таблица
const TABLE = document.querySelector("#table1");
// Кнопка добавления ряда
const BUTTON_PLUS_ROW = document.querySelector(".button_plus_row");
//Кнопка добавления колонки
const BUTTON_PLUS_COLUMN = document.querySelector(".button_plus_column");
//Кнопка удаления ряда и колонки(движение)
const BUTTON_MINUS_ROW = document.querySelector(".button_minus_row");
const BUTTON_MINUS_COLUMN = document.querySelector(".button_minus_column");
let currentRow;
let currentCell;
let buttonVisibilityTimeOut;

window.onload = () => {
    BUTTON_MINUS_ROW.style.display = "none";
    BUTTON_MINUS_COLUMN.style.display = "none";
}

BUTTON_PLUS_ROW.onclick = function () {
    let currentRow = TABLE.insertRow();
    let iterations = TABLE.rows[0].cells.length;

    for (let i = 0; i < iterations; i++) {
        currentRow.insertCell();
    };
};


BUTTON_PLUS_COLUMN.onclick = function () {
    let iterationsRow = TABLE.rows.length;
    for (let i = 0; i < iterationsRow; i++) {
        TABLE.rows[i].insertCell();
    };
};


TABLE.onmouseover = function (event) {
    let target = event.target;
    let targetRow = target.offsetTop;
    let targetColumn = target.offsetLeft;
    clearTimeout(buttonVisibilityTimeOut);
    console.log('over');

    BUTTON_MINUS_ROW.style.display = "block";
    BUTTON_MINUS_COLUMN.style.display = "block";
    console.log(event.target);
    if (target.tagName != 'TD') return;
    currentRow = target.parentElement.rowIndex;
    currentCell = target.cellIndex;
    BUTTON_MINUS_ROW.style.top = targetRow + "px";
    BUTTON_MINUS_COLUMN.style.left = targetColumn + "px";
    
};

function hideMinusButtons() {
    BUTTON_MINUS_ROW.style.display = "none";
    BUTTON_MINUS_COLUMN.style.display = "none";
}

TABLE.onmouseout = () => {
    console.log('out');
    buttonVisibilityTimeOut = setTimeout(hideMinusButtons, 2000);
}

BUTTON_MINUS_ROW.onclick = () => {
    let r = TABLE.rows.length;
    
    if (r == 1) return;
    TABLE.deleteRow(currentRow);
}

BUTTON_MINUS_COLUMN.onclick = ()=> {
    let iterations = TABLE.rows.length;
    let c = TABLE.rows[0].cells.length;
    if (c == 1) return;
    for(i = 0; i < iterations; i++) {
        TABLE.rows[i].deleteCell(currentCell);
    }
}
BUTTON_MINUS_ROW.onmouseover = function () {
    clearTimeout(buttonVisibilityTimeOut);
}
BUTTON_MINUS_COLUMN.onmouseover = function () {
    clearTimeout(buttonVisibilityTimeOut);
}
