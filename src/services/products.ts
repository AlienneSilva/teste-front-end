
import type { ProductsResponse } from '../types/Product';

const API_URL = '/api/lista-produtos/produtos.json';

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error('A API não retornou os produtos corretamente.');
  }

  return data.products;
}
