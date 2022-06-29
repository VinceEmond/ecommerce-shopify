import fetchApi from "../utils/fetch-api";
import { ProductConnection } from "../schema"
import getAllProductsQuery from "../utils/queries/get-all-products";

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery})

  // Normalize and return new data!
  const products = data.products.edges.map(({ node: product }) => {
    return product
  }) ?? []

  return products
}

export default getAllProducts