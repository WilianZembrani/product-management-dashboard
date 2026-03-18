export async function loadProdutos(setProdutos) {
  try {
    const response = await fetch("http://localhost:3000/produtos");
    if (!response.ok) throw new Error("Não foi possivel carregar os dados");
    const data = await response.json();
    setProdutos(data);
  } catch (error) {
    console.log(error);
  }
}

export async function createProduct(product) {
  try {
    const response = await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Não foi possivel adicionar esse produto ");
    }
    return await response.json();
  } catch (error) {
    console.log("ERRO NA API", error);
    throw error;
  }
}

export async function updateProduct(id, product) {
  try {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Erro ao atualizar produto");
    }
  } catch (error) {
    console.log("Erro na api", error);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar produto");
    }
  } catch (error) {
    console.log("Erro na api", error);
    throw error;
  }
}
