import { Html, Head, Main, NextScript } from 'next/document'
import LocationInfo from './LocationInfo'
import CountryDropdown from './CountryDropdown'
import { types } from 'util'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
              
        
        <Main />
        <LocationInfo />
        <NextScript />
      </body>
    </Html>
  )
}
