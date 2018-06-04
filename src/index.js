
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rochester from './images/rochester.jpeg';
import jersey from './images/jerseyCity.jpeg';
import miami from './images/miami.jpg';
import arrow from './images/arrow.png';
import houston from './images/houston.jpg';
import stPete from './images/stPete.jpg';

var blue ={
    color: 'blue',
    border: '3px solid white',
    'background-image': './images/rochester.jpeg'
};

var roc ={
    title: "Rochester",
    image: rochester
}
class Gallery extends React.Component {
    constructor(){
        super();
        this.state ={
            page:0,
            cities: [rochester, jersey, miami, houston, stPete],
            titles: ['Rochester', 'Jersey City', 'Miami', 'Houston', 'St. Petersburg'],
    }
}

    left(){
        var arr = this.state.cities;
        var taken = arr.pop();
        arr.unshift(taken);
        var newTitles = this.state.titles;
        var pulledTitle = newTitles.pop();
        newTitles.unshift(pulledTitle);
        this.setState({cities: arr, titles: newTitles});
    }
    right(){
        var arr = this.state.cities;
        var taken = arr.shift();
        arr.push(taken);
        var newTitles = this.state.titles;
        var pulledTitle = newTitles.shift();
        newTitles.push(pulledTitle);
        this.setState({cities: arr, titles: newTitles});
    
    }

    render(){     
        return (
            <div className="container">
                <img src={arrow} className="arrow" onClick={this.left.bind(this)} />
                <div className="gallery" style={blue}>
                    <h1>{this.state.titles[0]}</h1>
                    <img src={this.state.cities[0]} alt="city name" className="cityPic" />
                </div>
                <img src={arrow} className="rightArrow" onClick={this.right.bind(this)} />
            </div>
        )
           
    }
}

ReactDOM.render(
   < Gallery />,
   document.getElementById('gallery')
);