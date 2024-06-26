const Recipe = () => {
  return (
    <div className="recipe-section">
      <section>
        <img src="images/image-omelette.jpeg" alt="" />
      </section>
      <section>
        <header>
          <h1>Simple Omelette Recipe</h1>
        </header>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <article>
          <h4>Preparation time</h4>
          <ul>
            <li>
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li>
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </article>
      </section>
      <section>
        <h3>Ingredients</h3>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </section>
      <div class="line"></div>
      <section>
        <h3>Instructions</h3>
        <ol>
          <li>
            <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </li>
          <li>
            <strong>Heat the pan</strong>: Place a non-stick frying pan over
            medium heat and add butter or oil.
          </li>
          <li>
            <strong>Cook the omelette</strong>: Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li>
            <strong>Add fillings (optional)</strong>: When the eggs begin to set
            at the edges but are still slightly runny in the middle, sprinkle
            your chosen fillings over one half of the omelette.
          </li>
          <li>
            <strong>Fold and serve</strong>: As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li>
            <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
      </section>
      <div class="line"></div>
      <section>
        <h3>Nutrition</h3>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <thead>
            <tr>
              <th>Calories</th>
              <th>Carbs</th>
              <th>Protein</th>
              <th>Fat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>277kcal</td>
              <td>0g</td>
              <td>20g</td>
              <td>22g</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
export default Recipe
