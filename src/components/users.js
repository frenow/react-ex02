import React from "react";
import {Link} from 'react-router-dom';

let users = [
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

export class Users extends React.Component {
    
   constructor(props) {
      super(props);

      this.state = {
          users: users,
          result: users,
      };
      this.filterList = this.filterList.bind(this);
  }

//  componentWillReceiveProps(nextProps) {
//      this.setState({
//          users: nextProps.users,            
//      });
//  }

//    componentDidUpdate(nextProps) {
//          this.setState({
//            users: nextProps.users,             
//         });
//   }  

  filterList(event) {
      let value = event.target.value;
      let users = this.state.users, result=[];
      result = users.filter((user)=>{
          return user.name.toLowerCase().search(value) !== -1;
      });
      this.setState({result});
  }
  
deletUser(e, param) {
   let users = this.state.users;

   for(var i=0 ; i < users.length; i++)
   {
     if(users[i].name === param){       
        users.splice(i, 1);
     }
   }   
   this.setState({users});
   e.preventDefault();
}

render(){
   
   const nome = this.props.match.params.name;

   const userList = this.state.result.map((user) => {
     return <tr><td><Link to={'/users/'+user.name}>{user.name}</Link></td><td>{user.age}</td><td>{user.email}</td><td><button onClick={(e) => this.deletUser(e, user.name)}>Deletar</button></td></tr>;
   });

   if (nome) {
      return ( <div><h2>{nome}</h2></div>)
   }

  return(<div>
    <input type="text" placeholder="Search" onChange={this.filterList}/>
                <table>
                  <tbody>
                     <tr><th>Nome</th><th>Idade</th><th>Email</th><th>Delete</th></tr>
                     {userList}
                  </tbody>
               </table>
    </div>
  );
}
}