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
        localStorage.setItem('token', JSON.stringify(response.token))
        goToComponent()
    }

    const userLogout = async() => {
        const response = await getData('logout')
        productDispatch({ type: 'update_login_status', payload: false })
        localStorage.removeItem('token')
    }

    const userSingup = async(data) => {
        const response = await postData('signup', data)
        localStorage.setItem('token', JSON.stringify(response))
        console.log(response)
    }

    useEffect(() => {
        fetchProducts()
        productDispatch({ type: 'update_login_status', payload: localStorage.getItem('token') && true })
    }, [])

    return (
        <Context.Provider value = {
            {
                productState,
                productDispatch,
                userLogin,
                userLogout,
                userSingup
            }}>
            { children }
        </Context.Provider>
    )
}

export { useProducts }