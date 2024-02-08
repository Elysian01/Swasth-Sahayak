import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./css/common.css";
import Navbar from "../components/misc/Navbar";


function DoctorDashboard() {

    // const [products, setProducts] = useState([]);
    // const [productsCards, setProductsCards] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:9000/products")
    //     .then((response) => {
    //         const data = response.data;
    //         setProducts(data);

    //         const cards = data.map(product => (
    //         <ProductCard key={product.id} {...product} />
    //         ));

    //         setProductsCards(cards);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    // }, []); 


    return (
        <div>
            <Navbar />
        </div>
    )
}

export default DoctorDashboard;