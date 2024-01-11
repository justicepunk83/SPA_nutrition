document.addEventListener("DOMContentLoaded", function () {
    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");
    const monthYearElement = document.getElementById("month-year");
    const calendarBody = document.getElementById("calendar-body");

    let currentDate = new Date();

    function renderCalendar() {
        // Clear previous month's data
        calendarBody.innerHTML = "";

        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        monthYearElement.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

        let date = new Date(firstDayOfMonth);
        while (date <= lastDayOfMonth) {
            const row = document.createElement("tr");

            for (let i = 0; i < 7; i++) {
                const cell = document.createElement("td");
                cell.textContent = date.getDate();

                // Highlight today's date
                if (date.toDateString() === new Date().toDateString()) {
                    cell.classList.add("today");
                }

                row.appendChild(cell);
                date.setDate(date.getDate() + 1);
            }

            calendarBody.appendChild(row);
        }
    }

    // Initial rendering
    renderCalendar();

    prevMonthButton.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
});
