// components/CountryDropdown.js
import React from 'react';
import { countries, Country } from 'countries-list';

const CountryDropdown = () => {
  const countryOptions = Object.keys(countries).map((countryCode: string) => {
    const country: Country = countries[countryCode];
    return (
      <option key={countryCode} value={countryCode}>
        {country.name}
      </option>
    );
  });

  return (
    <select className="country-dropdown">
      <option value="">Select a country</option>
      {countryOptions}
    </select>
  );
};

export default CountryDropdown;
// components/CountryDropdown.tsx
// import React, { useState } from "react";
// import { Select, MenuItem } from "@material-ui/core";
// import countries from "i18n-iso-countries";
// // Import the languages you want to use
// import enLocale from "i18n-iso-countries/langs/en.json";
// import itLocale from "i18n-iso-countries/langs/it.json";

// const CountryDropdown = () => {
//   const [selectedCountry, setSelectedCountry] = useState<string>("");

//   const selectCountryHandler = (value: string) => setSelectedCountry(value);

//   // Have to register the languages you want to use
//   countries.registerLocale(enLocale);
//   countries.registerLocale(itLocale);

//   // Returns an object not a list
//   const countryObj: { [key: string]: string } = countries.getNames("en", { select: "official" });

//   const countryArr = Object.entries(countryObj).map(([key, value]) => {
//     return {
//       label: value,
//       value: key
//     };
//   });

//   return (
//     <Select
//       style={{ width: "150px" }}
//       value={selectedCountry}
//       onChange={(e) => selectCountryHandler(e.target.value as string)}
//     >
//       {!!countryArr?.length &&
//         countryArr.map(({ label, value }) => (
//           <MenuItem key={value} value={value}>
//             {label}
//           </MenuItem>
//         ))}
//     </Select>
//   );
// };

// export default CountryDropdown;
