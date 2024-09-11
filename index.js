const { select,input } = require ('@inquirer/prompts')   // require('@inquirer/promps) = ai me devolver um objeto  de dentro do objeto vou querer apenas oque está em {select}

   let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
   }

   let metas = [meta]

   const cadastrarMeta = async () => {
    const meta = await input({message:"Digite a meta:"})
    
    if(meta.length == 0) {
        console.log('A meta está vazia')
        return
    }

    metas.push(
        { value: meta, checked: false}
    )
   }
   const start = async() => {

        while(true ){


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
                await cadastrarMeta()
                console.log(metas)
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