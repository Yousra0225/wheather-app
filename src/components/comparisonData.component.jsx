import React from 'react';

const ComparisonData = ({ cityData, favoriteCityData }) => {
  if (!cityData || !favoriteCityData) {
    return null; 
  }

  // Fonction pour calculer la moyenne des données d'une ville
  const calculateAverage = (data) => {
    const avg = {
      temp_min: 0,
      temp_max: 0,
      pluviometrie: 0,
      ensoleillement: 0,
      jours_gel: 0
    };

    data.forEach(monthData => {
      avg.temp_min += monthData.temp_min;
      avg.temp_max += monthData.temp_max;
      avg.pluviometrie += monthData.pluviometrie;
      avg.ensoleillement += monthData.ensoleillement;
      avg.jours_gel += monthData.jours_gel;
    });

    for (let key in avg) {
      avg[key] /= data.length;
    }

    return avg;
  };

  /* Calculer les moyennes pour chaque ville*/
  const avgCity = calculateAverage(cityData.data);
  const avgFavoriteCity = calculateAverage(favoriteCityData.data);

  return (
    <div>
      <h2>Comparaison des Données Météorologiques</h2>
      <table>
        <thead>
          <tr>
            <th>Ville</th>
            <th>Température Min (°C)</th>
            <th>Température Max (°C)</th>
            <th>Précipitations (mm)</th>
            <th>Ensoleillement (heures)</th>
            <th>Jours de Gel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cityData.city}</td>
            <td>{avgCity.temp_min.toFixed(1)}</td>
            <td>{avgCity.temp_max.toFixed(1)}</td>
            <td>{avgCity.pluviometrie.toFixed(1)}</td>
            <td>{avgCity.ensoleillement.toFixed(1)}</td>
            <td>{avgCity.jours_gel.toFixed(1)}</td>
          </tr>
          <tr>
            <td>{favoriteCityData.city}</td>
            <td>{avgFavoriteCity.temp_min.toFixed(1)}</td>
            <td>{avgFavoriteCity.temp_max.toFixed(1)}</td>
            <td>{avgFavoriteCity.pluviometrie.toFixed(1)}</td>
            <td>{avgFavoriteCity.ensoleillement.toFixed(1)}</td>
            <td>{avgFavoriteCity.jours_gel.toFixed(1)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ComparisonData;
