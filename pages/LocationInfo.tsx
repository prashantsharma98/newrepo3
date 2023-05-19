// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface LocationData {
//   country_name: string;
//   city: string;
//   region: string;
//   // Add more properties as needed
// }

// const LocationInfo = () => {
//   const [location, setLocation] = useState<LocationData | null>(null);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const response = await axios.get<LocationData>("https://ipapi.co/json/");
//         setLocation(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   return (
//     <div>
//       {location ? (
//         <div>
//           <p>Country: {location.country_name}</p>
//           <p>City: {location.city}</p>
//           <p>Region: {location.region}</p>
//           {/* Add more location details as needed */}
//         </div>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// };

// export default LocationInfo;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setLocation(response.data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <h1>User Location</h1>
      {location ? (
        <div>
          <p>Country: {location.country_name}</p>
          <p>City: {location.city}</p>
          <p>Region: {location.region}</p>
          {/* Add more location details as needed */}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Home;
