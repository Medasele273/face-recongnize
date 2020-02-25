import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/SignIn/Signin';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Registration from './components/Registration/Registration';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "signin",

    }
  }

  onSignInButtonClick = () => {
    this.setState({ route: 'home' })

  }

  onSignOutClick = () => {
    this.setState({ route: 'signin' })
  }

  onRegisterClick = () => {
    this.setState({ register: "register" })
  }

  render() {
    if (this.state.route === "signin") {
      return (
        <div className="App">
          <Particles className="particles"
            params={particlesOptions}
          />
          <Logo />
          <Signin onRegisterClick={this.onRegisterClick} onSignInButtonClick={this.onSignInButtonClick} />
        </div>
      )
    }
    else if (this.state.register === "register") {
      return (
        <div>
          <Registration />
        </div>
      )

    } else {
      return (
        <div className="App">
          <Particles className="particles"
            params={particlesOptions}
          />
          <Navigation onSignOutClick={this.onSignOutClick} />
          <Logo />
          <Rank />
          <ImageLinkForm />
        </div>
      )
    }

  }


}

export default App;
