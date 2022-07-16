import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"

export async function getStaticProps() {
  const config = getConfig()
  console.log('config.apiUrl', config.apiUrl)
  console.log('config.fetch', config.fetch)
  const products = await getAllProducts()

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60 // Every 4 hours it will revalidate
  }
}

export default function Home({products}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
        { JSON.stringify(products) }
    </div>
    )
}
 


