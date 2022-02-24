
interface TesteProps {
  name: string;
}
export function Teste({name} :TesteProps) {

  return (
    <h1>{name}</h1>
  )
}