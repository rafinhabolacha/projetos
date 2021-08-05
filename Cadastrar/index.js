import React, { useState } from 'react';
import { Menu } from '..';
import {Redirect} from 'react-router-dom';
export const Cadastrar = () =>{

    const [produto, setProduto] = useState({
        nome:'',
        valor:'',
        quantidade:''

    });

    const [ status, setStatus] = useState({
        type:'',
        mensagem:''
    });

    const valueInput = e =>setProduto({ ... produto,[e.target.name]: e.target.value}); 


    const addProduto = async  e =>{
           e.preventDefault();
           console.log("Nome: "+produto.quantidade);

         //  setStatus({
          //  type:'Error',
         //   mensagem:'Error: produto não cadastrado com sucesso!'
        //   });

          // setStatus({
          //  type:'Success',
         //   mensagem:'produto  cadastrado com sucesso!'
         ///  });

           setStatus({
            type:'redSuccess',
            mensagem:'produto  cadastrado com sucesso!'
           });


    }
        return(
            <div>
                <Menu />
                <h1>Cadastrar</h1>
    {status.type === 'Error' ? <p style={{color:"#ff0000"}}>{status.mensagem}</p> : ""}
    {status.type === 'Success' ? <p style={{color:"green"}}>{status.mensagem}</p> : ""}
   
    {status.type === 'redSuccess' ? <Redirect to={{
        pathname:"/listar",
        state:{
            type:'Success',
            mensagem:status.mensagem
        }
    }} /> : ""}       
                <hr />
                <form onSubmit={addProduto}>
                 <label>Nome:</label><br />
                <input type="text" name="nome" placeholder="nome produto..." onChange={ valueInput} /><br />
                
                 <label >Preço:</label><br />
                 <input type="text" name="valor" placeholder="Preço produto..."onChange={ valueInput}/><br />
                
                
          <label >Quantidade:</label><br />
         <input type="number" name="quantidade" placeholder="quantidade produto..."  onChange={ valueInput} />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
}