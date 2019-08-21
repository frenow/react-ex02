import React from "react";
var user = [{
    nome: 'Emerson',
    email: 'test@test.com',
    idade: 20,
},
{
    nome: 'Emerson2',
    email: 'test2@test.com',
    idade: 30,
},
{
nome: 'Emerson3',
email: 'test3@test.com',
idade: 40,
}
]

export const users = (props) => 
    <div><h2>{user[0].nome}</h2><h2>{user[0].email}</h2><h2>{user[0].idade}</h2></div>;