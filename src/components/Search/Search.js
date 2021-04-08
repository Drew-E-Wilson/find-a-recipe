import { Link } from 'react-router-dom';
import SearchHeader from "../SearchHeader/SearchHeader";
import SearchForm from "../SearchForm/SearchForm";
// import {useState, useEffect} from "react";

function Search({lastSearch, recipeData, handleChange, handleSubmit, searchString}) {
//   const [recipeData, setRecipeData] = useState([]);
//   const [searchString, setSearchString] = useState([""]);
//   const [lastSearch, setLastSearch] = useState("");

//   const getRecipe = async () => {
//     try {
//       const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchString}&apiKey=${process.env.REACT_APP_API_KEY}`);
//       const data = await res.json();
//       console.log(JSON.stringify(data.results, null, 4));
//       setRecipeData(data.results);
//       setLastSearch(searchString);
//       setSearchString("");
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   useEffect(() => {
//     getRecipe();
//   }, []);

//   useEffect(() => {
//     getRecipe(searchString);
//   }, []);

//   function handleChange(event) {
//     setSearchString(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     getRecipe(searchString);
//   }
// console.log(JSON.stringify(recipeData, null, 4));

    return (
        <div>
            <SearchHeader path="/" lastSearch={lastSearch} />
            <SearchForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchString={searchString}
            />
            {recipeData.map((recipe, i) => {
                console.log(JSON.stringify(recipe, null, 4));
                return (
                    <div key={i}>
                        <Link to={`/RecipePage/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.title} width="200px" />
                            <h2>{recipe.title}</h2>
                        </Link>
                </div>
                )
            })}
        </div>
    )
}
  
  export default Search;

  // Use Giphy Search in combo with National park route. Do search, see results, click on a result, get taken to new page. Shamseen# #GirlBoss, #Epic Ruler, #Queen, #Parkour, OverAchiever, OneWomanWonder, AquaWoman.
  