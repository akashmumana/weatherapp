import React from 'react'

export default function Recent(props) {

    let data;
    if (props.resent == null) {
        data = "";
    } else {
        data = props.resent.map((recentData, id) => {
            return <li key={id} onClick={() =>{props.research(recentData.lat, recentData.lon)}}>{recentData.city}</li>
        })
    }
  return (
    <div>
                <div>
                    <div className='recent_section'>
                        <div className=' resentcontainer'>
                            <h3 className=' text-center'>Recent Data</h3>
                            <div className=' recent'>
                                <ul className=' list-unstyled'>
                                    <li>{data}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
