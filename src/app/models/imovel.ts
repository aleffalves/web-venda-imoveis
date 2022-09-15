import { TipoImovel } from "../enums/tipo-imovel"
import { Endereco } from "./endereco"

export class Imovel {
    id?: number
    nome?: string
    tipo?: TipoImovel
    valor?: number
    condominio?: number
    quartos?: number
    banheiros?: number
    mobiliado?: boolean
    area?: number
    venda?: boolean
    aluguel?: boolean
    dataAnuncio?: Date
    endereco?: Endereco
    proprietarioId?: number
}
