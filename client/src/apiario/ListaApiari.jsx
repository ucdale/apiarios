import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';

const ListaApiari =() => {
  const [listaApiari, setListaApiari] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{ 
    if(listaApiari.length === 0){
        // get lista apiari
        setListaApiari([
            {id:1, nome: "Apiario di prova 1", descrizione: "Precenicco"},
            {id:3, nome: "Apiario di prova 2", descrizione: "Cordovado"},
        ])
    }
  },[listaApiari ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Lista Apiari
        </h1>
        {loading ? <div>loading...</div>  
        : (
          <div>
            <ul>
              {listaApiari.map(apiario => <li key={apiario.id}> {apiario.nome} {apiario.descrizione} </li>)}
              data.message
            </ul>
          </div>
          )}
      </header>
    </div>
  );
}

export default ListaApiari;
