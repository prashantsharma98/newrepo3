import { useState } from "react";
import { useRouter } from "next/router";
import { Coordinates } from "./types/coordinates";

declare const google: any;

export default function HomePage() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  function handleSubmit(event:  React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = `https://www.google.com/maps/place/${encodeURIComponent(
      address
    )}`;
    router.push(url);
  }

  return (
    <div>
      <h1>Get Current Location</h1>
      <p>Please allow access to your location:</p>
      <button onClick={() => router.push("/location")}>Get Location</button>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Enter your address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={event => setAddress(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
