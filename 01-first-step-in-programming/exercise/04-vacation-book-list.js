function vacationBookList(pageCount, pagesPerHour, daysCount) {
    const totalTimePerBook = pageCount / pagesPerHour;
    const neededHoursPerDay = totalTimePerBook / daysCount;
    console.log(neededHoursPerDay);
}

vacationBookList(212, 20, 2);
vacationBookList(432, 15, 4);