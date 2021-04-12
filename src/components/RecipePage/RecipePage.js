import {useEffect, useState} from "react";

export default function RecipePage(props) {
  const [oneRecipe, setOneRecipe] = useState([]);
  const getRecipe = async () => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/${props.match.params.RecipePageId}/information?&parseIngredients&apiKey=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      setOneRecipe(data)
      console.log(JSON.stringify(data, null, 4));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getRecipe();
  }, []);

  if (props === undefined) {
    return <h1>loading ...</h1>
}

  // if (oneRecipe.vegetarian === true) {
  //   style={color: "green"}
  // } else {
  //   style={color: "red"}
  // }

  return (
    <div className="recipePage">
      <div className="main-title">
        <h1>{oneRecipe.title}</h1>
      </div>
      <div className="recipe-pic">
        <img src={oneRecipe.image} alt={oneRecipe.title} />
      </div>
      <div className="health-options">
        <p>Vegetarian: {`${oneRecipe.vegetarian}`}</p>
        <p>Vegan: {`${oneRecipe.vegan}`}</p>
        <p>Gluten Free: {`${oneRecipe.glutenFree}`}</p>
        <p>Dairy Free: {`${oneRecipe.dairyFree}`}</p>
      </div>
      <div className="intro">
        <h3>Intro:</h3>
        <p dangerouslySetInnerHTML={{__html: oneRecipe.summary}}></p>
      </div>
      <div>
        <h3>Ingredients:</h3>
        <ol>
          <li>a</li>
        </ol>
      </div>
      <div className="instructions">
        <h3>Instructions:</h3>
        <p dangerouslySetInnerHTML={{__html: oneRecipe.instructions}}></p>
      </div>
    </div>
  );
};
