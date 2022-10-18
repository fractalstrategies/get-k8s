export default function Links(props) {
  return (
    <p>
      <a href="#" onClick={() => props.setPage('home')}>
        HOME
      </a>

      <span> | </span>
      <a href="#" onClick={() => props.setPage('services')}>
        SERVICES
      </a>

      <span> | </span>
      <a href="#" onClick={() => props.setPage('todo')}>
        TODO
      </a>
    </p>
  )
}