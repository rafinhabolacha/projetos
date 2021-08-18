const controller_cliente = require('../models/cliente');

module.exports={

    async stores(req,res){
        res.send("Clientes");
    },
    async Cadastrar(req,res){
     const dados = req.body;
     await controller_cliente.create(dados).then(()=>{
         return res.json({
             Error:false,
             mensagem:"Cliente Salvo com Sucesso!",
             dados
         });
     }).catch(()=>{
        return res.status(400).json({
            Error:true,
            mensagem:"Cliente não Salvo com Sucesso!"
        });
      }); 
   },

         async Listar_todos(req,res){
          await controller_cliente.findAll({
            order:[
                 ['id', 'DESC']     
              ]
            }).then((clientes)=>{
                return res.json({
                    error:false,
                    clientes
                })
            }).catch(()=>{
                return res.status(400).json({
                    error:true,
                    mensagem:"Nenhum cliente encontrado!"
                    });
            })

         },

         async listar_um_Cliente(req,res){
           const { id } = req.params;
         await controller_cliente.findByPk(id).then((cliente)=>{
            return res.json({
                error:false,
                cliente
             }); 
          }).catch(()=>{
            return res.status(400).json({
                error:true,
                mensagem:"Nenhum cliente encontrado!"
           });
        });
      }
   
}
   