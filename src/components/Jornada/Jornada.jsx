import { experiencias } from '../../data/experiencias'
import { tecnologias, educacao, certificados, atividades } from '../../data/perfil'
import './Jornada.css'

function IconeTerminal() {
  return (
    <svg className="exp__icone" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </svg>
  )
}

function Jornada() {
  return (
    <>
      <section className="jornada" id="experiencias">
        <div className="container">
          <h2 className="titulo-secao">Minha Jornada</h2>
          <div className="jornada__grid">
            <div className="jornada__lista">
              {experiencias.map((exp) => (
                <article className="card exp" key={`${exp.empresa}-${exp.cargo}`}>
                  <div className="exp__topo">
                    <div>
                      <h3 className="exp__cargo">{exp.cargo}</h3>
                      <p className="exp__empresa">{exp.empresa}</p>
                      <p className="exp__periodo">{exp.periodo}</p>
                    </div>
                    <ul className="exp__tags">
                      {exp.tags.map((t) => <li key={t} className="tag">{t}</li>)}
                    </ul>
                    <IconeTerminal />
                  </div>
                  <p className="exp__desc">{exp.descricao}</p>
                </article>
              ))}
            </div>

            <aside className="jornada__lateral">
              <section className="card lateral">
                <h3 className="lateral__titulo">Tecnologias</h3>
                <ul className="lateral__chips">
                  {tecnologias.map((t) => <li key={t} className="chip">{t}</li>)}
                </ul>
              </section>

              <section className="card lateral">
                <h3 className="lateral__titulo">Educação</h3>
                <ul className="lateral__lista">
                  {educacao.map((e) => (
                    <li key={e.titulo}>
                      <strong>{e.titulo}</strong>
                      <span>{e.local}</span>
                      <span>{e.periodo}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card lateral">
                <h3 className="lateral__titulo">Certificados e Diplomas</h3>
                <ul className="lateral__lista">
                  {certificados.map((c) => (
                    <li key={c.titulo}>
                      <strong>{c.titulo}</strong>
                      <span>{c.local}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <section className="atividades">
        <div className="container">
          <h2 className="titulo-secao">Além do código</h2>
          <div className="atividades__grid">
            {atividades.map((a) => (
              <article className="card atividade" key={a.titulo}>
                <h3>{a.titulo}</h3>
                <p className="atividade__periodo">{a.periodo}</p>
                <p>{a.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Jornada
