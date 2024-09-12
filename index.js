 const {select, input, checkbox} = require ('@inquirer/prompts')
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

   const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices:[...metas],
        instructions:false,
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selcionada!")
        return
    }
    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluida(s)')
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
                break
        }
    }
start ()
}
