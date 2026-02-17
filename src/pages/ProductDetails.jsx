import {useParams} from "react-router-dom";
import catalog from "../data/products.js";
import {useEffect, useState} from "react";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState({
        id: null,
        label: null,
        price: null
    });

    useEffect(() => {
        const found = catalog.find(product => {
            console.log(product, product.id, id, product.id == id);
            return product.id == id
        });
        console.log(found);
        if(found){
            setProduct(found);
        }
    }, [])


    console.log(product);
    return (
        <div>
            <p>{product.label}</p>
        </div>
    )
}

export default ProductDetails;
