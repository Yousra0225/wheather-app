import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa'; // pour pouvoir utiliser l'icône d'étoile isue de la bibliothèque React Icons

import '../style/boutonFavorite.css';
import '../style/selectionButton.css';

// Création d'un composant qui va permettre de faire la sélection d'une ville
const SelectCity =({oneCity, meteoDataByCity, favoriteCity,onToggleFavorite}) =>{

    const [selectedCity, setSelectedCity] = useState('Lille');

    const handleChange =(event) =>{
        const selectedCity = event.target.value;
        setSelectedCity(selectedCity);
        oneCity(selectedCity);
    };

    const handleFavoriteClick = () => {
        onToggleFavorite(selectedCity);
    };
    
    // On retourne notre composantavec un select et un bouton de sélection 
    return (
        <div className="select-button">
            <select id="city" onChange={handleChange} defaultValue="Lille">
                {meteoDataByCity.map((cityData) => (
                    <option key={cityData.city} value={cityData.city}>
                        {cityData.city}
                    </option>
                ))}
            </select>
            <button className={`favorite-button ${favoriteCity  === selectedCity ? 'selected' : ''}`} 
            onClick={handleFavoriteClick}>
        <FaStar />
      </button>
        </div>
    );
}

export default SelectCity;
