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

export const postRegister = async (dni, nombre, lastname, phone, history) => {
  console.log(typeof dni);
  let register = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      "dni": dni,
      "name": nombre,
      "lastname": lastname,
      "phone": phone,
      "history": history
    }),
  });
  register = register.json();
  console.log(dni, "prueba dni");
  return register;
};
