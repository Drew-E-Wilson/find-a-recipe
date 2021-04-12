import { Link, Route, Switch } from 'react-router-dom';
import Search from "./components/Search/Search";
import RecipePage from './components/RecipePage/RecipePage';
import GroceryList from "./components/GroceryList/GroceryList";
import InPantry from "./components/InPantry/InPantry";
import {useState, useEffect} from "react";

function App() {
  
  const [recipeData, setRecipeData] = useState([]);
  const [searchString, setSearchString] = useState([""]);
  const [lastSearch, setLastSearch] = useState("");

  const getRecipe = async () => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchString}&apiKey=${process.env.REACT_APP_API_KEY}&number=18`);
      const data = await res.json();
      // console.log(JSON.stringify(data.results, null, 4));
      setRecipeData(data.results);
      setLastSearch(searchString);
      setSearchString("");
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getRecipe();
  }, []);

  useEffect(() => {
    getRecipe(searchString);
  }, []);

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getRecipe(searchString);
  }





  return (
    <div className="App">
      <nav className="homeNav">
        <div>
          <Link className="siteName" to="/">Find-A-Recipe</Link>
        </div>
        {/* <Link to="/InPantry">In Your Pantry</Link>
        <Link to="/GroceryList">Grocery List</Link> */}
      </nav>
      <main>
        <Switch >
          <div className="main-container">
            <Route path="/" exact render={() => <Search searchString={searchString} handleSubmit={handleSubmit} handleChange={handleChange} lastSearch={lastSearch} recipeData={recipeData} />} />
            {/* <Route path="/InPantry" component={InPantry} />
            <Route path="/GroceryList" component={GroceryList} /> */}
            <Route path="/RecipePage/:RecipePageId" component={RecipePage} />
            </div>
        </Switch>
        
      </main>
    </div>
  );
}
export default App;
