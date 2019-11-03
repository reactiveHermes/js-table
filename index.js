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
    
    for(let i = 0; i <= 3; i++) {
       let elementRow = TABLE.insertRow();
       
       for(let j = 0; j <= 3; j++) {
           elementRow.insertCell();
       };
    };
};

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

    if (TABLE.rows.length > 1) {
        BUTTON_MINUS_ROW.style.display = "block";
    };
    if (TABLE.rows[0].cells.length > 1) {
    BUTTON_MINUS_COLUMN.style.display = "block";
    };

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
    buttonVisibilityTimeOut = setTimeout(hideMinusButtons, 1000);
}

BUTTON_MINUS_ROW.onclick = () => {
    let iterationsRow = TABLE.rows.length;
    let hiden = setTimeout(hideMinusButtons, 0);
    if (iterationsRow == 1) return;
    TABLE.deleteRow(currentRow);
    BUTTON_MINUS_ROW.style.top = TABLE.rows[0].cells[0].offsetTop + "px";
    
}

BUTTON_MINUS_COLUMN.onclick = ()=> {
    let iterationsRow = TABLE.rows.length;
    let iterationsCell = TABLE.rows[0].cells.length;
    let hiden = setTimeout(hideMinusButtons, 0);
    if (iterationsCell == 1) return;
    for(i = 0; i < iterationsRow; i++) {
        TABLE.rows[i].deleteCell(currentCell);
    };
    BUTTON_MINUS_COLUMN.style.left = TABLE.rows[0].cells[0].offsetLeft + "px";
};

BUTTON_MINUS_ROW.onmouseover = function () {
    clearTimeout(buttonVisibilityTimeOut);
};

BUTTON_MINUS_COLUMN.onmouseover = function () {
    clearTimeout(buttonVisibilityTimeOut);
};

BUTTON_MINUS_ROW.onmouseout = function () {
    buttonVisibilityTimeOut = setTimeout(hideMinusButtons, 1000);
};

BUTTON_MINUS_COLUMN.onmouseout = function () {
    buttonVisibilityTimeOut = setTimeout(hideMinusButtons, 1000);
};
