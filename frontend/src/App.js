import React, { Component } from 'react';
import Header from './Components/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myName: "Dragos"
    }
  }
  
  render() {
    return (
     <div>  
      <Header />
     </div>
    )
  }

}

export default App;




// blablabla CONNECT(
//   isAuth blabla
// )(APP)


// React ne lasa sa scriem JSX = HTML + JS
// COmponent ne ofera acces la diferite functii de genul render();
