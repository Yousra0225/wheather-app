import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa'; // pour pouvoir utiliser l'icône d'étoile isue de la bibliothèque React Icons

import '../style/boutonFavorite.css';
import '../style/selectionButton.css';

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
    
}

export default SelectCity;
