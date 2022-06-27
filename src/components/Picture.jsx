import React from 'react';
import { Link } from 'react-router';
import '../../public/css/picture.css';

import ColorDisplay from './ColorDisplay';

class Picture extends React.Component {


	constructor(props) {
	    super(props);
	    this.state = {
	        colors: [],
	        carrots: 0
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

    addCarrot(e) {
    	this.setState({ carrots: this.state.carrots+1 });
    	return false;
	}

    render() {
    	let self = this;
        return (
        	<div id="coneja">
				<div id="imageContainer">
					<div id="image">
						<img id="conejaImage" onDoubleClick={this.addCarrot.bind(this)} src="/img/lita.png" alt="La Coneja" />
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
					<button className="carrots colorize-font" onClick={this.addCarrot.bind(this)}>
						<img src="/img/carrot.svg" />
						<span className="carrot count">{this.state.carrots}</span>
					</button>
				</div>
				<div className="date colorize-font">
					08/12/2016
				</div>
        	</div>
		);
    }
}

export default Picture;
