const { select } = require ('@inquirer/prompts')   // require('@inquirer/promps) = ai me devolver um objeto  de dentro do objeto vou querer apenas oque está em {select}

const start = async () => {
   
    while (true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name:"Listar",
                    value:"listar"
                },
                {
                    name:"Sair",
                    value:"sair"
                }
            ]
        })




        switch(opcao){
            case "cadastrar":
                console.log("vamos cadastrar")
                break
                case "listar":
                console.log("vamos listar")
                break
                case "sair":
                    console.log("Até a proxima!")
                    return

        }
        
    }
}

start()