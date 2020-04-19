import React, { Component } from 'react';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    console.log(this.props)
    return (
     <div>
        <Header titluMeu={this.props.titluMeu} />

     </div>
    )
  }

}



export default App;


// React ne lasa sa scriem JSX = HTML + JS
// COmponent ne ofera acces la diferite functii de genul render();
