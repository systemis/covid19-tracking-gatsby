interface StateInfo {
  CountryCode: string, 
  Country: string, 
  NewConfirmed: number, 
  TotalConfirmed: number, 
  NewRecorverd: number, 
  TotalRecorvered: number, 
  NewDeaths: number, 
  TotalDeaths: number,
}

interface CountriesInfo {
  general: {
    totalConfirmed: number, 
  },
  
  countries: Array<StateInfo>
}
export {
  StateInfo, 
  CountriesInfo
}