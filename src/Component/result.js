import React from 'react'
import Loader from './loader';
export default function Result(props) {
  // console.log("w",props.weatherData)
  const { WeatherData: data } = props
  // if (!data) {
  //   return null
  // }

  function ktoc(k) {
    return (k - 273.15).toFixed(2) + "c";
  }
  function getdatetime(stime) {
    const date = new Date(stime * 1000);
    return date.toString();
  }
  let showloader
  if (data === null) {
    // console.log("true")
    if (props.loading === true) {
      showloader = <Loader></Loader>;
    } else {
      showloader = (
        <div className=' container text-center mt-4'>
          <h3 className='rh3'>Please Select City</h3>
        </div>
      )
    }

  } else {
    showloader = (
      <div>
        <div className="transparent-card">
          <div className="card-body">
            <h5 className="card-title"> <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />city:-{data.name} ({ktoc(data.main.temp)})<span>
              {data.weather[0].description}
            </span>
            </h5>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th>feel like</th>
                        <td> ({ktoc(data.main.feels_like)})</td>
                      </tr>
                      <tr>
                        <th>min temp</th>
                        <td> ({ktoc(data.main.temp_min)})</td>
                      </tr>
                      <tr>
                        <th>max temp</th>
                        <td> ({ktoc(data.main.temp_max)})</td>
                      </tr>
                      <tr>
                        <th>sun set</th>
                        <td> ({getdatetime(data.sys.sunset)})</td>
                      </tr>
                      <tr>
                        <th>sun rise</th>
                        <td> ({getdatetime(data.sys.sunrise)})</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      {showloader}
    </div>
  )
}
