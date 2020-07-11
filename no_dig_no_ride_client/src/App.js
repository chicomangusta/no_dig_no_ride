import React, { Component } from 'react';
import Bikes from './components/Bikes.js'

class App extends Component {


  state = {
    bikes: [],
    formInputs: {
      brand: '',
      name: '',
      size: '',
      type: '',
      suspension: '',
      shox: '',
      wheel_size: '',
      rear_der: '',
      dropper: '',
      year: ''
    }
  }

  componentDidMount() {
    this.getBikes()
  }

  getBikes = () => {
    fetch('http://localhost:3001/bikes')
      .then(response => response.json())
      .then(json => this.setState({bikes: json}))
      .catch(error => console.error(error))
  }


  handleChange = (event) => {
    const updateInput = Object.assign(this.state.formInputs, {
      [event.target.id]: event.target.value
    })
    this.setState(updateInput)
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/bikes', {
        body: JSON.stringify(this.state.formInputs),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(createdBike => {
        return createdBike.json()
      })

      .then(jsonedBike => {
        // reset the form
        // add notice to notices
        this.setState({
          formInputs: {
              brand: '',
              name: '',
              size: '',
              type: '',
              suspension: '',
              shox: '',
              wheel_size: '',
              rear_der: '',
              dropper: '',
              year: ''

          },
          bikes: [jsonedBike, ...this.state.bikes]
        })
      })
      .catch(err => console.log(err))
  }





  render() {
    return (
      <div className="App">
        <div className="container">
          <main>
            
            <h1>NO DIG NO RIDE</h1>
            <h6>BIKE SHOP</h6>
            <Bikes bikes={this.state.bikes} />
          </main>
          <nav>
            
            <h4>BIKE BUILDER</h4>
            
            <form onSubmit={this.handleSubmit}>
              
              
              <label htmlFor="brand">BRANDS:</label>
              <select name="brand" id="brand" type="select">
                <option value={this.state.formInputs.brand} onChange={this.handleChange}>Intense</option>
                <option value={this.state.formInputs.brand} onChange={this.handleChange}>Cannondale</option>
                <option value={this.state.formInputs.brand} onChange={this.handleChange}>Evil</option>
                <option value={this.state.formInputs.brand} onChange={this.handleChange}>Transition</option>
                <option value={this.state.formInputs.brand} onChange={this.handleChange}>Specialized</option>
              </select>

          
              <label htmlFor="name">BIKE:</label>
              <select name="name" id="name" type="select">
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Wreckoning</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Following</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Offering</option> 
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Recluse</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Tracer</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>M29</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Patrol</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Sentinel</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Habit</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Jekyll</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Stumpi</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Demo</option>
                <option value={this.state.formInputs.name} onChange={this.handleChange}>Enduro</option>
              </select>

               <label htmlFor="size">SIZES:</label>
              <select name="name" id="size" type="select">
                <option value={this.state.formInputs.size} onChange={this.handleChange}>SMALL</option>
                <option value={this.state.formInputs.size} onChange={this.handleChange}>MEDIUM</option>
                <option value={this.state.formInputs.size} onChange={this.handleChange}>LARGE</option>
                <option value={this.state.formInputs.size} onChange={this.handleChange}>XL</option>
              </select>
              
              <label htmlFor="suspension">SUSP:</label>
              <select name="suspension" id="suspension" type="select">
                <option value={this.state.formInputs.suspension} onChange={this.handleChange}>FOX 36</option>
                <option value={this.state.formInputs.suspension} onChange={this.handleChange}>FOX 38</option>
                <option value={this.state.formInputs.suspension} onChange={this.handleChange}>LIRYK</option>
                <option value={this.state.formInputs.suspension} onChange={this.handleChange}>ZEB</option>
              </select>
              
              <label htmlFor="shox">SHOX:</label>
              <select name="shox" id="shox" type="select">
                <option value={this.state.formInputs.shox} onChange={this.handleChange}>DHX2</option>
                <option value={this.state.formInputs.shox} onChange={this.handleChange}>VIVD COIL</option>
                <option value={this.state.formInputs.shox} onChange={this.handleChange}>PUSH</option>
                <option value={this.state.formInputs.shox} onChange={this.handleChange}>TOPAZ</option>
              </select>

              <label htmlFor="wheel_size">WHEELS:</label>
              <select name="wheel_size" id="wheel_size" type="select">
                <option value={this.state.formInputs.wheel_size} onChange={this.handleChange}>ENVE</option>
                <option value={this.state.formInputs.wheel_size} onChange={this.handleChange}>HOPE</option>
                <option value={this.state.formInputs.wheel_size} onChange={this.handleChange}>i9</option>
                <option value={this.state.formInputs.wheel_size} onChange={this.handleChange}>SPANK</option>
              </select>

              <label htmlFor="rear_der">Derailleur:</label>
              <select name="rear_der" id="rear_der" type="select">
                <option value={this.state.formInputs.rear_der} onChange={this.handleChange}>GX EAGLE</option>
                <option value={this.state.formInputs.rear_der} onChange={this.handleChange}>BOX ONE</option>
                <option value={this.state.formInputs.rear_der} onChange={this.handleChange}>XT</option>
                <option value={this.state.formInputs.rear_der} onChange={this.handleChange}>XTR</option>
              </select>

              <label htmlFor="dropper">DROPPER:</label>
              <select name="dropper" id="dropper" type="select">
                <option value={this.state.formInputs.dropper} onChange={this.handleChange}>TRANFER</option>
                <option value={this.state.formInputs.dropper} onChange={this.handleChange}>ONE UP</option>
                <option value={this.state.formInputs.dropper} onChange={this.handleChange}>AXS</option>
                <option value={this.state.formInputs.dropper} onChange={this.handleChange}>KS</option>
              </select>

              <label htmlFor="year">YEAR:</label>
              <select name="year" id="year" type="select">
                <option value={this.state.formInputs.year} onChange={this.handleChange}>2018</option>
                <option value={this.state.formInputs.year} onChange={this.handleChange}>2019</option>
                <option value={this.state.formInputs.year} onChange={this.handleChange}>2020</option>
                <option value={this.state.formInputs.year} onChange={this.handleChange}>2021</option>
              </select>
              
              <input type="submit" className="submit" />
              
            </form>
          </nav>

          <aside></aside>
        </div>
        <footer>Created by Andre Torres 2020 </footer>
      </div>
    );
  }
}

export default App;