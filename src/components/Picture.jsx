import React from 'react';
import { Link } from 'react-router';
import '../../public/css/picture.css';

class Picture extends React.Component {
    render() {
    	var colorThief = new ColorThief();
    	var colors = colorThief.getColor(document.getElementById('conejaImage'));
    	console.log(colors);
        return (
        	<div id="coneja">
				<img id="conejaImage" src="/img/lita.png" alt="La Coneja" />
				<div className="information">
					<div className="title">
						<h4>La Coneja</h4>
					</div>
					<div className="carrots">
						<img src="/img/carrot.svg" />
						<span className="carrot count">91</span>
					</div>
					<div className="date">
						08/12/2016
					</div>
				</div>
				
        	</div>
		);
    }
}

export default Picture;
