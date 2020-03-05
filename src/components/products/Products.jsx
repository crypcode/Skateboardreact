import React from 'react';


function Products(props) {
    const products = props.products.map(product => (
        <p>{product.title}</p>
    ));
    return(
        <div>
            {products}
        </div>

    )
}
export default Products;