
export interface FormLocaisDeDoacao {
    "endereco": string,
    "tiposanguineo": string
}

export interface ResponseGetAllPedidosDoacao {
    "nome": string,
    "sexo": string,
    "tipoSanguineo": string,
    "cep": string,
    "rua": string,
    "numero": string,
    "bairro": string,
    "complemento": string,
    "uf": string,
    "cidade": string,
    "hemocentro": string,
    "distancia": string
    "bancoDeSangue": [
        {
            "tipoSanguineo": string,
            "porcentagem": number
        }
    ]
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

export interface ResponseGoogleMapsDirection {
    "geocoded_waypoints": [
        {
            "geocoder_status": string,
            "place_id":string,
            "types": [
                "street_address"
            ]
        },
        {
            "geocoder_status": string,
            "place_id": string,
            "types": [
                "street_address"
            ]
        }
    ],
    "routes": [
        {
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
            "copyrights": string,
            "legs": [
                {
                    "distance": {
                        "text": string,
                        "value": number
                    },
                    "duration": {
                        "text": string,
                        "value": number
                    },
                    "end_address": string,
                    "end_location": {
                        "lat": number,
                        "lng": number
                    },
                    "start_address": string,
                    "start_location": {
                        "lat": number,
                        "lng": number
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": string,
                                "value": number
                            },
                            "duration": {
                                "text": string,
                                "value": number
                            },
                            "end_location": {
                                "lat": number,
                                "lng": number
                            },
                            "html_instructions": string,
                            "polyline": {
                                "points": string
                            },
                            "start_location": {
                                "lat": number,
                                "lng": number
                            },
                            "travel_mode": number
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": string
            },
            "summary": string,
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": string
}