import { useState } from "react";
import { useEffect } from "react";

function useCurrency(currency) {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrency;
