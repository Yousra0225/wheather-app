import React from 'react';
import SelectCity from './selectCity.component.jsx';
import '../style/displayDataCity.css';  

const DisplayDataCity =({cityData}) => {
    if (!cityData) {
      return null;
    }
    return (
      <div>
        <h2>{cityData.city}</h2>
        <table>
          <thead>
            <tr>
              <th>Mois</th>
              <th>Température Min (°C)</th>
              <th>Température Max (°C)</th>
              <th>Précipitations (mm)</th>
              <th>Ensoleillement (heures)</th>
              <th>Jours de gel</th>
            </tr>
          </thead>
          <tbody>
            {cityData.data.map(monthData => (
              <tr key={monthData.pour}>
                <td>{monthData.pour}</td>
                <td>{monthData.temp_min}</td>
                <td>{monthData.temp_max}</td>
                <td>{monthData.pluviometrie}</td>
                <td>{monthData.ensoleillement}</td>
                <td>{monthData.jours_gel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default DisplayDataCity ; 