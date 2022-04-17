import { useProducts } from "../../context/product/context"
import { Link } from "react-router-dom";

import './Header.css'

export default function Header() {
    
    const {productState, userLogin, userLogout} = useProducts();

    function login() {
        userLogin({email:"anandtiwari192@gmail.com", password:"test123"})
    }
    
    function logout() {
        userLogout()
    }

/*     function signup() {
       // userSingup({firstName: "anand", lastName:"tiwari", email:"anandtiwari192@gmail.com", password:"test"})
       userSingup({name: "anand", email:"anandtiwari192@gmail.com", password:"test123"})
    } */

    return (
        
        <header className="site__header header-fix">
        <div className="header-section">
            <div className="logo">
                <Link to="/">logo</Link>
            </div>
            <ul className="page-link">
                <li className="item"><Link to="/product">product</Link></li>
                <li className="item"><Link to="/cart">cart</Link></li>
                <li className="item"><Link to="/wishlist">wishlist</Link></li>
            </ul>
            <div className="search-box">
                <div className="field">
                    <input className="input-effect"  placeholder="Search here" />
                    <span className="focus-border"></span>
                </div>
                <div className="search__button">
                 <button className="search__button--btn btn-primary">
                   <span>Submit</span>
                 </button>
                </div>
            </div>
            <div className="user">
     {/*            <button onClick={()=>signup()}>signup</button> */}
                { productState.isLoggedIn ? 
                    <button onClick={()=>logout()}>logout</button> : 
                    <button onClick={()=>login()}>login</button>    
                }   
            </div>
        </div>
        </header>
    )
}