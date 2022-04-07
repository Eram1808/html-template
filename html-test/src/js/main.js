let btn = document.getElementById('mybtn');

btn.addEventListener('click', sortTable);

function sortTable() {

    const tbl = document.getElementById("tbl").tBodies[0];

    let store = [];

    for (let i = 0, len = tbl.rows.length; i < len; i++) {

        let row = tbl.rows[i];
        let value = parseInt(row.cells[1].textContent || row.cells[1].innerText);

        if (!isNaN(value)) {
            store.push([value, row]);
        }
    }

    store.sort((x, y) => {
        return x[0] - y[0];
    });

    for (let i = 0, len = store.length; i < len; i++) {

        tbl.appendChild(store[i][1]);
    }

    store = null;
}