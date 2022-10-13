import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./Palette.css";
import Navbar from './Navbar.js';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500, format:"hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({ level: level })
    }

    changeFormat(val){
        this.setState({ format: val });
    }

    render() {
        const { colors, emoji, paletteName } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} />
        ))
        return (
            <div>
                <div className='Palette'>
                    {/* Navigation */}
                    <Navbar 
                        level={level} 
                        changeLevel={this.changeLevel} 
                        handleChange={this.changeFormat} 
                    />
                    {/* Body */}
                    <div className='Palette-colors'>{colorBoxes}</div>
                    {/* Footer */}
                    <footer className="Palette-footer">
                        <span>Palette Name: {paletteName}</span>
                        <span className='emoji'>{emoji}</span>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Palette; 