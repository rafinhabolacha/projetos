const User = require('../models/user.model');
module.exports ={
    async create( req,res){
      const usuario = await User.create(req.body);
      return res.json(usuario);
    },
    async Listar(req,res){
      // res.send("Listando!");
       const usuario = await User.find({});
       return res.json(usuario)
     },
     async buscar(req,res){
      const {id} = req.params;
      const usuario = await User.findOne({_id : id})
     // console.log(usuario);
      return res.json(usuario);

     },

     async apagar(req,res){
       const {id} = req.params;
       const usuario = await User.findOneAndDelete({_id: id})
       if(usuario){
          return res.json(usuario);
       }else{
        return res.status(401).json({message :"usuario nao encontrado!"});
       }
    },

    async atualizar(req,res){
      const {id} = req.params;
      const usuario = await User.updateOne({ _id : id},req.body,(err)=>{
        if(err) return res.status(400).json({
           erro:true,
           mensagem:"Erro : na Atualização do usuario"
         })
      });
       return res.json({
         erro:false,
         mensagem:"usuario atualizado com sucesso",
        });
    }

      
   }