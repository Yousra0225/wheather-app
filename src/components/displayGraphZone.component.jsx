import React, { useState } from 'react';
import DisplayGraph from './displayGraph.component.jsx';
import meteoDataByCity from '../data/meteo-data.js';

// Fonction DisplayGraphZone qui prend en entrée les données de météo pour une ville et le type de données par défaut
// Elle renvoie un composant <DisplayGraphZone> qui affiche un bouton pour afficher ou cacher le graphique, 
// un bouton pour changer le type de données et un graphique affichant les données de météo pour la ville sélectionnée
const DisplayGraphZone = ({ selectedCity, defaultDataType, favoriteCity }) => {
  const [graphVisible, setGraphVisible] = useState(false);
  const [dataType, setDataType] = useState(defaultDataType);

  const [changeDataClicked, setChangeDataClicked] = useState(false);

  const toggleGraph = () => {
    setGraphVisible(!graphVisible);
  }

  // handleDataTypeChange est appelé lorsque l'utilisateur clique sur un bouton de type de données
  const handleDataTypeChange = (newDataType) => {
    setDataType(newDataType);
    setChangeDataClicked(true); 
  }
  
  return (
    <div>
      <button onClick={toggleGraph}>{graphVisible ? 'Cacher' : 'Afficher'}</button>
      {graphVisible && (  
        <div>
          <button className="button primary" onClick={() => handleDataTypeChange('temp_min')}>Température Minimale</button>
          <button className="button primary" onClick={() => handleDataTypeChange('temp_max')}>Température Maximale</button>
          <button className="button primary" onClick={() => handleDataTypeChange('pluviometrie')}>Précipitations</button>
          <button className="button primary" onClick={() => handleDataTypeChange('jours-gel')}>Jours de gel</button>
          <button className="button primary" onClick={() => handleDataTypeChange('ensoleillement')}>Ensoleillement</button>

          <DisplayGraph selectedCity={selectedCity} dataType={dataType} changeDataClicked={changeDataClicked} dataFavoriteCity={meteoDataByCity.find(city => city.city === 'Lille')?.data} />
        </div>
      )}
    </div>
  );
}

export default DisplayGraphZone;
