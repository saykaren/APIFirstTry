// import React, { Component } from 'react';
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { callbackify } from 'util';
import { async } from 'q';


const App= () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    callBackendAPI()
      .then(res => setState(res.express))
      .catch(err => console.log(err));
  });

  const callBackendAPI = async () =>{
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of {state}
        <p className="App-intro">{state}</p>
      </div>
  );
  
} 

// class App extends Component {
// state = {
//     data: null
//   };

//   componentDidMount() {
//       // Call our fetch function below once the component mounts
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     return body;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         // Render the newly fetched data inside of this.state.data 
//         <p className="App-intro">{this.state.data}</p>
//       </div>
//     );
//   }
// }

export default App;