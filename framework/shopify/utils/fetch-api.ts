
type FetchParams = {
  query: string
}

const fetchApi = async ({query}: FetchParams) => {
  const url = 'http://localhost:4000/graphql'

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
  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data };
}

export default fetchApi