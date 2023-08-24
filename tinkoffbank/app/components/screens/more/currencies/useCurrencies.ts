import React, { useEffect, useState } from "react";
import { ICurrency } from "./types";
import { Alert } from "react-native";
import { URL } from "./API";

export const useCurrencies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}`); //usd for base
                const result = await response.json();

                setCurrencies([
                    {
                        name: 'BYN',
                        value: result.rates['BYN'].toFixed(2)
                    },
                    {
                        name: 'EUR',
                        value: result.rates['EUR'].toFixed(2)
                    },
                    {
                        name: 'RUB',
                        value: result.rates['RUB'].toFixed(2)
                    },
                ]);
            } catch (error: any) {
                Alert.alert('Fetch currencies error: ', error.message)
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [])

    return {isLoading, currencies};
}