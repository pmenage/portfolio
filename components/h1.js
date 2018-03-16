export default ({ children }) => (
  <div>
    <h1>{ children }</h1>
    <style jsx>{`
      h1 {
        /*font-family: Raleway;*/
        font-family: 'Roboto Slab', serif;
        letter-spacing: .05cm;
        font-size: 50px;
        font-weight: 300;
        text-align: center;
        margin: 1em;
        color: #34495e;
      }
    `}</style>
  </div>
)