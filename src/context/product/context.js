import { useContext, createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { ProductReducer, initialState } from './reducers/product-reducer';
import { postData, getData } from '../../utils/http-api';

import {
    useNavigate,
    useLocation,
} from "react-router-dom";


const Context = createContext("");

const useProducts = () => useContext(Context)

export default function ProductProvider({ children }) {

    let navigate = useNavigate();
    let location = useLocation();

    const [productState, productDispatch] = useReducer(
        ProductReducer,
        initialState
    );

    const fetchProducts = async() => {
        const response = await getData('products')
        console.log('product res', response)
        productDispatch({ type: 'add_product', payload: response.products })
    }

    const goToComponent = () => {
        // use navigate in login to redirect after login
        let from = (location.state && location.state.from && location.state.from.pathname) || '/'
            //let from = location.state ?.from ? .pathname || '/'
        navigate(from, { replace: true })
    }

    const userLogin = async(data) => {
        const response = await postData('login', data)
        productDispatch({ type: 'update_login_status', payload: response.user.email && true })
        productDispatch({ type: 'add_user', payload: response.user._id })
        localStorage.setItem('token', JSON.stringify(response.token))
        localStorage.setItem('user', JSON.stringify(response.user))
        goToComponent()
    }

    const userLogout = async() => {
        const response = await getData('logout')
        productDispatch({ type: 'update_login_status', payload: response.user.email && false })
        localStorage.removeItem('token')
    }

    const userSingup = async(data) => {
        const response = await postData('signup', data)
        localStorage.setItem('token', JSON.stringify(response))
        localStorage.setItem('user', JSON.stringify(response.user))
        console.log(response)
    }

    const addTocard = async(data) => {
        const response = await postData('user/cart', data)
        console.log(response)
    }

    const fetchCartsInfo = async() => {
        const response = await getData('user/cart', {
            userId: productState.userId || JSON.parse(localStorage.getItem('user'))._id
        })
        productDispatch({ type: 'update_cards', payload: response })
        console.log(response)
    }

    useEffect(() => {
        fetchProducts()
        productDispatch({ type: 'update_login_status', payload: localStorage.getItem('token') && true })
    }, [])

    return ( <
        Context.Provider value = {
            {
                productState,
                productDispatch,
                userLogin,
                userLogout,
                userSingup,
                addTocard,
                fetchCartsInfo
            }
        } > { children } <
        /Context.Provider>
    )
}

export { useProducts }