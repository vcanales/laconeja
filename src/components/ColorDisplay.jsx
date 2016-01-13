import React from 'react';

class ColorDisplay extends React.Component {

	constructor(props) {
	    super(props);
	}

    render() {
    	let color = 'rgb('+this.props.colors[0]+','+this.props.colors[1]+','+this.props.colors[2]+')';
    	let logoColor = 'rgba('+this.props.dominant[0]+','+this.props.dominant[1]+','+this.props.dominant[2]+',1)';
    	let style = {
    		backgroundColor: color
    	};
    	let elements = document.getElementsByClassName('colorize-font');

    	if (this.props.background != false)
    		document.body.style.backgroundColor = color;

    	document.getElementById('colorizeLogo').style.fill = logoColor;

    	for (let i = 0;i<elements.length;i++) {
    		elements[i].style.color = logoColor;
    	}

        return (
        	<span className="colorDisplay" style={style}>&nbsp;</span>
		);
    }
}

export default ColorDisplay;
