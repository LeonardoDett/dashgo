
type Teste = {
  dados: string[];
  usuario: User;
}

type User = {
  nome: string;
  idade?: number;
}


function mapearString({}){
  
  const sla = arrayString.map((value) => {
    return  value.toLowerCase();
  })

}

let teste = '10'

mapearString(teste)