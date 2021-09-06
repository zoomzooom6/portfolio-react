import React from 'react';
import codeQuiz from '../../assets/images/CodeQuiz.jpg';
import mealThyme from '../../assets/images/MealThyme.jpg';
import weatherDash from '../../assets/images/WeatherDashboard.jpg';
import windShop from '../../assets/images/WindowShopper.jpg';
import workDay from '../../assets/images/WorkDayScheduler.jpg';
import readGen from '../../assets/images/ReadmeGenerator.jpg';

function Portfolio() {
    const gallery = [
        {
            name: "Weather Dashboard",
            src: { weatherDash },
            git: "https://github.com/zoomzooom6/Weather_Dashboard",
            live: "https://zoomzooom6.github.io/Weather_Dashboard/"
        },
        {
            name: "Code Quiz",
            src: { codeQuiz },
            git: "https://github.com/zoomzooom6/Code_Quiz",
            live: "https://zoomzooom6.github.io/Code_Quiz/"
        },
        {
            name: "Workday Scheduler",
            src: { workDay },
            git: "https://github.com/zoomzooom6/Workday_Scheduler",
            live: "https://zoomzooom6.github.io/Workday_Scheduler/"
        },
        {
            name: "README Generator",
            src: { readGen },
            git: "https://github.com/zoomzooom6/README_Generator",
            live: "https://github.com/zoomzooom6/README_Generator"
        },
        {
            name: "Meal Thyme",
            src: { mealThyme },
            git: "https://github.com/uoftgroup7/mealThyme/",
            live: "https://uoftgroup7.github.io/mealThyme/"
        },
        {
            name: "Window Shopper",
            src: { windShop },
            git: "https://github.com/Gr0upFour/projectTwo",
            live: "https://project2-window-shopper.herokuapp.com/"
        }
    ]

    return (
        <section>
            <div>
                <h3>{gallery[0].name}</h3>
                <img src={weatherDash} style={{ width: "25%" }} alt='Weather Dashboard Page'/>
            </div>
            <div>
                <a href={gallery[0].git} target="_blank" rel="noreferrer">GitHub Repository</a>
            </div>
            <div>
                <a href={gallery[0].live} target="_blank" rel="noreferrer">Live Deployment</a>
            </div>
        </section>
    );
}

export default Portfolio;