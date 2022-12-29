import { SAVE_REEMBOLSO } from './graphql/querys'
const API = process.env.NEXT_PUBLIC_API_URL

const errorsMessages = {
  'El archivo no es un PDF': 'El archivo no es un PDF'
}

const KEYS = {
  '/api/saveReembolsoPeriodo': SAVE_REEMBOLSO
}

const fetcher = async ({ query, variables }) => {
  console.log('🚀 ~ file: fetcher.js:13 ~ fetcher ~ variables', variables)
  const queryName = query.split('/api/')[1]
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: KEYS[query],
        variables
      })
    })
      .then((res) => res.json())
      .then((res) => res.data)

    console.log('🚀 ~ file: fetcher.js:26 ~ fetcher ~ response', response)
    return response[queryName]
  } catch (error) {
    const errorMessage = error.response.errors[0].message
    return Object.entries(errorsMessages).forEach(([key, value]) => {
      console.log('🚀 ~ file: fetcher.js:47 ~ Object.entries ~ key', key)
      console.log('🚀 ~ file: fetcher.js:47 ~ Object.entries ~ value', value)
      const valueRegex = new RegExp(value)
      if (errorMessage.match(valueRegex)) {
        throw new Error(key)
      }
    })
  }
}

export default fetcher
