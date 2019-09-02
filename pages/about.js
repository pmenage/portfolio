import Layout from '../components/layout'

export default () => (
  <Layout title="About">
    <h1>About</h1>

    <div className='pure-g'>

      <div className='pure-u-sm-1 pure-u-md-1-2'>
        <div className='info'>
          <img src='../static/Pauline.jpg' alt="Pauline Ménage" className='pure-img image' />

          <div className='links'>
            <a href='https://github.com/pmenage' rel="noopener" target="_blank">Github profile</a><br />
            <a href='https://www.linkedin.com/in/pauline-m%C3%A9nage-030479109/' rel="noopener" target="_blank">LinkedIn profile</a><br />
            <a href='https://medium.com/@pauline.menage26' rel="noopener" target="_blank">Medium blog posts</a>
          </div>
        </div>
      </div>

      <div className='pure-u-sm-1 pure-u-md-1-2'>
        <div className='about'>
          <h2>About me</h2>
          <p>Hello, I am Pauline, a freelance software engineer. I have a Master's Degree in Computer Science, from Bordeaux Graduate School of Engineering.</p>
          <p>As president of a Junior-Enterprise in 2016-2017, I learned how to manage a team, and take responsibility for my actions and decisions.</p>
          <p>On my personal time, I enjoy horseback riding and playing the piano, and spend a lot of time doing sports. I am always ready to learn new skills and enjoy learning about everything.</p>
        </div>
      </div>

      <style jsx>{`
        .pure-g {
          margin-bottom: 3em;
        }
        h1 {
          font-size: 10em;
        }
        .links {
          text-align: center;
          margin-top: 3em;
          line-height: 1.5;
          letter-spacing: normal;
        }
        a, a:visited, a:hover {
          color: #2980b9;
          text-decoration: none;
          font-family: 'Roboto Slab', serif;
          font-size: 20px;
          font-weight: 500;
        }
        .about {
          letter-spacing: normal;
          line-height: 1.5em;
          padding: 2em;
          border-radius: 1em;
          background-color: #fff;
          color: #2c3e50;
          margin-bottom: 5em;
        }
        .contact-form {
          letter-spacing: normal;
          background-color: #F8F8F8;
          background-image: url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png");
          padding: 2em;
          margin: 1em;
          border-radius: 3em;
          text-align: center;
        }
        .pure-form input {
          display: inline-block;
        }
        .contact-form button {
          margin-top: 2em;
          padding: 1em 2.5em 1em 2.5em;
          border-radius: 1.8em;
          background-color: #16a085;
          color: #fff;
        }
        .contact-form h2 {
          color: #16a085;
        }
        h2 {
          font-family: 'Roboto Slab', serif;
          font-size: 30px;
          font-weight: 500;
          letter-spacing: .03cm;
          color: #16a085;
        }
        .image {
            display: block;
            margin: 0 auto;
            margin-top: 4em;
        }
        .pure-img {
          border-radius: 100%;
          width: 15em;
        }

        @media only screen and (max-width: 568px) {
          .pure-u-sm-1{
            width: 100%
          }
        }

        @media only screen and (min-width: 568px) {
          .contact-form {
            padding: 2em 4em;
          }
        }

        @media only screen and (min-width: 768px) {
          .about {
            line-height: 1.5em;
            padding: 1em 0em 1em 1em;
            border-radius: 1em;
            margin-right: 4em;
            background-color: #fff;
            color: #2c3e50;
          }
          .contact-form {
            letter-spacing: normal;
            margin: 4em;
            background-color: none;
          }
          .info {
            margin-left: 4em;
          }
        }

        @media only screen and (min-width: 900px) {
          .contact-form {
            padding: 2em 8em;
          }
        }

        @media only screen and (min-width: 1000px) {
          .pure-g {
            width: 1000px;
            margin: 0 auto;
          }
        }
      `}</style>

    </div>

  </Layout>
)
