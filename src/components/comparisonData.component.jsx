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
}
export default ComparisonData;
