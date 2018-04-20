import React from 'react';
import './Picture.css';
import carrot from './carrot.svg';

import ColorDisplay from './ColorDisplay';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      carrots: 0,
    };

    this.addCarrot = this.addCarrot.bind(this);
  }

  componentDidMount() {
    const element = document.getElementById('conejaImage');
    const self = this;
    setTimeout(() => {
      const colorThief = new window.ColorThief();
      const colors = colorThief.getPalette(element, 5);
      const dominantColor = colorThief.getColor(element, 5);
      self.setState({
        colors,
        dominantColor,
      });
    }, 500);
  }

  addCarrot() {
    return this.setState({ carrots: this.state.carrots + 1 });
  }

  render() {
    const self = this;
    return (
      <div id="coneja">
        <div id="imageContainer">
          <div id="image">
            <img
              id="conejaImage"
              onDoubleClick={this.addCarrot}
              src="/img/lita.png"
              alt="La Coneja"
            />
          </div>
          <div id="colors">
            {this.state.colors.map((color, i) => (
              <ColorDisplay
                key={color}
                background={i === 0 ? self.state.dominantColor : false}
                dominant={self.state.colors[1]}
                colors={color}
              />
            ))}
          </div>
        </div>
        <div className="information colorize-font">
          <div className="title">
            <h4>La Coneja</h4>
          </div>
          <button className="carrots colorize-font" onClick={this.addCarrot}>
            <img src={carrot} alt="Like!" />
            <span className="carrot count">{this.state.carrots}</span>
          </button>
        </div>
        <div className="date colorize-font">08/12/2016</div>
      </div>
    );
  }
}

export default Picture;
