import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><img src="./accet/img/weather-app.png" alt=""  className='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="weather">weather</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="Loader">Loader</Link> */}
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="recent">recent</Link> */}
        </li>
        
        <li className="nav-item">
          {/* <Link className="nav-link disabled" to="result" tabIndex="-1" aria-disabled="true">result</Link> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}
