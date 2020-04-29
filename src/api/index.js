const s = "9a3d08fa-5bb3-11ea-9fa5-0200cd936042";
const root = "https://helpings.herokuapp.com/api/";

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append(
  "Authorization",
  "Token 5feb126e-b663-4d22-9jkfdjkaur-46b1e7a4353eieomfueywomB2LRLxbmaESfqEX3u7TNC30jh-lvyNvyYh321V9FBoN6Ixg3DYAJSMNkJiwBfvdbdxCkQr_xubUKz7EpM7mtA==Iys"
);

export default {
  sendOtp: async (mobile, otp) => {
    const res = await fetch(
      `https://2factor.in/API/V1/${s}/SMS/${mobile}/${otp}/HelpingHands`
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
    const res = await fetch(root + `person/create/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });

    return await res.json();
  },

  createNewHelper: async data => {
    const res = await fetch(root + `helper/create/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });

    return await res.json();
  },

  getPerson: async data => {
    const res = await fetch(root + `person/all/`, {
      method: "GET",
      headers: headers
    });

    return await res.json();
  },

  getNearbyPerson: async data => {
    try {
      const res = await fetch(root + `person/needy/near/`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      });

      return await res.json();
    } catch (err) {
      return err;
    }
  },

  doHelp: async (needy_id, helper_id) => {
    const res = await fetch(root + `person/help/`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ helper_id, needy_id })
    });

    return await res.json();
  },

  getHelpDone: async helper_id => {
    const res = await fetch(root + `person/helper/${helper_id}/`, {
      method: "GET",
      headers: headers
    });

    return await res.json();
  }
};
