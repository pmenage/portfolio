export default ({ title, image, technologies, description, github }) => (
  <div className='main pure-g'>
    <div className='pure-u-1-6'></div>
    <div className='pure-u-2-3'>
      <img src={ image } className='pure-img' />
      <h2>{ title }</h2>
      <div className="tech">
      {
        technologies.map( (tech, i) => (
          <span className="technology">{ tech }</span>
        ))
      }
      </div>
      <div>{ description }</div>
    </div>
    <div className='pure-u-1-6'></div>
    <style jsx>{`
      .pure-u-2-3 {
        background-color: #fff;
        padding: 3em;
        margin-bottom: 3em;
        box-shadow: 0 0 .5em #fff;
      }
      h2 {
        font-family: Raleway;
        font-size: 30px;
        font-weight: 200;
        color: #16a085;
      }
      div {
        color: #34495e;
      }
      .pure-img {
        float: left;
        margin-right: 3em;
      }
      .tech {
        margin-bottom: 1em;
      }
      .technology {
        border: .1em solid #16a085;
        padding: .3em;
        border-radius: .5em;
        margin-right: 1em;
      }
    `}</style>
  </div>
)
