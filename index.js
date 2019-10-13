// Таблица
const TABLE = document.querySelector("#table1");
// Кнопка добавления ряда
const BUTTON_PLUS_ROW = document.querySelector(".button_plus_row");

BUTTON_PLUS_ROW.onclick = function() {
    let currentRow = TABLE.insertRow(-1);
    let iterations = TABLE.rows[0].cells.length;

    for (let i=0; i < iterations; i++) {
        currentRow.insertCell();
    }
};

