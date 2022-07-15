import {
  ImageEdge,
  Product as ShopifyProduct // Alias to ShopifyProduct for clarity
} from "../schema"

import { Product } from "@common/types/product"

// Function to normalize the URL of the images to a new format
function normalizeProductImages({edges}: {edges: Array<ImageEdge>}) {
  return edges.map(({node: { originalSrc: url, ...rest}}) => {
    return {
      url: `/images/${url}`,
      ...rest
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {

  // De-construct productNode object from apiFetch
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode

  // Create our own product object
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    ...rest // Regex to remove all slashes from the beginning and the end
  }

  return product
}

