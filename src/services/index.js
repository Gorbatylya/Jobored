import React from "react";

const API_URL = `https://startup-summer-2023-proxy.onrender.com`;
const token = `v3.r.137440105.d772a40bf271d79f7d22cd3735bb105c21e6b016.12392c08eb645ffd3ee8899e0abce6720874c6d4`;
const login = "sergei.stralenia@gmail.com";
const password = "paralect123";
const client_id = "2356";
const client_secret =
  "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";


export const getUser = async () => {
  const response = await fetch(
    `${API_URL}/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}`,
    {
      headers: {
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      },
    }
  );
  let result = await response.json();
//   console.log(result.access_token);
   localStorage.setItem("access_token", result.access_token);
};



export const getVacancy = async (keyword, paymentFrom, paymentTo) => {
  const response = await fetch(
    `${API_URL}/2.0/vacancies/?keyword=${keyword}&payment_from=${paymentFrom}&payment_to=${paymentTo}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        "X-Api-App-Id":
          "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        // 'Authorization' : `Bearer ${localStorage.getItem('user')?.access_token}`,
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  );
  if (response) {
    return await response.json();
    
  }
  console.log(await response.json());
};



