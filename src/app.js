import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './style.scss'


import Home from './components/Home'



class App extends React.Component {
  render(){
    return (
      <Router>
        <main>

          <Switch>
            <Route path="/" component={Home} />


          </Switch>
        </main>
      </Router>


    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
