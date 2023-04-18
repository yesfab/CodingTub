import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./hashtag.scss";

const Hashtag = () => {
    // Declare state variables
    const [names, setNames] = useState([]);
    const [index, setIndex] = useState(0);

    // Fetch data from the server when component mounts
    useEffect(() => {
        fetch(`http://localhost:3001/search/hashtag`)
            .then(response => response.json())
            .then(data => {
                setNames(data.map(item => item.nom)); // set the names state with an array of names
            })
            .catch(error => console.log(error));
    }, []);

    // Divide the names array into chunks of 8 names each
    const chunkSize = 6;
    const nameChunks = names.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item); // add the name to the current chunk
        return resultArray;
    }, []);

    // Handle carousel item selection
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {nameChunks.map((chunk, i) => (
                <Carousel.Item key={i}>
                    <div className="hashtag-list" id='hashtag'>
                        {chunk.map((name, j) => (
                            <div key={j}>
                                <a href={'/search-result?query=' + name}>{name}
                                </a>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Hashtag;