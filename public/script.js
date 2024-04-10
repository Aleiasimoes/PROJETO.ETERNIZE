const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.unlencoded({extended: true}));
app.use(bodyParser,json());
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 3000;

//Rota inicial
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//Rota para pré-agendamento

app.post('/pre-agendamento', (req,res) =>{
    //PROCESSAR DADOS DE PRÉ AGENDAMENTO
    res.send('Pré-agendamento recebido com sucesso, obrigada!');
});

//Iniciar servidor

app.listen(PORT, () =>{ 
    console.log('Servidor rodando na porta ${PORT}');
});

//Código para Front

const { error } = require("console");

document.getElementById('form-contato').addEventListener('submit',function(event){event.preventDefault();
const formData = new FormData(event.target);
const data = {}
formData.forEach((value,key)=>{data[key]= value;});
fetch('/pre-agendamento',{method:'POST',
headers:{
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response=> response.text())
.then(result =>{
    alert(result);
    document.getElementById('form-conato').requestFullscreen();
})
.catch(error =>console.error('Erro:',error));
});

//Carrega Imagens da Galeria - Ensaios Principais
const gallery = documento.querySelector('.gallery');
const images = ['image1.jpg','image2.JPG','image3.jpg','image4.jpg'];

images.forEach(image =>{
    const img = document.createElement('img');
    img.src = 'images/${image}';
    gallery.appendChild(img);
});