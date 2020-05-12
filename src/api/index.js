import auth from "../lib/auth";

const s = "a971572c-8e94-11ea-9fa5-0200cd936042";
// const s = "9a3d08fa-5bb3-11ea-9fa5-0200cd936042";
const root = "https://helpings.herokuapp.com/";

const headers = new Headers();
const authHeader = new Headers();
headers.append("Content-Type", "application/json");
authHeader.append("Content-Type", "application/json");
authHeader.append("Authorization", "Token " + auth.isAuthenticated());

export default {
  sendOtp: async (mobile, otp) => {
    const h = new Headers();
    h.append("Content-Type", "application/x-www-form-urlencoded");
    const res = await fetch(
      `https://2factor.in/API/V1/${s}/SMS/${mobile}/${otp}/helper%20template`,
      {
        headers: h
      }
    );

    return await res.json();
  },

  verifyOtp: async (id, otp) => {
    const res = await fetch(
      `https://2factor.in/API/V1/${s}/SMS/VERIFY/${id}/${otp}`
    );

    return await res.json();
  },

  addPerson: async data => {
    const res = await fetch(root + `create/person`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });

    return await res.json();
  },

  createNewHelper: async data => {
    const res = await fetch(root + `create/helper`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });

    return await res.json();
  },

  getPerson: async data => {
    const res = await fetch(root + `api/person/all`, {
      method: "GET",
      headers: authHeader
    });

    return await res.json();
  },

  getNearbyPerson: async data => {
    const res = await fetch(root + `api/person/needy/near`, {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify(data)
    });

    return await res.json();
  },

  doHelp: async (needy_id, helper_id) => {
    const res = await fetch(root + `api/person/help`, {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify({ helper_id, needy_id })
    });

    return await res.json();
  },

  getHelpDone: async helper_id => {
    const res = await fetch(root + `api/person/helper/${helper_id}`, {
      method: "GET",
      headers: authHeader
    });

    return await res.json();
  }
};
