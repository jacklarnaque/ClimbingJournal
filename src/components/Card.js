import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='image--box'>
                <img src={`./images/crags/${props.item.img}`} className='card--img' />
                <div className='map'>
                    <div className='map--box'>
                        <img src='../images/map.png' className='localisation--logo' />
                        <h3 className='Country'>{props.item.country}</h3>
                        <a className='map--link' href={`https://www.google.com/maps/${props.item.mapLink}`}>View on map</a>
                    </div>
                    <h2 className='Title'>{props.item.title}</h2>
                    <h3 className='date'>{props.item.date}</h3>
                    <p className='description'>{props.item.description}</p>
                </div>
            </div>

        </>
    )
}

export default Card