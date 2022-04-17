import { useEffect } from "react"
import { useProducts } from "../../context/product/context"

export default function Cart () {

    const { fetchCartsInfo, productState} = useProducts()

    useEffect(()=>{
        fetchCartsInfo()
    },[])
    return ( <div>
            Cart page

            {productState.carts.map(cart => {

                return <div key={cart._id}>
                    {cart.product.title} - {cart.quantity}
                    </div>

            })}
        </div>)
}