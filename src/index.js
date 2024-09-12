class main{
    listaPersonas = ["Oscar", "Jallmar", 2];

    listar (){
        this.listaPersonas.map((persona)=>{
            console.log(persona);
        })
    }
}

const jallmar = new main();
jallmar.listar();

