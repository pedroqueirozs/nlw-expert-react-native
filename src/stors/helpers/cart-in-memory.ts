import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cardStore";

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