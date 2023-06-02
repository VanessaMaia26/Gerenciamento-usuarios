// Variáveis
var nome = document.querySelector("#exampleInputName");

nome.value = "Vanessa da Silva Maia";
nome.style.color = "red";

// Variáveis e seletores
var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#exampleInputGenderM");  // Só precisamos saber do gender que está selecionado
var gender = document.querySelector("#exampleInputGenderF");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");
// Só precisamos saber do gender que está selecionado:
document.querySelector("#form-user-create");
document.querySelector("#form-user-create[name-gender]");
document.querySelectorAll("#form-user-create[name-gender]");
document.querySelectorAll("#form-user-create[name-gender]:checked"); // Código final do gender com checked

// For Each - Laço que percorre o array para que cada item execute uma ação
var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index) {

    if (field.name == "gender") {

        if (field.checked) {

            console.log("SIM", field);
        } else {
            console.log("NÃO");
        }

    }
    // console.log(field.id, field.name, field.value, field.checked, index);
});  // Pegar um ou mais de um atributos de forma mais simplificada

// = atribuição (primeiro valor recebe valor do segundo) 10 = 10
// == comparação de valor 10 == 10
// === comparação valor e tipo (pergunta se é idêntico) 10 === "10" também atribuído para true e false


// Trabalhando com JSON: Padrão de notificação JS baseado em chave e valor 
var data = {name: "Maia", email: "vanessamaia02@outlook.com", year: 2003}