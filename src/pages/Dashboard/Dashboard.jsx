import WelcomeCard from "../../components/dashboard/WelcomeCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import CategoryCard from "../../components/dashboard/CategoryCard";
import ContinueLearning from "../../components/dashboard/ContinueLearning";
import RecentTopics from "../../components/dashboard/RecentTopics";

import "../../components/dashboard/Dashboard.css";

const Dashboard = () => {

    return (

        <>

            <h1 style={{marginBottom:"25px"}}>

                Dashboard

            </h1>

            <div className="dashboard-grid">

                <div className="left-column">

                    <WelcomeCard />

                    <ProgressCard />

                    <div className="category-grid">

                        <CategoryCard
                            title="Arrays"
                            completed="0"
                            total="18"
                        />

                        <CategoryCard
                            title="Sorting"
                            completed="0"
                            total="12"
                        />

                        <CategoryCard
                            title="Trees"
                            completed="0"
                            total="24"
                        />

                    </div>

                </div>

                <div className="right-column">

                    <ContinueLearning />

                    <RecentTopics />

                </div>

            </div>

        </>

    );

};

export default Dashboard;