import React, {Component} from 'react';
import 'whatwg-fetch'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {body:'ttt'};
        let that = this;
        fetch('http://www.baidu.com',{mode: "no-cors"})
            .then(function(response) {
                console.log(response);
                return response.body;
            }).then(function(body) {
             that.state.body = body
        }).catch(function(ex) {
            console.log(ex);
        })
    }
/*    constructor (props) {
        super(props);
        alert("in");
        fetch('http://localhost:8080/test')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                    alert("Bad response from server")
                }
                return response.json();
            })
            .then(function(stories) {
                console.log(stories);
            });
    }*/

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>{this.state.body}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
