import { useRef } from 'react'
import './App.css'

const signs = [
  { title: 'The air goes still', text: 'Not a leaf moves. Even the ceiling fan sounds tired.' },
  { title: 'Peacocks start calling', text: 'Somewhere past the fields, they know before we do.' },
  { title: 'Ants march indoors', text: 'A thin black line along the kitchen wall, carrying everything.' },
  { title: 'The light turns yellow', text: 'The whole street looks like an old photograph.' },
  { title: 'Clothes come off the line', text: 'Every terrace at once, someone running with a bucket.' },
  { title: 'The smell arrives first', text: 'Wet earth from a village away, before a single drop.' },
]

const moments = [
  { time: '11:40', name: 'Heat', text: 'The sky is white. The road shimmers. Nobody goes out.' },
  { time: '14:15', name: 'The wind turns', text: 'Dust lifts off the road. The first clouds roll in, low and heavy.' },
  { time: '15:02', name: 'First drop', text: 'One fat drop on the window. Then another. Everyone looks up.' },
  { time: '15:05', name: 'Downpour', text: 'The whole world goes grey and loud, and the heat is finally over.' },
]

const stalls = [
  { name: 'Cutting chai', hindi: 'चाय', text: 'Half a glass, too sweet, too hot, perfect.' },
  { name: 'Hot pakoras', hindi: 'पकौड़े', text: 'Onion, potato, chilli. The queue forms the moment it rains.' },
  { name: 'Umbrella seller', hindi: 'छाता', text: 'He appears out of nowhere, every single year.' },
  { name: 'Paper boats', hindi: 'नाव', text: 'Folded from old notebooks, raced down the gutter.' },
  { name: 'Roasted bhutta', hindi: 'भुट्टा', text: 'Charred corn, lemon, salt, and smoke in the rain.' },
  { name: 'Soaked autos', hindi: 'ऑटो', text: 'Plastic flaps down, meter running, everyone squeezed in.' },
]

const drops = Array.from({ length: 40 })

function App() {
  const appRef = useRef(null)

  return (
    <main className="app" ref={appRef}>
      <div className="gauge" aria-hidden="true">
        <div className="gauge-fill"></div>
      </div>

      {/* 1. Hero */}
      <section className="hero">
        <p className="label">June · 44°C · no rain in sight</p>
        <h1 className="hero-title">Barish</h1>
        <p className="hero-sub">
          For weeks the sky does nothing. Then one afternoon, it does everything.
        </p>
        <p className="label hero-hint">Scroll to bring the rain ↓</p>
      </section>

      {/* 2. Signs the rain is coming */}
      <section className="signs">
        <div className="section-head">
          <p className="label">Before</p>
          <h2 className="section-title">Signs the rain is coming</h2>
        </div>

        <ul className="sign-list">
          {signs.map((sign, i) => (
            <li className="sign" key={sign.title}>
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="sign-title">{sign.title}</h3>
              <p className="sign-text">{sign.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. The window: one afternoon */}
      <section className="window-scene">
        <div className="window">
          <div className="sky">
            <div className="sun"></div>
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>
            <div className="cloud cloud-3"></div>
            <div className="rain">
              {drops.map((_, i) => (
                <span className="drop" key={i} style={{'--i': i}}></span>
              ))}
            </div>
          </div>
          <div className="window-bars"></div>
        </div>

        <div className="moments">
          {moments.map((moment) => (
            <article className="moment" key={moment.time}>
              <p className="label">{moment.time}</p>
              <h2 className="moment-name">{moment.name}</h2>
              <p className="moment-text">{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. The street */}
      <section className="street">
        <div className="section-head">
          <p className="label">After</p>
          <h2 className="section-title">The street comes alive</h2>
        </div>

        <div className="street-track">
          {stalls.map((stall) => (
            <figure className="stall" key={stall.name}>
              <div className="stall-art">
                <span className="stall-hindi" lang="hi">{stall.hindi}</span>
              </div>
              <figcaption>
                <h3 className="stall-name">{stall.name}</h3>
                <p className="stall-text">{stall.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 5. Outro */}
      <section className="outro">
        <p className="label">Petrichor (n.)</p>
        <h2 className="outro-line">
          The smell of rain on dry earth. Every year, it feels like the first time.
        </h2>
        <p className="label">Made by Harshita · 2026</p>
      </section>

      <div className="ripple" aria-hidden="true"></div>
    </main>
  )
}

export default App