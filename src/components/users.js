import React from "react";
import {Link} from 'react-router-dom';

export class users extends React.Component {
    
    constructor(props) {
       super(props)
       this.state = {
          usuarios: [
             { name: 'Wasif', age: 21, email: 'wasif@email.com',deletar:'' },
             { name: 'Ali', age: 19, email: 'ali@email.com',deletar:'' },
             { name: 'Saad', age: 16, email: 'saad@email.com',deletar:'' },
             { name: 'Asad', age: 25, email: 'asad@email.com',deletar:'' }
          ]
       }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
          
        }
      }

    renderTableHeader() {
       let header = Object.keys(this.state.usuarios[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
        function deletarUser(e, param) {
            e.preventDefault();
            console.log(param);
            //for(var i=0 ; i < this.usuarios.length; i++)
           //{
           //     if(this.usuarios[i].value==param)
           //         this.usuarios.splice(i);
           //     console.log(this.usuarios[i]);
           // }
        }
     
       return this.state.usuarios.map((usuarios, index) => {
          const { name, age, email } = usuarios //destructuring
          return (
             <tr>
                <td><Link to={'/users/'+name}>{name}</Link></td>
                <td>{age}</td>
                <td>{email}</td>
                <td><button onClick={(e) => deletarUser(e, name)}>Deletar</button></td>
             </tr>
          )
       })
    }
 
    render() {
       const nome = this.props.match.params.name;   
       if (nome) {
            return ( <div><busca /><h1 id='title'>{nome}</h1></div>)
       } else {
        return (
            <>            
            <div>
               <h1 id='title'>Tabela de Usuários</h1>
               <table id='users'>
                  <tbody>
                     <tr>{this.renderTableHeader()}</tr>
                     {this.renderTableData()}
                  </tbody>
               </table>
            </div>
            </>
         )
  
       }
    }
 }