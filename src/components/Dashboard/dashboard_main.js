import Navbar from '../Navbar/navbar';
import Preview from '../Preview/preview';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppearancePage from '../Appearance_Page/appearance_page';
import ActivityPage from '../Activity_Page/activities_page';
import './styles/dashboard.css';
import useFetchUser from '../../services/useFetchUser';
import SocialLink from "../../pages/SocialLink";
import Profile from "../profile/index";
import Loader from '../Loader/Loader';
import AnalyticsPage from '../Analytics_Page/analytics_page';


const MyError = () => {
    return <Redirect to="/" />;
}

const Dashboard = () => {

    const { isLoading, error } = useFetchUser("61815b950cda90d1d126f33b");

    if (isLoading && !error) {
        return <Loader />
    }

    if (!isLoading && error) {
        return <div>Please check your network connection or please reload the page.</div>
    }

    // console.log("Inside the dashboard")

    return (

        <div className="dashboard">
            <Preview />
            <Switch>
                <Route exact path="/dashboard/user/:userId">
                    {/* <h1>Main dashboard with edit profile and groups</h1> */}
                    <Profile />
                </Route>

                <Route exact path="/dashboard/user/update-social-links/:userId">
                    <SocialLink a />
                </Route>

                <Route exact path="/dashboard/user/update-activity-links/:userId">
                    <ActivityPage />
                </Route>

                <Route exact path="/dashboard/user/styles/:userId">
                    <AppearancePage />
                </Route>

                <Route exact path="/dashboard/user/analytics/:userId">
                    <AnalyticsPage />
                </Route>

                <Route exact path="/dashboard/user/settings/:userId">
                    <h1>Settings component comes here</h1>
                </Route>

                <Route exact path="/dashboard/user/support/:userId">
                    <h1>Support section comes here</h1>
                </Route>

                <Route path="*" component={MyError} />
            </Switch>
            <Navbar />
        </div>
    );
}

export default Dashboard;