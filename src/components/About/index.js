import React from 'react';
import avatar from '../../assets/images/Avatar.jpg';

function About() {
    return (
        <section className="my-2">
            <div>
                <h1 id="about">A little about me</h1>
                <img src={avatar} className="my-1" style={{ width: "15%" }} alt="profile avater" />
            </div>
            <div>
                <textarea className="my-2">
                    Just a little bit about me. Placeholder text for now.
                </textarea>
            </div>
            
        </section>
        
    );
}

export default About;