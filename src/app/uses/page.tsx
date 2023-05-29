export default function Uses() {
  const h2 = "text-4xl font-semibold mb-4"
  const ul = "ml-6 list-disc"

  return (
    <div className="flex flex-col gap-11">
      <div>
        <h1 className="mb-3 text-5xl font-semibold">Uses</h1>
        <p>Liste des outils et technologies que j’utilise.</p>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className={h2}>PC / Bureau</h2>
          <ul className={ul}>
            <li>13” Macbook Air M1</li>
            <li>Écran Dell 27” 1440p</li>
            <li>Keychron K8 Pro</li>
            <li>Logitech MX Master 3</li>
            <li>Bureau assis/debout Songmics</li>
          </ul>
        </div>
        <div>
          <h2 className={h2}>Code</h2>
          <ul className={ul}>
            <li>Visual Studio Code</li>
            <li>Terminal : Warp avec `oh-my-zsh`</li>
          </ul>
        </div>
        <div>
          <h2 className={h2}>Logiciels</h2>
          <ul className={ul}>
            <li>Arc 😍</li>
            <li>Spotify</li>
            <li>Dashlane</li>
            <li>Raycast</li>
          </ul>
        </div>
        <div>
          <h2 className={h2}>Autres</h2>
          <ul className={ul}>
            <li>iPhone 13</li>
            <li>Airpods Pro</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
