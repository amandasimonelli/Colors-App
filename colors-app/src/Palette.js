import React, { Component } from 'react';
import ColorBox from './ColorBox';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ))
        return (
            <div>
                <div className='Palette'>
                    {/* <h1>Palettes</h1> */}
                    {/* Navbar goes here */}
                    <div className='Palette-colors'>{colorBoxes}</div>
                    {/* footer */}
                </div>
            </div>
        )
    }
}

export default Palette; 