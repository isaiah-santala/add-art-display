import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      src: '',
      store: '',
      orientation: ''
    }
  }

  handleChange({name, value}) {
    this.setState({
      [name]: value
    })
  }

  getDimensions(orientation) {
    if (orientation === 'vertical') return [4, 3]
    else if (orientation === 'horizontal') return [3, 4]
    else return [1, 1]
  }

  handleSubmit() {
    const {src, store, orientation} = this.state
    const [height, width] = this.getDimensions(orientation)
    console.log({src, store, height, width})
  }

  render() {
    const {src, store} = this.state
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.handleSubmit()
      }}>
        <label htmlFor="src">Url to image</label>
        <input 
          required
          name="src" 
          id="src" 
          value={src} 
          onChange={({target}) => this.handleChange(target)}
        ></input>
        <label htmlFor="orientation">Image orientation</label>
        <select required name="orientation" id="orientation" onChange={({ target }) => this.handleChange(target)}>
          <option disabled selected value> -- select an option -- </option>
          <option>horizontal</option>
          <option>vertical</option>
          <option>square</option>
        </select>
        <label htmlFor="store">Url to store</label>
        <input
          required
          name="store"
          id="store"
          value={store}
          onChange={({ target }) => this.handleChange(target)}
        ></input>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default App