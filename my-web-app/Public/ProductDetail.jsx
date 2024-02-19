import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetails() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details from the backend server
        axios.get('/product-details')
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <div>
                        {/* Render associated videos */}
                        {product.videos.map(video => (
                            <div key={video.id}>
                                <h3>{video.title}</h3>
                                <video controls>
                                    <source src={video.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetails;
