const Sequelize =  require('sequelize');
const db = require('./db');
const Cliente =db.define('clientes',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    Data_pedido:{
        type:Sequelize.DATE,
        allowNull:true,
    },
    codigo_pedido:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
},{
    timestamps:true
});



const Pedido =db.define('pedidos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false,
    },
    quantidade:{
        type:Sequelize.INTEGER,
        allowNull:true

    },
    preco_unitario:{
        type:Sequelize.DOUBLE,
        allowNull:true
    },
    total:{
        type:Sequelize.DOUBLE
    },
    situacao:{//tipo 1 Pago  tipo 2: Pendente
        type: Sequelize.INTEGER,
        allowNull:true
    }
  
});
//cria a tabela
// antes de cadastrar o segundo desativa essa opcao 
//Pedido.sync({force:true});
//depois deixe assim 
//Pedido.sync();
module.exports = Cliente;
//module.exports = Pedido;

