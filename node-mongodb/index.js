const express = require('express')
require('../models/user.model');
const  mongoose  = require('mongoose');
const Login = mongoose.model('Login');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/Login', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
   console.log('conexão com mongodb realizada com sucesso!')
  }).catch((erro)=>{
    console.log('Error: com mongodb não foi realizada com sucesso!')
  });
  const cors = require('cors');
  const app = express();
  app.use(express.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");     
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,Authorization");
  app.use(cors())
  next();    
});
app.get("/usuario",async (req,res)=>{
  await  Login.findOne({}).then((login)=>{
      return res.json({
          error:false,
          login
      });
  }).catch((err) => {
        return res.status(400).json({
          error:true,
          message:"Nenhum registro encontrado"    
        })
  })
});

app.get('/',validartoken, async (req,res)=>{
  await  Login.find().then((login)=>{
    return res.json({
      error:false,
      login
     });
  })
})




app.post('/login',async (req,res)=>{
  const {id} =1;
  var privateKey ="e81d9b3c3c57393453c8";
  var token = jwt.sign({id},privateKey,{
    expiresIn:600//10 min
  })
 await Login.create(req.body,(err)=>{
    if(err) return res.status(400).json({
      erro:true,
      mensagem:"Usuario não salvo com sucesso"
     })
  })
 return res.json({
    erro:false,
    mensagem:"Usuario salvo com sucesso",
  })
}) 


// valida token
async function validartoken(req,res,next){
  //return res.json({messagem:'testando token'})
  const autorizacao = req.headers.authorization
  const [, token] = autorizacao.split(' ');
  
  //verifica se token existe
  if(!token){
    return res.json({
         error:true,
         messagem:'Error :Necessário realizar o login pra acessar a pagina!'
        })
  }//else{
    // res.json({
    //  error:false,
    //  messagem:'token encontrado com sucesso !',
    //  token
    // })
    try{
      //validando token
      const decode = await promisify(jwt.verify)(token,'e81d9b3c3c57393453c8');
      req.userId = decode.id;  
     return next();// seria pra entra na rota ('/usuario')
    }catch(err)
    {
      return res.json({
        error:true,
        messagem:'Error : login ou senha invalida!'
       })
    }
  //}
  //return res.json({token })
  
  
  
  
  }
   



app.listen(3333,function(){
  console.log("servidor rodando");
})