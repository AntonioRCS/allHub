import { contato } from '../../data/contato'
import './Contato.css'

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="container contato__interno">
        <h2 className="titulo-secao">Vamos conversar?</h2>
        <p className="contato__texto">
          Estou aberto a oportunidades como desenvolvedor front-end. Fale comigo pelo canal que preferir.
        </p>
        <div className="contato__botoes">
          <a className="contato__botao contato__botao--principal" href={`mailto:${contato.email}`}>
            {contato.email}
          </a>
          <a className="contato__botao" href={`https://wa.me/${contato.telefoneLink}`} target="_blank" rel="noreferrer">
            {contato.telefone}
          </a>
          <a className="contato__botao" href={contato.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contato
