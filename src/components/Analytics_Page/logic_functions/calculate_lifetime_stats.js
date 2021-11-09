import dataset from '../datasets/activity_data.json';


const calcLifetimeStats = () => {

    const data = dataset.activities;
    let total_views = 0;
    let total_clicks = 0;

    for (let click = 0; click < data.length; click++) {
        total_views += data[click].views;
        total_clicks += data[click].clicks;
    }

    let averageCtr = Math.round((total_views / total_clicks) * 100);

    return { views: total_views, clicks: total_clicks, averageCtr }
}

export default calcLifetimeStats;