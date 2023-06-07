import React, { createContext } from "react";

import p1 from "../Asset/Image/p1.png"
import p2 from "../Asset/Image/p2.jpg"
import p3 from "../Asset/Image/p3.jpg"
import p4 from "../Asset/Image/p1.png"
import p5 from "../Asset/Image/p2.jpg"


export const ProductContext = createContext()

export default function ProductContextProvider(props){
    var products = [
        { _id: 1, name: "Male Tshirt Adidas Slim Fit", maincategory: "Male", subcategory: "Tshirt", brand: "Adidas", color: "White", size: "XL", stock: "In Stock", baseprice: 5000, discount: 90, finalprice: 500, description: "This is Sample Product", pic1: p1},
        { _id: 2, name: "Male Jeans Adidas Slim Fit", maincategory: "Male", subcategory: "Jeans", brand: "Adidas", color: "Blue", size: "XL", stock: "In Stock", baseprice: 6000, discount: 90, finalprice: 600, description: "This is Sample Product", pic2:p2},
        { _id: 3, name: "Male Jeans Mufti Slim Fit", maincategory: "Male", subcategory: "Jeans", brand: "Mufti", color: "Black", size: "XL", stock: "In Stock", baseprice: 4000, discount: 50, finalprice: 2000, description: "This is Sample Product", pic3: p3},
        { _id: 4, name: "Male Jeans Mufti Slim Fit", maincategory: "Male", subcategory: "Tshirt", brand: "Mufti", color: "Blue", size: "XL", stock: "In Stock", baseprice: 500, discount: 10, finalprice: 450, description: "This is Sample Product",pic4:p4},
        { _id: 5, name: "Male Shirt Polo Slim Fit", maincategory: "Male", subcategory: "Shirt", brand: "Polo", color: "Gray Green Check", size: "XL", stock: "In Stock", baseprice: 50000, discount: 99, finalprice: 500, description: "This is Sample Product", pic5:p5 },
    ]
    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}