import Button from '../Button';
import DropDown from '../DropDown';
import TextField from '../TextField';
import './form.css'

const Form = () => {
  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const onSave = (event) => {
    event.preventDefault()
    console.log("Form foi submetido")
  }

  return (
    <section className="my-form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu nome" />
        <TextField required={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropDown required={true} label="Times" itens={teams}></DropDown>
        <Button>Criar card</Button>
      </form>
    </section>
  );
}

export default Form;