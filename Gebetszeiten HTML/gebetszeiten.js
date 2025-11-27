window.addEventListener("load", function() {

    const date = new Date().toDateString().slice(4, 10);
    const table = document.getElementById("gebetszeitensammlung");
    const row = getRowByDate(table, date);
    const prayerDisplayTable = document.getElementById("gebetszeiten");
    const prayerDisplayTableMobile = document.getElementById("gebetszeitenmobil");
    
    console.log(date);
    console.log(row);
    console.log(table);

    // Function to find the table row matching the current date
    function getRowByDate(table, dateStr) {
        // Iterate through table rows to find the matching date
        for (const row of table.tBodies[0].rows) {
            const firstCell = row.cells[0];
            if (firstCell && firstCell.textContent.trim() === dateStr) {
            return row;
            }
        }
        return null;
    }
    
    // Function to display prayer times in the designated tables
    function displayPrayerTimes(row) {
        if (row) {
            for(let i = 0; i < row.cells.length; i++) {
                // Update desktop table
                prayerDisplayTable.tBodies[0].rows[0].cells[i].innerText = row.cells[i].innerText;
                // Update mobile table
                prayerDisplayTableMobile.tBodies[0].rows[i].cells[1].innerText = row.cells[i].innerText;
            }
        }else {
            console.error("No prayer times found for today.");
            return;

        }
    }

    displayPrayerTimes(row);
    
});