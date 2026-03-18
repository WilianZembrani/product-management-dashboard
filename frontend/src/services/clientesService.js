export async function createCliente(cliente) {
  try {
    const response = await fetch("http://localhost:3000/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar usuário");
    }

    return await response.json(); // opcional, mas útil
  } catch (error) {
    console.log("ERRO NA API", error);
    throw error;
  }
}
