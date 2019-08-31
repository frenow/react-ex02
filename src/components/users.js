import React, { useState } from "react";
import {Link} from 'react-router-dom';

var listUsuarios = [
   {
     name: 'Raul',
     age: 29,
     email: 'raul@test.com',
   },
   {
      name: 'Mario',
      age: 22,
      email: 'mario@xxx.com',
    },
    {
      name: 'Cassio',
      age: 12,
      email: 'cassio@xxx.com',
    },
    {
      name: 'Joao',
      age: 21,
      email: 'joao@xxx.com',
    },
    {
      name: 'Emerson',
      age: 10,
      email: 'emerson@xxx.com',
    },
];

export function Users(props) {
    
  const [usersTable, setUsersTable] = useState(listUsuarios);
  //const [usersItem, setUsersItem] = useState([]);

// useEffect(() => {
//      setUsersTable(listUsuarios); 
// }
//,[usersTable]);
  
  function deletUser(e, param) {
    for(var i=0 ; i < listUsuarios.length; i++)
    {
      if(listUsuarios[i].name === param){       
        listUsuarios.splice(i, 1);
      }
    } 
    console.log(...listUsuarios); 
    setUsersTable(usersTable.filter(user => user.name !== param));
    e.preventDefault();
 }

 function filterUser(event) {
  const value = event.target.value;
  let result = usersTable;

  result = listUsuarios.filter((usuario)=>{
      return usuario.name.toLowerCase().search(value) !== -1;
  });
 
  console.log(...result);
  setUsersTable(result);

 }
 const nome = props.match.params.name;

 if (nome) {
  return ( <div><h2>{nome}</h2></div>)
}

   
//   const nome = this.props.match.params.name;
  return(
  <>
  <div>
    <input type="text" placeholder="Search" onChange={e => filterUser(e)}/>
    <table>
          <tbody>
          <tr><th>Nome</th><th>Idade</th><th>Email</th><th>Delete</th></tr>
          {usersTable.map(repo => (
            <tr>
            <td><Link to={'/users/'+repo.name}>{repo.name}</Link></td>
            <td>{repo.age}</td>
            <td>{repo.email}</td>
            <td><button onClick={e => deletUser(e, repo.name)}>Deletar</button></td>
            </tr>
           ))}
           </tbody>               
    </table>
    </div>
    </>
  );
}