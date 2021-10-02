import ProductItem from "../ProductItem/ProductItem"

const Products = ({data}) => {
    return (
        <ul className="products">
        {data.map((item) => (
        <ProductItem data={item}/>
        ))}
     </ul>
    )  
   
}

export default Products