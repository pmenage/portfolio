export default ({ title, image, date, technologies, description }) => (
  <div className='main pure-g'>
    <div className='pure-u-1-6'></div>
    <div className='pure-u-2-3'>
    <h2>{ title }</h2>
    <img src={ image } className='pure-img' />
    <div>{ date }</div>
    <div>{ technologies }</div>
    <div>{ description }</div>
    </div>
    <div className='pure-u-1-6'></div>
    <style jsx>{`
      .pure-img {
        float: left;
        margin-right: 2em;
      }
    `}</style>
  </div>
)
