import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class NameStyler extends Component {
  // This is the class that implements the render prop
  // and "extends" the original component
  
  state = { 
    name: 'Sandy',
  }

  calculateStyle = (color) => {
    return { 
      color: color,
      fontWeight: 'bold',
      textDecoration: 'underline',
      fontStyle: 'italic'
    };
  }

 
  render() {
    return (
      <div>
        {this.props.children(this.state.name, this.calculateStyle)}
      </div>
    );
  }
}


/*
 * The following two classes use the "render prop" structure to
 * take advantage of the shared source in NameStyler by create a
 * child of the NameStyler component that is a render function which
 * gets handed properties by the NameStyler.
 * 
 * This has the advantage of being dynamic composition rather than
 * static composition as in the case of a Higher Order Component.
 * It also makes it very clear where properties are coming from, and
 * keeps from having naming collisions.
 */
class HelloComponent extends Component {
  render() {
    return (
      <div>
        <NameStyler>
          {(name, calculateStyle) => (
            <div style={calculateStyle('red')}>Hello, { name }</div>
          )}
        </NameStyler>
      </div>
    )
  }
}

class HowsItGoingComponent extends Component {
  render() {
    return (
      <div>
        <NameStyler>
          {(name, calculateStyle) => (
            <div style={calculateStyle('blue')}>How's it going, { name }?</div>
          )}
        </NameStyler>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Using Render Props</h1>
        </header>
        <p className="App-intro">
          <HelloComponent />
          <HowsItGoingComponent />
        </p>
      </div>
    );
  }
}

export default App;
