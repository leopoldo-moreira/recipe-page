import './App.css';
import List from './component/List';
import OmeletteImage from './img/image-omelette.jpeg'

function App() {

  const preparationTime = [
    '*Total*: Approximately 10 minutes',
    '*Preparation*: 5 minutes',
    '*Cooking*: 5 minutes'
  ]

  const ingredients = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats,herbs'
  ]

  const instructions = [
    '*Beat the eggs*: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    '*Heat the pan*: Place a non-stick frying pan over medium heat and add butter or oil.',
    '*Cook the omelette*: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    '*Add fillings (optional)*: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    '*Fold and serve*: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    '*Enjoy*: Serve hot, with additional salt and pepper if needed.'
  ]


  return (
    <div className="App">            
      <img src={OmeletteImage} alt="an omellete"/>
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal.
        This classic omelette combines beaten eggs cooked to perfection,
        optionally filled with your choice of cheese, begetables, or meats.
      </p>

      <div className="timeSection">
        <h2>Preparation time</h2>
        <List
          arrayText={preparationTime}
          ordenedList={false}
        />
      </div>
      <h2>Ingredients</h2>
      <List
        arrayText={ingredients}
        ordenedList={false}
      />
      <hr/>
      <h2>Instructions</h2>
      <List
        arrayText={instructions}
        ordenedList={true}
      />
      <h2>Nutrition</h2>
      <p>The table below shows nutritional values per serving without the additional fillings.</p>
      <div className="nutritionTable">
        <p>Calories</p>
        <span>277kcal</span>        
      </div>
      <hr/>
      <div className="nutritionTable">
        <p>Carbs</p>
        <span>0g</span>        
      </div>
      <hr/>
      <div className="nutritionTable">
        <p>Protein</p>
        <span>20g</span>        
      </div>
      <hr/>
      <div className="nutritionTable">
        <p>Fat</p>
        <span>22g</span>        
      </div>      
    </div>
  );
}

export default App;
