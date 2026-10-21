const {
  getProductById,
  checkStock,
} = require("../../src/catalog/catalogService");

test("getProductById renvoi le meme produit pour un id donne", async () => {
  const product = await getProductById(1);
  expect(product).toEqual({
    id: 1,
    name: "Casque Bluetooth",
    category: "audio",
    price: 89.9,
    stock: 12,
  });
});

test("rejette la promesse si le produit est inconnu", async () => {
  expect.assertions(1);
  await expect(getProductById(7)).rejects.toThrow("Produit introuvable : 7");
});

test("retourne false si le stock est insuffissant", async () => {
  await expect(checkStock(2, 1)).resolves.toBe(false);
});
