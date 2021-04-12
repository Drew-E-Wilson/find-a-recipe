import { Link } from 'react-router-dom';
import SearchHeader from "../SearchHeader/SearchHeader";
import SearchForm from "../SearchForm/SearchForm";

function Search({lastSearch, recipeData, handleChange, handleSubmit, searchString}) {

    return (

        <div className="recipe-container">
            <header className="header-container">
                <SearchHeader path="/" lastSearch={lastSearch} />
                <SearchForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchString={searchString}
                />
            </header>
            {recipeData.map((recipe, i) => {
                console.log(JSON.stringify(recipe, null, 4));
                    return (
                            <div className="item-main-div" key={i}>
                                <Link className="item-container" to={`/RecipePage/${recipe.id}`}>
                                    <img className="item-image" src={recipe.image} alt={recipe.title} />
                                    <h2 className="recipe-title">{recipe.title}</h2>
                                </Link>
                            </div>
                    )
            })}
            <footer>Made by: Drew Wilson, *Copyright 2021*</footer>
        </div>
    )
}
  export default Search;