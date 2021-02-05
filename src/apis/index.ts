import fetch from 'node-fetch'

const fetch_covidtracking_countries_info = async ():Promise<any> => {
  let URL:string = 'https://api.covid19api.com/summary'
  let ACCESS_KEY:string = '5cf9dfd5-3449-485e-b5ae-70a60e997864'
  let response = await fetch(URL, {method: 'GET', headers: {'X-Access-Token': ACCESS_KEY}})
  const data = await response.json()

  return data
}

export {
  fetch_covidtracking_countries_info
}