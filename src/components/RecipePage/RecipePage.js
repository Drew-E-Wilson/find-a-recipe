import {useEffect, useState} from "react";

export default function RecipePage(props) {
  const [oneRecipe, setOneRecipe] = useState([]);
  const getRecipe = async () => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/${props.match.params.RecipePageId}/information?&apiKey=${process.env.REACT_APP_API_KEY}`);
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

  const isVegan = () => {
    if (oneRecipe.vegan === true ) {
      <h4>Vegan: True</h4>
    } 
  }

  const isVegetarian = () => {
    if (oneRecipe.vegetarian === true ) {
      <h4>Vegetarian: True</h4>
    }
  }

  const mapStep = oneRecipe.analyzedInstructions[0].steps[0].step;
  // const mapSteps = mapStep.steps
  console.log(mapStep)

  return (
    <div className="recipePage">
      <h1>{oneRecipe.title}</h1>
      {isVegan()}
      {isVegetarian()}
      <img src={oneRecipe.image} alt={oneRecipe.title} width="200px" />
      <p dangerouslySetInnerHTML={{__html: oneRecipe.summary}}></p>
      {/* {mapSteps.map((step)=> {
        <p>{step.step}</p>
      })} */}
    </div>
  );
};
