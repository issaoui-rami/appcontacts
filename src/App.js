import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/interface/Header'
import Liste from './composants/contact/Liste'
import AddContact from './composants/contact/AddContact'
import APropos from './composants/pages/APropos'
import Erreur from './composants/pages/Erreur'
import { Provider } from './context'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              {/* <AddContact /> */}
              <Switch>
                <Route exact path="/apropos" component={APropos} />
                <Route exact path="/ajoute" component={AddContact} />
                <Route exact path="/" component={Liste} />
                <Route component={Erreur} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
