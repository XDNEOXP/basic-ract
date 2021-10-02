import { useContext, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md";
import Button from "../Button/Button";
import Image from "../Image/Image";
import './ProductItem.css'
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";
import {PROJECT_URL} from "../../configs/general";
const ProductItem = ({data}) => {
    const themeColor = useContext(ThemeContext)
    const { carts, dispatchCart } = useContext(CartContext)
    const added = carts.includes(data.id)
    const productItemRef = useRef(null)
    const handelAdded = () => {
        if(added){
            dispatchCart({
                type: "REMOVE_FROM_CART",
                id: data.id
            })
        } else{
            dispatchCart({
                type: "ADD_TO_CART",
                id: data.id
            })
        }
    }

    useEffect(() => {
        productItemRef.current.classList.add('visible')
    }, [])

     return(
         <li className="ProductItem" ref={productItemRef}>
         <Link to={`product/${data.id}`}>
         <h4>{data.name}</h4>
         </Link>
         <Image imgSrc = {`${PROJECT_URL}assets/images/${data.img}`} alt={data.name} /> 
         <span>Price: {data.price}$</span>
         <Button
         added = {added ? 'btn added' : 'btn'} 
         handelClick = {handelAdded}
         style = {{
             backgroundColor: themeColor.theme.color,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
             
             }}>
                 {added ? (
                     <>
                      <MdRemoveShoppingCart /> 
                      Remove from Cart
                     </>
                 ) : (
                     <>
                     <MdAdd /> 
                     Add to Cart
                     </>)}
                </Button>
         </li>
     )
   } 

export default ProductItem