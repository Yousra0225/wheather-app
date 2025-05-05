import React, { useState } from 'react';
import DisplayGraph from './displayGraph.component.jsx';
import meteoDataByCity from '../data/meteo-data.js';

const DisplayGraphZone = ({ selectedCity, defaultDataType, favoriteCity }) => {
  const [graphVisible, setGraphVisible] = useState(false);
  const [dataType, setDataType] = useState(defaultDataType);

  const [changeDataClicked, setChangeDataClicked] = useState(false);

  const toggleGraph = () => {
    setGraphVisible(!graphVisible);
  }

  const handleDataTypeChange = (newDataType) => {
    setDataType(newDataType);
    setChangeDataClicked(true); 
  }
}

export default DisplayGraphZone;
