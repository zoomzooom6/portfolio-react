import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = "Tony Huang - " + currentCategory.name;
    }, [currentCategory]);

    return (
        <header>
            <nav className="flex-row">
                <h2>
                    <a href="/">
                        <span>Tony Huang</span>
                    </a>
                </h2>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}
                            key={category.name}>
                            <span onClick={() => setCurrentCategory(category)}>
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