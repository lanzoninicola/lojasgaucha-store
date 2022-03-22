/**
 * getCurrentLocation
 * @description
 */

export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => reject(err)
    )
  })
}

/*
Using it

const LOCATION = {
    lat: 38.9072,
    lng: -77.0369,
  };

const location = await getCurrentLocation().catch(() => LOCATION );
*/
