
import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {
    const [data, setdata] = useState([])
    const getCovidData = async () => {
        try {
            const getData = await fetch('https://data.covid19india.org/data.json');
            const res = await getData.json()
            console.log(res.statewise[0]);
            setdata(res.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
           getCovidData()
    }, []);

    return (
        <>
            <div className='main'>
            <div className='main_inner'>
            <h1>LIVE</h1>
            <h2>COVID-19 Tracker</h2>
            <ul>
                <li className='card'>
                <div className='card__inner'>
                            <p className='card__name'>
                                <span className='fistletter'>our</span>
                                <span className='text'>Country</span>
                            </p>
                            <p className='card__total card__samll'>India</p>
                        </div>
                </li>
                <li className='card'>
                <div className='card__inner'>
                            <p className='card__name'>
                            <span className='fistletter'>Total</span>
                            <span className='text'>RECOVERED</span>
                            </p>
                            <p className='card__total card__samll'>{data.recovered}</p>
                        </div>
                </li>
                <li className='card'>
                <div className='card__inner'>
                            <p className='card__name'>
                            <span className='fistletter'>Total</span>
                            <span className='text'>CONFIRMED</span>
                            </p>
                            <p className='card__total card__samll'>{data.confirmed}</p>
                        </div>
                </li>
                <li className='card'>
                <div className='card__inner'>
                            <p className='card__name'>
                            <span className='fistletter'>Total</span>
                            <span className='text'>DEATHS</span>
                            </p>
                            <p className='card__total card__samll'>{data.deaths}</p>
                        </div>
                </li>
                <li className='card'>
                <div className='card__inner'>
                            <p className='card__name'>
                            <span className='fistletter'>Total</span>
                            <span className='text'>ACTIVE</span>
                            </p>
                            <p className='card__total card__samll'>{data.active}</p>
                        </div>
                </li>
                <li className='card'>
                <div className='card__inner'>
                            <p className='card__name'>
                            <span className='fistletter'>Total</span>
                            <span className='text'>UPDATED</span>
                            </p>
                            <p className='card__total card__samll'>{data.recovered}</p>
                        </div>
                </li>
            </ul>
            </div>
            </div>
           
            
           
        </>
    )
}

export default Covid