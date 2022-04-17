import ProductCard from "../../components/ProductCard/ProductCard"
import { useProducts } from "../../context/product/context"
import './Product.css'

export default function Products() {

    const { productState } = useProducts()
    
    return (
        <div className="product__container">
            { productState.products.map(product => 
                <ProductCard key={product.title} product={product} />)}
        </div>
    )
}