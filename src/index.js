import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import InputList from './Components/InputList'

class App extends React.Component {

    render() {
        return (
            <div>

                <h1 className="center-align">
                    Contact List
                </h1>

                <InputList/>

            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'))
