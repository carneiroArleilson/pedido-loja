import { ProdutoInterface } from './produto.intarface';

export interface PedidoInterface{
  id: number,
  operador_id: number,
  clients?: string[],
  products?: ProdutoInterface[],
  total?: number
}
