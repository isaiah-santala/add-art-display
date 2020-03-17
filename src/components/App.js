import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      src: '',
      store: '',
      orientation: '',
      progress: 0
    }
  }

  checkProgress() {
    const {store, src, orientation} = this.state
    let progress = 0

    if (store !== '') progress = progress + 34
    if (src !== '') progress = progress + 34
    if (orientation !== '') progress = progress + 34

    this.setState({ progress })
  }

  handleChange({name, value}) {
    this.setState({
      [name]: value
    }, () => this.checkProgress())
  }

  getDimensions(orientation) {
    if (orientation === 'vertical') return [4, 3]
    else if (orientation === 'horizontal') return [3, 4]
    else return [1, 1]
  }

  handleSubmit() {
    const {src, store, orientation} = this.state
    const [height, width] = this.getDimensions(orientation)
    axios.post('/upload/image', {src, store, height, width})
  }

  render() {
    const {src, store, progress} = this.state
    return (
      <div className="section">
        <div className="container">
          <h1 className="title is-1">Upload An Image</h1>
          <progress className={"progress" + (progress === 102 ? " is-primary" : " is-danger")} value={progress} max="100" />
          <br />
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              this.handleSubmit()
          }}>
            <div className="field">
              <label className="label is-large" htmlFor="src">Url to image</label>
              <div className="control">
                <input 
                  className="input is-medium"
                  placeholder="Url to your image"
                  required
                  name="src" 
                  id="src" 
                  value={src} 
                  onChange={({target}) => this.handleChange(target)}
                ></input>
              </div>
            </div>
            <br />
            <div className="field">
              <div className="control">
                <label htmlFor="orientation" className="label is-large">Image orientation</label>
                <div className="select is-medium">
                  <select required name="orientation" defaultValue={'DEFAULT'} id="orientation" onChange={({ target }) => this.handleChange(target)}>
                    <option disabled value="DEFAULT">--- select one ---</option>
                    <option>horizontal</option>
                    <option>vertical</option>
                    <option>square</option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            <div className="field">
              <label htmlFor="store" className="label is-large">Url to store</label>
              <div className="control">
                <input
                  className="input is-medium"
                  placeholder="Url to your shop"
                  required
                  name="store"
                  id="store"
                  value={store}
                  onChange={({ target }) => this.handleChange(target)}
                ></input>
              </div>
              <br />
            </div>
            <button type="submit" className="button is-primary is-medium">submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App