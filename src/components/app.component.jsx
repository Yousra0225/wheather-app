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

  useEffect(() => {
    setFavoriteCityData(selectedFavoriteCityData);
  }, [favoriteCity]);

  /** Fonction pour gérer le changement de ville
   * @param {string} newCity - Nouvelle ville sélectionnée
   * @returns {void}
   */
  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
  }
  const handleFavorite = (city) => {
    setFavoriteCity(city);
  }

  return (
    <div className="container">
      <h1>Données Météorologiques pour la ville de {selectedCity}</h1>
      <SelectCity oneCity={handleCityChange} meteoDataByCity={meteoDataByCity}  favoriteCity={favoriteCity} onToggleFavorite={handleFavorite}/>
      <DisplayDataCity cityData={cityData} />
      <ComparisonData cityData={cityData} favoriteCityData={favoriteCityData}/>
      <DisplayGraphZone selectedCity={selectedCity} defaultDataType={defaultDataType} />
    </div>
  );

};

export default App;
