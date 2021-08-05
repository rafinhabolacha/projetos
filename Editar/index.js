import React, { useState,useEffect } from 'react';
import { Menu } from '..';
export const Editar = (props) =>{
    const [id] = useState(props.match.params.id);// recebendo o id da rota Editar
    const [nome ,setNome]= useState("");
    const [valor ,setValor]= useState("");
    const [quantidade ,setQuantidade]= useState("");
    useEffect(()=>{
        const getProduto = async () =>{
            setNome("Televisão");
            setValor(150.47);
            setQuantidade(25);
        //    setData({
          //      nome:"Televisão",
          //      valor: 150.47,
          //      quantidade: 25
          //  })      
        }
         getProduto();
    },[id]);


   const editProduto = async e =>{
          e.preventDefault();
          console.log("nome:"+nome);
   }


        return(
            <div>
                <Menu />
                <h1>Editar</h1>
            <hr />

            <form onSubmit={editProduto} >
                 <label>Nome:</label><br />
                 <input type="text" name="nome" placeholder="nome produto..." value={nome}  onChange={e => setNome(e.target.value)} /><br />
                
                <label >Preço:</label><br />
                <input type="text" name="valor" placeholder="Preço produto..." value={valor}  onChange={e => setValor(e.target.value)}
               /><br />
                
                
          <label >Quantidade:</label><br />
         <input type="number" name="quantidade" placeholder="quantidade produto..." value={quantidade}  onChange={e => setQuantidade(e.target.value)}/><br /><br />

                    <button type="submit">Salvar Alterações</button>
                </form>
                  

            </div>
        )
}