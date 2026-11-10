import { projetos } from '../../data/projetos'
import './Projetos.css'

function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <div className="container">
        <h2 className="titulo-secao">Projetos</h2>
        <div className="projetos__grid">
          {projetos.map((p) => (
            <a className="card projeto" key={p.nome} href={p.link} target="_blank" rel="noreferrer">
              <h3>{p.nome}</h3>
              <p>{p.descricao}</p>
              <ul className="projeto__tags">
                {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
