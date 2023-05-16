import { useEffect } from "react";
import { useRouter } from "next/router";
import { Coordinates } from "./types/coordinates";

declare const google: any;

export default function LocationPage() {
  const router = useRouter();

  useEffect(() => {
    getCurrentLocation()
      .then(coordinates => {
        const { latitude, longitude } = coordinates;
        const url = `https://www.google.com/maps/@${latitude},${longitude},15z`;
        router.push(url);
      })
      .catch(error => {
        console.error(error);
        alert(`Error: ${error.message}`);
      });
  }, [router]);

  function getCurrentLocation(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => reject(error)
        );
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  }

  return null;
}
