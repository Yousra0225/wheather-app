import React, { useState,useEffect} from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'; 
import meteoDataByCity from "../data/meteo-data.js";
import SelectCity from "./selectCity.component.jsx";

const DisplayGraph = ({ selectedCity, dataType, changeDataClicked, dataFavoriteCity, favoriteCity }) => {

  //const lilleData = meteoDataByCity.find(city => city.city === 'Lille').data;
  const selectedCityData = meteoDataByCity.find(city => city.city === selectedCity).data;


  /* Construction des donnees pour la ville selectionner et la ville favorite*/
  const buildData = (dataType) => {
    let data;
    let dataForFavoriteCity ;
    switch(dataType) {

      case 'temp_min':
        data = selectedCityData.map(month => month.temp_min);
        dataForFavoriteCity = dataFavoriteCity.map(month => month.temp_min);
        break;

      case 'temp_max':
        data = selectedCityData.map(month => month.temp_max);
        dataForFavoriteCity = dataFavoriteCity.map(month => month.temp_max);
        break;

        case 'pluviometrie':
          data = selectedCityData.map(month => month.pluviometrie);
          dataForFavoriteCity = dataFavoriteCity.map(month => month.pluviometrie);
          break;

        case 'ensoleillement':
          data = selectedCityData.map(month => month.ensoleillement);
          dataForFavoriteCity = dataFavoriteCity.map(month => month.ensoleillement);

          break;

        case 'jours-gel':
          data = selectedCityData.map(month => month.jours_gel);
          dataForFavoriteCity = dataFavoriteCity.map(month => month.jours_gel);
          break;

        default:
        data = [];
    }
    return {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      datasets : [ 
        {

          label:   `${getLabel(dataType)} à ${selectedCity}`,
          data: data,
          backgroundColor: '#2a6d72',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: `${getLabel(dataType)} à ville favorite`,
          data: dataForFavoriteCity,
          backgroundColor: '#ff6384',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
    ]
  };
};
  const [chartData, setChartData] = useState(buildData(dataType));
    
  /* Mettre à jour le graphique */
  useEffect(() => {
    if (changeDataClicked || chartData === null) {
      setChartData(buildData(dataType));
    }
  }, [dataType, changeDataClicked,selectedCity,dataFavoriteCity, favoriteCity]);



  /**
   * spécifier que l'axe y du graphique doit démarrer à zéro,  ainsi la représentation des données.
   */
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
  };

  /**
   * Renvoie l'étiquette appropriée en fonction du type de données.
   * @param {String} dataType -type de donnees
   * @returns {string} etiquette appropriée à ce type
   */
  const getLabel = (dataType, selectedCity) => {
  switch(dataType) {
    case 'temp_min':
      return 'Température Minimale (°C)';
    case 'temp_max':
      return 'Température Maximale (°C)';
    case 'pluviometrie':
      return 'Précipitations (mm)';
    case 'ensoleillement':
      return 'Ensoleillement (heures)' ;
    case 'jours-gel':
      return 'Jours de gel';
    default:
      return '';
  }
};
export default DisplayGraph;
