import React from 'react';
import avatar from '../../assets/images/Avatar.jpg';

function About() {
    return (
        <section className="my-2">
            <div>
                <h1 id="about">About me</h1>
                <img src={avatar} className="my-1" style={{ width: "15%" }} alt="profile avater" />
            </div>
            <div>
                <p>I am an aspiring full stack web developer who enjoys learning about the newest technologies while always finding ways to improve upon what I have already learned.</p>
                <p>My hobbies include building various web projects for fun and playing video games such as Valorant and other first person shooters.</p>
            </div>

        </section>

    );
}

export default About;