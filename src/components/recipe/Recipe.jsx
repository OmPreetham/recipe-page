import { HeroImage } from './HeroImage'
import { Heading } from './Heading'
import { Nutrition } from './Nutrition'
import { Instructions } from './Instructions'
import { Ingredients } from './Ingredients'
const Recipe = () => {
  return (
    <main>
      <HeroImage />
      <Heading />
      <Ingredients />
      <div class="line"></div>
      <Instructions />
      <div class="line"></div>
      <Nutrition />
    </main>
  )
}
export default Recipe
