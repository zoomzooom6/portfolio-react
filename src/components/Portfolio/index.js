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
            src: weatherDash,
            git: "https://github.com/zoomzooom6/Weather_Dashboard",
            live: "https://zoomzooom6.github.io/Weather_Dashboard/"
        },
        {
            name: "Code Quiz",
            src: codeQuiz,
            git: "https://github.com/zoomzooom6/Code_Quiz",
            live: "https://zoomzooom6.github.io/Code_Quiz/"
        },
        {
            name: "Workday Scheduler",
            src: workDay,
            git: "https://github.com/zoomzooom6/Workday_Scheduler",
            live: "https://zoomzooom6.github.io/Workday_Scheduler/"
        },
        {
            name: "README Generator",
            src: readGen,
            git: "https://github.com/zoomzooom6/README_Generator",
            live: "https://github.com/zoomzooom6/README_Generator"
        },
        {
            name: "Meal Thyme",
            src: mealThyme,
            git: "https://github.com/uoftgroup7/mealThyme/",
            live: "https://uoftgroup7.github.io/mealThyme/"
        },
        {
            name: "Window Shopper",
            src: windShop,
            git: "https://github.com/Gr0upFour/projectTwo",
            live: "https://project2-window-shopper.herokuapp.com/"
        }
    ]

    return (
        <section>
            <ul>
                {gallery.map((portfolio) => (
                    <li>
                        <a href={portfolio.git} target="_blank" rel="noreferrer"><h3>{portfolio.name}</h3></a>
                        <img src={portfolio.src} style={{ width: "25%" }} alt={portfolio.name} />
                        <div>
                            <a href={portfolio.live} target="_blank" rel="noreferrer">Live</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Portfolio;