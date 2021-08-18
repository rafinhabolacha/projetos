const controller_pedido = require('../models/cliente');
module.exports={
   async stores(req,res){
        res.send("pedido");
    },
    async Cadastrar(req,res){
      //res.send("cadastrando!");
      await controller_pedido.create(req.body).then(()=>{
           return res.json({
             error:false,
             mensagem:"pedido efetuado com Sucesso!",
             dados:req.body
           }) 
      }).catch((err)=>{
        return res.status(400).json({
          Error:true,
          mensagem:" Error: pedido não efetuado com Sucesso!"+err
      });
      })
    },
    async Listar_todos_pedido(req,res){
      await controller_pedido.findAll({
        order:[
             ['id', 'DESC']     
          ]
        }).then((pedidos)=>{
            return res.json({
                error:false,
                pedidos
            })
        }).catch(()=>{
            return res.status(400).json({
                error:true,
                mensagem:"Nenhum pedido encontrado!"
           });
       })
    },
    async Listar_um_pedido(req,res){
      const { id } = req.params;
      await controller_pedido.findByPk(id).then((pedido)=>{
         return res.json({
             error:false,
             mensagem:"pedido efetuado com sucesso",
             pedido
          }); 
       }).catch(()=>{
         return res.status(400).json({
             error:true,
             mensagem:"Nenhum pedido encontrado!"
        });
     });
  }
} 