import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

      useEffect(()=> {
          document.title = "Tony Huang - " + currentCategory.name;
      }, [currentCategory]);

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2 style={{ margin: "10px", textAlign: "left" }}>
                <a href="/">
                    <span>Tony Huang</span>
                </a>
            </h2>
            <nav>
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