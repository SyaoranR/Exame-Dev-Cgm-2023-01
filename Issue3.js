var vet = new Array();

function addDados(){
    getDados();
    vet.push({
        nome:document.getElementById('nome').value,
        idade:document.getElementById('idade').value,
        email:document.getElementById('email').value,
        tel:document.getElementById('tel').value,
        endereco:document.getElementById('endereco').value,
        cep:document.getElementById('cep').value
    });

    localStorage.setItem("localData", JSON.stringify(vet));
    mostrarDados();
}

function getDados(){
    var str = localStorage.getItem("localData");
    if (str != null){
        vet = JSON.parse(str);
    }   
}

function delDados(){
    localStorage.clear();
}

function mostrarDados(){
    getDados();

    var resistance = document.getElementById('freedom');
    
    var x = resistance.rows.length;

    while(--x){
        resistance.deleteRow(x);
    }    
    
    for (i = 0; i < vet.length; i++){
        var linha = `<tr>
                        <td>${vet[i].nome}</td>
                        <td>${vet[i].idade}</td>
                        <td>${vet[i].email}</td>
                        <td>${vet[i].tel}</td>
                        <td>${vet[i].endereco}</td>
                        <td>${vet[i].cep}</td>                
                     </tr>`;
        resistance.innerHTML += linha;
    }    

}

/*
var characters = [
        {
            nome: "Monkey D. Luffy",
            idade: "19 anos",
            email: "mdl@gmail.com",
            telefone: "99999997777",
            endereco: "Vila Foosha, Ilha Dawn, East Blue",
            cep: "49000000"
        },
        {
            nome: "Saitama",
            idade: "24 anos",
            email: "saitama@gmail.com",
            telefone: "99988887777",
            endereco: "Z-City",
            cep: "49000000"
        },
        {
            nome: "Kirigaya Kazuto",
            idade: "17 anos",
            email: "kirito@gmail.com",
            telefone: "99995557777",
            endereco: "Setagaya",
            cep: "49000000"   
        },
        {
            nome: "Naruto Uzumaki",
            idade: "17 anos",
            email: "uzumaki_naruto@gmail.com",
            telefone: "99885557777",
            endereco: "Vila de Konoha",
            cep: "49000000"   
        }
    ];
    
    addPersona(characters);



    function addPersona(dado){
        var resistance = document.getElementById('freedom');

        for (var i = 0; i < dado.length; i++){
            var linha = `<tr>
                            <td>${dado[i].nome}</td>
                            <td>${dado[i].idade}</td>
                            <td>${dado[i].email}</td>
                            <td>${dado[i].telefone}</td>
                            <td>${dado[i].endereco}</td>
                            <td>${dado[i].cep}</td>
                      </tr>`;
            resistance.innerHTML += linha;
        }
    }
*/

/*

function addPersona(){
    var resistance = document.getElementById('freedom');

    var linha = resistance.insertRow();
    var cell1 = linha.insertCell();
    var cell2 = linha.insertCell();
    var cell3 = linha.insertCell();
    var cell4 = linha.insertCell();
    var cell5 = linha.insertCell();
    var cell6 = linha.insertCell();

    cell1.innerHTML = document.getElementById('nome').value;
    cell2.innerHTML = document.getElementById('idade').value;
    cell3.innerHTML = document.getElementById('email').value;
    cell4.innerHTML = document.getElementById('tel').value;
    cell5.innerHTML = document.getElementById('endereco').value;
    cell6.innerHTML = document.getElementById('cep').value;

}
*/

/*

function mostrarDados(){
    getDados();

    var resistance = document.getElementById('freedom');
    
    for (i = 0; i < vet.length; i++){
        var cell1 = linha.insertCell();
        var cell2 = linha.insertCell();
        var cell3 = linha.insertCell();
        var cell4 = linha.insertCell();
        var cell5 = linha.insertCell();
        var cell6 = linha.insertCell();

        cell1.innerHTML = vet[i].nome;
        cell2.innerHTML = vet[i].idade;
        cell3.innerHTML = vet[i].email;;
        cell4.innerHTML = vet[i].telefone;
        cell5.innerHTML = vet[i].endereco;
        cell6.innerHTML = vet[i].cep;
       
    }    

}
*/