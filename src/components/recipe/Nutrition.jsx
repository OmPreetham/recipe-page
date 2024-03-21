import React from 'react'
export function Nutrition({}) {
  return (
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
  )
}
