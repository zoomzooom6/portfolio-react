import React from 'react';

function Nav() {
    const categories = [
        {
            name: "About Me"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Contact"
        },
        {
            name: "Resume"
        }
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2 style={{ margin: "10px", textAlign: "left"}}>
                <a href="/">
                    <span>Tony Huang</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={ () => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;