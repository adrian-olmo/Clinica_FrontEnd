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


export const getDating = async (token) => {
  //console.log(token);
  let whichRole = await fetch('http://localhost:5000/users/profile', {
    method: 'GET',
    headers: {
      "auth": token
    }
  })
  whichRole = await whichRole.json();
  if (whichRole.role === 'admin') {
    let dating = await fetch('http://localhost:5000/datings', {
      method: "GET",
      headers: {
        "auth": token
      }
    })
    dating = await dating.json({});
    console.log(dating);
    return dating;
  } else {
    let mydating = await fetch('http://localhost:5000/users/mydates', {
      method: 'GET',
      headers: {
        "auth": token
      }
    })
    mydating = await mydating.json();
    console.log(mydating);
    return mydating;
  }
}

export const postDating = async (userID, doctorID, date, detail) => {

  const cita = await fetch("http://localhost:5000/datings", {

    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "userID": userID,
      "doctorID": doctorID,
      "date": date,
      "detail": detail
    })
  }).then(res => res.json())
  console.log(cita);
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
