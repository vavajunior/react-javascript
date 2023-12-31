import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoSalvarForm = (item) => {    
    setColaboradores([...colaboradores, item])
  }

  const times = [
    { nome: "Programação", corPrimaria: "#57C278", corSecundaria: "#D9F7E9" },
    { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
    { nome: "Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
    { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
    { nome: "UX e Design", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
    { nome: "Mobile", corPrimaria: "#FFBA05", corSecundaria: "#FFF5D9" },
    { nome: "Inovação e Gestão", corPrimaria: "#FF8A29", corSecundaria: "#FFEEDF" }
  ];

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(t => t.nome)} aoSalvar={item => aoSalvarForm(item)} />
      <section>
        {
          times.map(time =>
            <Time key={time.nome}
              nome={time.nome} colaboradores={colaboradores.filter(item => item.time === time.nome)}
              corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)
        }
      </section>
      <Rodape />
    </div>
  );
}

export default App;