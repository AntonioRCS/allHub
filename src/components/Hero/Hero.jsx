import { perfil } from '../../data/perfil'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="sobre">
      <div className="container hero__interno">
        <p className="hero__label">Desenvolvedor React Visionário</p>
        <h1 className="hero__titulo">
          Construindo o <span>Futuro</span> da Experiência Digital
        </h1>
        <p className="hero__sub">
          Transformando projetos complexos em soluções simples. Priorizando velocidade, otimização e legibilidade.
        </p>
        <p className="hero__resumo">{perfil.resumo}</p>
        <ul className="hero__skills" aria-label="Habilidades comportamentais">
          {perfil.comportamentais.map((item) => (
            <li key={item} className="tag">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
