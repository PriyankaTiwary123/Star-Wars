/**
 * main component which loads dropdown and scatterPlot components.
 * 
 * @component
 * @example
 * return (
 *   <ScatterChart>
 * <SimpleSelect></SimpleSelect>
 * <ScatterPlot></ScatterPlot>
 * )
 */
import React from 'react';
import ScatterPlot from './ScatterChart';
import SimpleSelect from './DropDown'
import { StarWarsContextProvider } from '../context/CreateContext';
import logo from '../assets/star_wars_logo.png';

import './StarWarsStyle.css';

export const StarWarComponent = (props) => {

    return (
        <div className="main-container">
            <div className="card-heading col-sm-12 col-xs-12 col-md-12">
                <div className="logo">
                    <img src={logo} width="120px" height="120px" alt="Star Wars"/>
                    <p className="app-description">Graphical representation of different star wars species selected from dropdown</p>
                </div>
            </div>
            <StarWarsContextProvider>
            <div className='select-option'>
                <label className='dropdown-header'>Pick a Species</label>
                
                    <SimpleSelect></SimpleSelect>
                    </div>
                    <ScatterPlot></ScatterPlot>
                </StarWarsContextProvider>
            
        </div>

    )

}