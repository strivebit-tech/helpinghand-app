import { replace } from "formik";
import auth from "../lib/auth";

const s = "9a3d08fa-5bb3-11ea-9fa5-0200cd936042";

export default {
  sendOtp: async (mobile, otp) => {
    const res = await fetch(
      `https://2factor.in/API/V1/${s}/SMS/${mobile}/${otp}/HelpingHands`
    );

    return await res.json();
  },

  verifyOtp: async (id, otp) => {
    const res = await fetch(
      `https://2factor.in/API/V1/${s}/SMS/VIERFY${id}/${otp}`
    );

    return await res.json();
  },

  getAddressfromLocation: async (lat, lng) => {
    const response = await fetch(
      `http://apis.mapmyindia.com/advancedmaps/v1/sznnv7o54e695iizd1bga48yzmf5xvzq/rev_geocode?lat=${lat}&lng=${lng}`
    );

    console.log("RESPONSE GEOCODE", await response);
    return await response.json();
  },

  getAuthToken: async () => {
    //Headers
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const client_id =
      "DQMqcA9v_ZrNWgcY0z5o9FjNDr9zc6-oyi2rZ5IrDlWhk5DueEh18_yiFbTofS5b_C6KBihqUOYxGhxaWO0_fg==";
    const client_secret =
      "ebEc8GH231ciXN2DqeNUYiAV7p9wjfrxvp9wDVv4wsdpfG3Euo63RB8RioSL8hNQjw2gJlrQxiGs9AVCsVughaMmXAM4AOWE";
    const grant_type = "client_credentials";

    const body =
      encodeURIComponent("grant_type") +
      "=" +
      encodeURIComponent(grant_type) +
      "&" +
      encodeURIComponent("client_id") +
      "=" +
      client_id +
      "&" +
      encodeURIComponent("client_secret") +
      "=" +
      client_secret;
    const response = await fetch(
      "https://outpost.mapmyindia.com/api/security/oauth/token",
      {
        method: "POST",
        body: body,
        headers: headers
      }
    ).json();

    if (await response.error) {
      throw new Error(response);
      return false;
    } else {
      auth.setAPIToken(response.access_token);
      return false;
    }
  },

  getGeocodeAddress: async address => {
    const token = auth.getAPIAuthToken();
    const headers = new Headers();
    headers.append("Authorization", `bearer ${token}`);

    return await fetch(
      `https://atlas.mapmyindia.com/api/places/geocode?address=${address}`,
      {
        headers: headers
      }
    ).json();
  }
};
