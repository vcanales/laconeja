import React from 'react';
import { Link } from 'react-router';
import '../../public/css/picture.css';

import ColorDisplay from './ColorDisplay';

class Picture extends React.Component {


	constructor(props) {
	    super(props);
	    this.state = {
	        colors: []
	    };
	}

    componentDidMount() {
    	var colorThief = new ColorThief();
    	var element = document.getElementById('conejaImage');
    	var self = this;
    	setTimeout(function() {
    		var colors 			= colorThief.getPalette(element,5);
    		var dominantColor	= colorThief.getColor(element,5);
    		self.setState(
    			{ 
    				colors: colors, 
    				dominantColor: dominantColor 
    			}
    		);

    	},500);
    	
    }

    render() {
    	let self = this;
        return (
        	<div id="coneja">
				<div id="imageContainer">
					<div id="image">
						<img id="conejaImage" src="/img/lita.png" alt="La Coneja" />
					</div>
					<div id="colors">
						{this.state.colors.map(function(color,i) {
							return (
								<ColorDisplay key={i} background={(i === 0) ? self.state.dominantColor : false} dominant={ self.state.colors[1] } colors={color} />
							);
						})}
					</div>
				</div>
				<div className="information colorize-font">
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
