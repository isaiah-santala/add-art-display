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
      <div className="container">
        <div className="tile is-primary notification is-4">
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              this.handleSubmit()
          }}>
            <div className="field">
              <label className="label" htmlFor="src">Url to image</label>
              <div className="control">
                <input 
                  className="input"
                  placeholder="Url to your image"
                  required
                  name="src" 
                  id="src" 
                  value={src} 
                  onChange={({target}) => this.handleChange(target)}
                ></input>
              </div>
            </div>

            <div className="select is-multiple">
              <label htmlFor="orientation" className="label">Image orientation</label>
              <select multiple size="3" required name="orientation" id="orientation" onChange={({ target }) => this.handleChange(target)}>
                <option>horizontal</option>
                <option>vertical</option>
                <option>square</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="store" className="label">Url to store</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Url to your shop"
                  required
                  name="store"
                  id="store"
                  value={store}
                  onChange={({ target }) => this.handleChange(target)}
                ></input>
              </div>

            </div>
            <button type="submit" className="button is-primary">submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App