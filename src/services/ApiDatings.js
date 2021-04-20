export const getAuth = async (dni, phone) => {
  const result = await fetch("http://localhost:5000/users", {
    method: "GET",
    headers: {
      dni: dni,
      phone: phone,
    },
  }).then(res => res.json());
  return result;
};

export const getUserDating = async () => {
  const dating = await fetch("http://localhost:5000/users/mydates", {
    method: "GET",
    body: {},
  }).then(res => res.json());
  return dating;
};

export const postDating = async (userID, doctorID, date, details) => {
  const cita = await fetch("http://localhost:5000/datings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "userID": userID,
      "doctorID": doctorID,
      "date": date,
      "details": details
    })
  }).then(res => res.json())
  return cita;
};

export const postRegister = async (dni, nombre, lastname, phone) => {
  let register = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      "dni": dni,
      "name": nombre,
      "lastname": lastname,
      "phone": phone
    }),
  });
  register = register.json();
  return register;
};
