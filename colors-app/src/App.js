import React, { Component } from 'react';
import Pallette from './pallette'
import seedColors from "./seedColors"

function App() {
  return (
    <div>
     <Pallette {...seedColors[4]} />
    </div>
  );
}

export default App;
