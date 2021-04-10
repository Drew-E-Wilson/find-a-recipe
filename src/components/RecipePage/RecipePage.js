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

  return (
    <div className="recipePage">
      <h1>{oneRecipe.title}</h1>
      <img src={oneRecipe.image} alt={oneRecipe.title} width="200px" />
      <p dangerouslySetInnerHTML={{__html: oneRecipe.summary}}></p>
    </div>
  );
};
