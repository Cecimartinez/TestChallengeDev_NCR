import { useState, useEffect } from "react";
import { COINS } from "../constants/coin";
import { ACCOUNTS } from "../constants/account";



export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const { cuentas } = await response.json();

      const filteredCuentas = cuentas.filter(
        (cuenta) =>
          (cuenta.moneda === COINS.PESOS || cuenta.moneda === COINS.DOLAR) &&
          (cuenta.tipo_letras === ACCOUNTS.CUENTACORRIENTE || cuenta.tipo_letras === ACCOUNTS.CUANTAAHORRO) &&
          cuenta.n.trim() !== ""
      );

      setData({ cuentas: filteredCuentas });
    } catch (error) {
      setErrorState("Ha ocurrido un error")
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, errorState };
}
