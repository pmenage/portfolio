export default ({ title }) => (
  <div>
    <h1>{ title }</h1>
    <style jsx>{`
      h1 {
        font-family: Raleway;
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        margin: 1em;
        color: #fff;
      }
    `}</style>
  </div>
)
