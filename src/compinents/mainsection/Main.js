import React, { useEffect, useState } from 'react';

const Main = () => {
    return (
        <div >
            <Photos></Photos>
        </div>
    );
};
const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
        .then(data=>setPhotos(data))
    }, [])
    const newPhotos = photos.slice(0, 48);
    return (
        <div  className='text-light row row-cols-1  row-cols-md-4 my-5 g-4'>
            {
                newPhotos.map(photo => <DisplayPhoto
                    Photo={photo.url}
                    title={photo.title.slice(0,20)}
                ></DisplayPhoto>)
            }
        </div>
    )
}
const DisplayPhoto = (props) => {
    return (
       
            <div>
            <div className="col">
                <div className="card">
                <img src={props.Photo}  className="card-img-top" alt="..."/>
                <div className="card-body">
                        <h5 className="card-title text-dark">{props.title}</h5>
                        <button className='px-5'>Details</button>
                </div>
                </div>
            </div>
            </div>
       
    )
}
export default Main;