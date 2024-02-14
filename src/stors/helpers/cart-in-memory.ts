import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cartStore";

export function add (products: ProductCartProps[],newProduct:ProductProps){
    const existInProduct = products.find(({id}) => newProduct.id ===id)

    if (existInProduct){
        return products.map((product)=>
        product.id === existInProduct.id
        ? {...product,quantity: product.quantity+1}
        :product
        )
    }
    return [...products, {...newProduct, quantity:1}]
}

export function remove(products:ProductCartProps[],productRemoveId:string){
    const updatedProducts = products.map((product)=>
    product.id === productRemoveId?{
        ...product,
        quantity:product.quantity>1? product.quantity -1: 0
    }:product)

    return updatedProducts.filter((product)=> product.quantity>0)
}