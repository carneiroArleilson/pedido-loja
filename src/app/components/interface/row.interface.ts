import { VendedoraInterface } from './vendedora.interface';
import { ProdutoInterface } from './produto.intarface';
import { PedidoInterface } from './pedido.interface';

export interface Row
  extends
    PedidoInterface,
    ProdutoInterface,
    VendedoraInterface {
  selected: boolean;
}
