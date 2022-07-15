import {
  Product as ShopifyProduct
} from "../schema"



export function normalizeProduct(productNode: ShopifyProduct): any {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    ...rest // Regex to remove all slashes from the beginning and the end
  }

  return product
}