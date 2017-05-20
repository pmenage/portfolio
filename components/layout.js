import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Home' }) => (

  <div>

    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Alegreya+Sans+SC|Lato|Raleway" />
      <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/grids-responsive-min.css" />
      <style>{`
        body {
          background-color: #16a085;
        }
        h1 {
          font-family: Raleway;
          font-size: 48px;
          font-weight: 500;
          text-align: center;
          margin: 1.1em;
          color: #fff;
        }
      `}</style>
    </Head>

    <header>
      <nav>
        <div className='pure-menu pure-menu-horizontal'>
          <ul className='pure-menu-list'>
            <li className='pure-menu-list first-link'><Link href='/'><a className='pure-menu-link menu-link'>Home</a></Link></li>
            <li className='pure-menu-list'><Link href='/projects'><a className='pure-menu-link menu-link'>Work</a></Link></li>
            <li className='pure-menu-list'><Link href='/contact' as='/contact'><a className='pure-menu-link menu-link'>Contact</a></Link></li>
          </ul>
        </div>
        <style jsx>{`
          .pure-menu {
            background-color: #fff;
            height: 6em;
            text-align: center;
          }
          .pure-menu-link {
            font-size: 20px;
            display: inline;
            color: #34495e;
          }
          .pure-menu-list {
            padding-top: 1.1em;
          }
          .pure-menu-link:hover {
            background: none;
            color: #16a085;
          }
          .menu-link:hover::after {
            content:"―";
            position:absolute;
            left: 40%;
            right: 40%;
            top: 2em;
            bottom:0;
          }
        `}</style>
      </nav>
    </header>

    { children }

    <footer>
      <div className="pure-g">
        <div className="pure-u-1 footer">
          <span><Link href='/'><a className='link'>Home</a></Link></span>
          <span><Link href='/projects'><a className='link'>Work</a></Link></span>
          <span><Link href='/contact' as='/contact'><a className='link'>Contact</a></Link></span>
        </div>
        <style jsx>{`
          .footer {
            background-color: #34495e;
            margin-top: 2em;
            padding: 2em;
            text-align: center;
          }
          span {
            margin-right: 2em;
          }
          .link {
            text-decoration: none;
            color: #fff;
          }
        `}</style>
      </div>
    </footer>

  </div>
)
