import { useParams } from "react-router";
import { useRef, useContext, useEffect } from 'react'
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md";
import PRODUCTS from '../App/PRODUCTS.json'
import './SingleProduct.css'
import Image from "../Image/Image";
import Button from '../Button/Button'
import CartContext from '../../contexts/CartContext'
import ThemeContext from '../../contexts/ThemeContext'
import { PROJECT_URL } from "../../configs/general";

const SingleProduct = () => {
    const param = useParams()
    const product = PRODUCTS.find(item => item.id === param.id)
    const { carts, dispatchCart } = useContext(CartContext)
    const themeColor = useContext(ThemeContext)
    const added = carts.includes(product.id)
    const productItemRef = useRef(null)
    const handelAdded = () => {
        if(added){
            dispatchCart({
                type: "REMOVE_FROM_CART",
                id: product.id
            })
        } else{
            dispatchCart({
                type: "ADD_TO_CART",
                id: product.id
            })
        }
    }

    useEffect(() => {
        productItemRef.current.classList.add('visible')
    }, [])

    return(
        <div className="ProductDiv" ref={productItemRef}>
            <h2>{ product.name }</h2>
            <Image imgSrc={`${PROJECT_URL}assets/images/${product.img}`} alt={product.name} />
            <p>Price: { product.price }</p>
            <Button
             added  = {added ? 'btn added' : 'btn'}
             handelClick={handelAdded}
             style = {{
                backgroundColor: themeColor.theme.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                
            }}
             >  
                {added ?(
                <>
                <MdRemoveShoppingCart />
                Remove from Cart
                </> 
                ) : (
                <>
                <MdAdd />
                Add to Cart
                </>
                )
                }
            </Button>
        </div>
    )
}

export default SingleProduct