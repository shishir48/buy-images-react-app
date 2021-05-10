import React,{useContext} from 'react'
import {Context} from './Context'
import Image from './Image'
import {getClass} from "../utils"



const Photos = () => {
    const {allPhotos} = useContext(Context)
    const arr = allPhotos.map((image,i) => {
        return <Image image={image} key={image.id} className={getClass(i)}/>
    })
    console.log(arr)
    return (
        <main className="photos">
            {arr}
        </main>
    )

}

export default Photos