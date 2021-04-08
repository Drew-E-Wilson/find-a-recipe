import { Link, Route, Switch } from 'react-router-dom';
import Search from "./components/Search/Search";
import RecipePage from './components/RecipePage/RecipePage';
import GroceryList from "./components/GroceryList/GroceryList";
import InPantry from "./components/InPantry/InPantry";

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

function App({recipeData}) {

  return (
    <div className="App">
      <nav>
        <Link to="/">Search Recipes</Link>
        <Link to="/InPantry">In Your Pantry</Link>
        <Link to="/GroceryList">Grocery List</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Search recipeData={Search.recipeData} />} />
          <Route path="/InPantry" component={InPantry} />
          <Route path="/GroceryList" component={GroceryList} />
          <Route path="/Recipe:id" render={routerProps => {
            const recipes = [...recipeData].filter(
              (p) => p.id === routerProps.match.params.id
            );
            return <RecipePage {...routerProps} recipes={recipes[0]} />
          }} />
          console.log(recipe);
        </Switch>
        
      </main>
    </div>
  );
}
export default App;
