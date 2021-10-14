export interface LocaisDeDoacao {
    "hemocentro": string,
    "nome": string,
    "endereco": string,
    "cep": string,
    "latitude": number,
    "longitude": number,
    "distancia": string,
    "tipoa": string,
    "tipob": string,
    "tipoab": string,
    "tipoo": string
}

export interface FormLocaisDeDoacao {
    "nome": string,
    "cep": string,
    "tiposanguineo": string
}

export interface ResponseGoogleMaps {
    "results": [
        {
            "address_components": [
                {
                    "long_name": string,
                    "short_name": string,
                    "types": []
                }
            ],
            "formatted_address": string,
            "geometry": {
                "bounds": {
                    "northeast": {
                        "lat": number,
                        "lng": number
                    },
                    "southwest": {
                        "lat": number,
                        "lng": number
                    }
                },
                "location": {
                    "lat": number,
                    "lng": number
                },
                "location_type": string,
                "viewport": {
                    "northeast": {
                        "lat": number,
                        "lng": number
                    },
                    "southwest": {
                        "lat": number,
                        "lng": number
                    }
                }
            },
            "place_id": string,
            "types": []
        }
    ],
    "status": string
}
