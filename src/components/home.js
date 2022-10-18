import logo from '../images/k8s-logo.webp'

export default function Home(props) {
  return (
    <div>

      <img src={logo} className="App-logo" alt="logo" />

      <p>
        Get started with <code>Kubernetes</code> and save ⏱💰😭.
      </p>

      <a
        className="App-link"
        href="/"
        // target="_blank"
        rel="noopener noreferrer"
        onClick={() => props.setPage('services')}
      >
        Learn k8s with us!
      </a>

      <br />

    </div>
  )
}
