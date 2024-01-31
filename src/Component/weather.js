import React, { Component } from 'react'
import Search from './search'
import Result from './result'
import axios from 'axios'
import Recent from './Recent'




export default class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: "",
      lon: "",
      WeatherData: null,
      city: "",
      loading: false,
      isSubmit: false,
      resent: []

    }
  }

  searchHandalar = (e) => {
    e.preventDefault();
    if (!this.state.lat || !this.state.lon) {
      return;

    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lo
n=${this.state.lon}&appid=b1e66862402ec349b854554465ed884a`)
      .then((result) => {
        console.log(result);
        this.setState({
          city: result.data.name,
          WeatherData: result.data,
        })

      })
      .catch((error) => {
        console.log(error);
      })


  }
  changeHandlar = (event) => {
    // console.log(event);
    const name = event.target.name;
    // console.log(name);
    if (name === "city") {
      this.setState({ city: event.target.value })


    } else if (name === "lat") {
      this.setState({ lat: event.target.value })

    } else if (name === "lon") {
      this.setState({ lon: event.target.value })
    }
  }
  locationHandler = () => {
    // e.preventDefault();
    this.setState({
      lat: "",
      lon: "",
      WeatherData: null,
      city: null,
      loading: true,


    })
    console.log(this.state.loading)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log(res);
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude
            })
            const { latitude: lat, longitude: lon } = res.coords;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=
${lon}&appid=b1e66862402ec349b854554465ed884a`)
              .then((result) => {
                console.log(result);
                this.setState({
                  city: result.data.name,
                  WeatherData: result.data,
                })

              })
              .catch((error) => {
                console.log(error);
              })
          }, 1000)

        }, (error) => {
          console.log(error);
        }
      )
    } else {
      console.log("location not found");

    }
  }
  cityHandler = (e) => {
    e.preventDefault();
    alert("sdfghjkl")
    if (!this.state.city) {
      return;
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=b1e66862402ec349b854554465ed884a`).then((res) => {
      console.log("city", res)
      this.setState({
        city: res.data.name,
        WeatherData: res.data,
        lat: res.data.coord.lat,
        lon: res.data.coord.lon,
        isSubmit: true,
      },
        () => {
          this.addDatatorecent();
        }
      )
    }).catch((err) => {
      console.log(err);
    })
    addDatatorecent = () => {
      let resent = this.state.resent;
      resent.push({
        lat: this.state.lat,
        lon: this.state.lon,
        city: this.state.city
      })
      this.setState({ resent }, () => {


      })
    }
    researchHandler = (lat, lon) => {

      this.setState({ lat, lon }, () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=b1e66862402ec349b854554465ed884a`).then((response) => {
          console.log('New ', response);
          this.setState({
            city: response.data.name,
            WeatherData: response.data,
            isSubmit: true,
          }),()=>{
            this.addDatatorecent();
          }
        }).catch((err) => {
          console.log(err);
        })
      }, 2000)
    }
  }

  render() {
    return (
      <div className='search-bgimg'>
        

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mt-5'>
              <Search lat={this.state.lat} lon={this.state.lon} city={this.state.city} change={this.changeHandlar} getloction={this.locationHandler}
                Search={this.searchHandalar} citysearch={this.changeHandlar}
              ></Search>
            </div>

            <div className='col-lg-6 mt-5'>
              <Result WeatherData={this.state.WeatherData} city={this.state.city} lat={this.state.lat} lon={this.state.lon} isSubmit={this.state.isSubmit} />
            </div>
          </div>
        </div>

        <div className='container mt-5'>
          <div className='col-lg-12'>
            {/* <Recent resent={this.state.resent} ></Recent> */}
          </div>
        </div>
      </div>

    )
  }
}
