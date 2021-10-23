
export interface ViaCep {
    "cep": string,
    "logradouro": string,
    "complemento": string,
    "bairro": string,
    "localidade": string,
    "uf": string,
    "ibge": string,
    "gia": string,
    "ddd": number,
    "siafi": string
}

export interface FormRegistreUmPedido {
    "nome": string,
    "sexo": string,
    "tipoSanguineo": string,
    "cep": string,
    "uf": string,
    "cidade": string,
    "bairro": string
    "rua": string,
    "numero": string,
    "complemento": string,
    "hemocentro": string
}