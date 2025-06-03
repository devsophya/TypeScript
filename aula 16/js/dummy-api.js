async function getUsers() {
  const resposta = await fetch("https://dummyapy.io/data/v1/user?created=1", {
    headers: {
      "app-id": "63f77cc1b7f489f0351b30f",
    },
  });

  const users = await resposta.json();
    console.log(users.data);
}

async function getUser() {
  const resposta = await fetch(
    "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca",
    {
      headers: {
        "app-id": "63f77cc1b7f489f0351b30f",
      },
    }
  );

  const user = await resposta.json();
  console.log(user);
}

async function createUser() {
  const userData = {
    firstName: "Sophya",
    lastName: "Damiazo",
    email: "sophya@test.com",
  };

  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "63f77cc1b7f489f0351b30f",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (erro) {
    console.log("Deu erro ao tentar criar um novo usuário:", erro);
  }
}

//createUser();
