import React from 'react'


export default function Search(props) {
    return (
        <div className=''>
                    <div className="transparent-card col-lg-6">
                        <br />
                        <br />
                        <h3 className='label-color'>Get Co-ordinate  <i className="bi bi-geo-alt" onClick={props.getloction}></i></h3>
                        <form id="weatherForm">
                            <div className="input-group">
                                <label htmlFor="latitude">Latitude:</label>
                                <input type="text" id="latitude" name="lat" value={props.lat} onChange={props.change} placeholder="Enter latitude..." />
                            </div>
                            <div className="input-group">
                                <label htmlFor="longitude">Longitude:</label>
                                <input type="text" id="longitude" name="lon" value={props.lon} onChange={props.change} placeholder="Enter longitude..." />
                            </div>
                            <div className="input-group">
                                <input type="submit" onClick={props.Search} value="Search" />
                            </div>
                            <div className="input-group">
                                    <label htmlFor="city">City:</label>
                                    <input type="text" id="city" name="city" value={props.city} onChange={props.change} placeholder="Enter city..." />
                                </div>
                                <div className="input-group">
                                    <input type="submit" onClick={props.citysearch} value="Search" />
                                </div>
                        </form>                     
                    </div>
                </div>
                
            
        
    )
}
