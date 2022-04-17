import { useProducts } from '../../context/product/context'
import './ProductCard.css'

export default function ({product}) {

    const { addTocard, productState}  = useProducts()

    function addProductTocard () {
        addTocard({productId: product._id, userId: productState.userId})
    }

    return (
         <div className="product__item">
                <div className="card__container card__container_vertical">
                    <div className="card__imagecontainer card__imagecontainer_vertical">
                        <img src={product.photos && product.photos[0].secure_url} />
                        <span className="badge badge-trending">{product.tag}</span>
                    </div>
                    <div className="card__content card__content_vertical">
                        <div className="card__description">
                            <h3 className="card__description-brand">{product.brand}</h3>
                            <h4 className="card__description-title">{product.title}</h4>
                            <div className="card__description-content">{product.description}</div>
                        </div>
                        <div className="card-button">
                            <button onClick={ () => addProductTocard()} className="cs-btn cs-btn-primary cs-btn-add_to_card font-15">
                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i> ADD TO CARD</button>
                            <button className="cs-btn cs-btn-light font-15">
                                                <i className="fa fa-heart-o" aria-hidden="true"></i> WISHLLIST</button>
                        </div>
                    </div>
                </div>
            </div>
    )

}