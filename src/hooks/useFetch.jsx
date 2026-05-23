import { useState, useEffect } from 'react';

function useFetch(baseUrl) {
  const [carregador, setCarregador] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setCarregador(false);
            return reject(data);
          }
          setCarregador(false);
          resolve(data);
        })
        .catch(error => {
          setCarregador(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setCarregador(false);
            return reject(data);
          }
          setCarregador(false);
          resolve(data);
        })
        .catch(error => {
          setCarregador(false);
          reject(error);
        });
    });
  }

  return { get, post, carregador };
};

export default useFetch;
