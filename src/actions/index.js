// action para adicionar o produto no carrinho de compras
export const addProduct = (value) => ({
    type: 'ADD_PRODUCT', 
    value:value
});

//action para remover o produto no carrinho de compras
export const deleteProduct = (value) => ({
    type: 'DELETE_PRODUCT',
    value:value,
  });
  