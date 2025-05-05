import React, { useState, useEffect } from 'react';
import DisplayDataCity from './displayDataCity.component.jsx';
import meteoDataByCity from '../data/meteo-data.js';
import DisplayGraph from './displayGraph.component.jsx';
import SelectCity from './selectCity.component.jsx';
import DisplayGraphZone from './displayGraphZone.component.jsx';
import ComparisonData from './comparisonData.component.jsx';


const App = () => {

  const defaultCity = 'Lille';
  const defaultDataType = 'pluviometrie';
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [favoriteCity, setFavoriteCity] = useState(defaultCity);
  const [cityData, setCityData] = useState(null);
  const [favoriteCityData, setFavoriteCityData] = useState(null);

  const selectedCityData = meteoDataByCity.find(item => item.city === selectedCity);
  const selectedFavoriteCityData = meteoDataByCity.find(item => item.city === favoriteCity);
  
  // Mettre à jour  les données de la ville sélectionnée 
  useEffect(() => {
    setCityData(selectedCityData);
  }, [selectedCity]);
};

export default App;
