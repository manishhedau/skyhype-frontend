

function dateCompare(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const isDateSame = date1.getDate() === date2.getDate();
    const isMonthSame = date1.getMonth() === date2.getMonth();
    const isYearSame = date1.getFullYear() === date2.getFullYear();
    if (isDateSame && isMonthSame && isYearSame)
        return true;
    return false;
}


const filterJoinMyClubClickDetails = (state, joinMyClubClickDetails = []) => {
    let { startDate, endDate } = state[0];

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    const result = joinMyClubClickDetails.filter(function (obj) {
        const date = new Date(obj.date);
        return date >= startDate && date <= endDate;
    })

    const diff = endDate.getDate() - startDate.getDate();


    const temp = [];

    const currDate = new Date(startDate);
    for (let i = 0; i <= diff; i++) {
        let clickCount = 0;
        for (let j = 0; j < result.length; j++) {
            const clickDate = new Date(result[j].date);
            if (dateCompare(currDate, clickDate))
                clickCount++;
        }
        temp.push(clickCount);
        currDate.setDate(currDate.getDate() + 1);
    }

    // console.log("Join my club filter date wise : ", temp);


    return [result, temp];
}

export default filterJoinMyClubClickDetails;