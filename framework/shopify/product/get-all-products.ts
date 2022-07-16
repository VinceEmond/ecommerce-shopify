import { 
  normalizeProduct,
  getAllProductsQuery
} from "../utils";
import { ProductConnection } from "../schema"
import { Product } from "@common/types/product"
import { ApiConfig } from "@common/types/api";

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({url: config.apiUrl, query: getAllProductsQuery})

  // Normalize and return new data
  // --> Destructuring "edge" to node, then using ": product" to give the alias "product"
  // --> ?? at the end is to catch undefined/null and return empty array
  const products = data.products.edges.map(({ node: product }) => 
    normalizeProduct(product)
  ) ?? []


  return products
}

export default getAllProducts