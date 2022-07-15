import fetchApi from "../utils/fetch-api";
import { ProductConnection } from "../schema"
import getAllProductsQuery from "../utils/queries/get-all-products";
import { normalizeProduct } from "../utils/normalize"
import { Product } from "../../common/types/product"

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery})

  // Normalize and return new data
  // --> Destructuring "edge" to node, then using ": product" to give the alias "product"
  // --> ?? at the end is to catch undefined/null and return empty array
  const products = data.products.edges.map(({ node: product }) => 
    normalizeProduct(product)
  ) ?? []


  return products
}

export default getAllProducts