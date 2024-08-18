import './App.css'

const Usuarios = [
  {
    nome: "João",
    endereco: "Rua do Senhor Jesus",
    bairro: "Bancários"
  },

  {
    nome: "Antonio",
    endereco: "Rua da Paz",
    bairro: "Centro"
  },

  {
    nome: "Maria Joana",
    endereco: "Rua da Liberdade",
    bairro: "Mangabeira"
  },

]

function App() {
  

  return (
    <>      
    <div>
      {Usuarios.map((usuario) => (
        <div>{usuario.nome}: {usuario.endereco} - {usuario.bairro} </div>   
      ))}
    </div>
   

    </>
)
}

export default App
