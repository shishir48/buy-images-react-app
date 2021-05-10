
import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Context = React.createContext()

const ContextProvider = ({children}) => {
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    const [allPhotos,setAllPhotos] = useState([])
    const [cartItems,setCartItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(url)
            setAllPhotos(res.data)
        }
        fetchData()
    },[])

    const toggleFavorite = (id) => {
       const newArr = allPhotos.map( img => {
           if(img.id===id){
               return {...img,isFavorite:!img.isFavorite}
           }
           return img
       })
       setAllPhotos(newArr) 
    }
    
    const toggleCart = (image) => {
        const checkInCart = cartItems.some( img => img.id===image.id)
        if(checkInCart){
            const newArr = cartItems.filter( img => img.id!==image.id)
            setCartItems(newArr)
        }
        else{
            setCartItems(prevItem => [...prevItem,image])
        }
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const deleteCartItem = (item) => {
        const newArr = cartItems.filter( x => x.id!==item.id)
        setCartItems(newArr)
    }


    return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, toggleCart, emptyCart, deleteCartItem}}>
            {children}
        </Context.Provider>
    )

}

export {ContextProvider,Context}