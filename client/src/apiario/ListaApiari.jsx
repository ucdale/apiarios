// import React, { useState, useEffect } from 'react'
// import logo from '../logo.svg';
// import '../App.css';
// import useFetch from '../useFetch';
// import { Table, Container, Row, Col } from 'react-bootstrap';

// const ListaApiari =() => {
//   const [listaApiari, setListaApiari] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     if(listaApiari.length === 0){
//         // get lista apiari
//         setListaApiari([
//             {id:1, nome: "Apiario di prova 1", descrizione: "Precenicco"},
//             {id:3, nome: "Apiario di prova 2", descrizione: "Cordovado"},
//         ])
//     }
//   },[listaApiari ]);

//   return (
//     <div>
//        <Container fluid="md">
//           <Row>
//             <Col>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Username</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Jacob</td>
//                     <td>Thornton</td>
//                     <td>@fat</td>
//                   </tr>
//                   <tr>
//                     <td>3</td>
//                     <td colSpan={2}>Larry the Bird</td>
//                     <td>@twitter</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Col>
//           </Row>
//         </Container>
//     </div>
//   );
// }

// export default ListaApiari;


import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';
import { useTable } from 'react-table'

const ListaApiari = () => {

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
    <div>
      {listaApiari.length > 0 ? (
      <BTable striped bordered hover size="sm">
      <thead>
          <th>Apiario</th>
          <th>Luogo</th>
      </thead>
      <tbody>
        {listaApiari.map((row, i) => {
          return (
            <tr key={row.id}>
              <td>{row.nome}</td>
              <td>{row.descrizione}</td>
            </tr>
          )
        })}
      </tbody>
    </BTable>
    ) : (<h1>Loading...</h1>)}
    </div>
  )
}

export default ListaApiari

