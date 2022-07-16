import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";

const fetchApi = async <T>({url, query}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {

  // Make POST request for JSON data using query
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
  })

  // 
  const {data, errors} = await res.json();

  // Error Handling if any are returned
  // ?? Operator is checking if left hand expression is null or undefined
  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data };
}

export default fetchApi