
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

const filterSocialLinksData = (state, socialLinkList) => {

    let { startDate, endDate } = state[0];

    const data = []

    startDate = new Date(startDate);
    endDate = new Date(endDate);
    // endDate.setDate(endDate.getDate() - 6);

    const diff = endDate.getDate() - startDate.getDate();


    socialLinkList.forEach(function (socialLink) {

        const result = socialLink.click_details.filter(function (obj) {
            const date = new Date(obj.date);
            return date >= startDate && date <= endDate;
        })


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

        data.push({
            social_media: socialLink.social_media, total: temp,
            result
        })
    })


    // console.log("Data object : ", data);
    return data;
}

export default filterSocialLinksData;

export const giveLabel = (state) => {
    let { startDate, endDate } = state[0];



    startDate = new Date(startDate);
    endDate = new Date(endDate);

    const diff = endDate.getDate() - startDate.getDate();

    const labels = [
        "Sun",
        'Mon',
        'Tue',
        'Wed',
        'Thus',
        "Fri",
        "Sat",
    ]

    const result = [];

    const currDate = new Date(startDate);
    for (let i = 0; i <= diff; i++) {

        const day = currDate.getDay();

        result.push(labels[day]);


        currDate.setDate(currDate.getDate() + 1);
    }


    // console.log("Day Label : ", result);
    return result;
}