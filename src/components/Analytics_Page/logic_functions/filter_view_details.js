const filterViewDetailsData = (state, viewDetails = []) => {

    let { startDate, endDate } = state[0];

    startDate = new Date(startDate);
    endDate = new Date(endDate);


    const result = viewDetails.filter(function (obj) {
        const date = new Date(obj.date);
        return date >= startDate && date <= endDate;
    })

    return result;
}

export default filterViewDetailsData