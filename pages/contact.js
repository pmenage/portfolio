import Layout from '../components/layout'
import H1 from '../components/h1'

export default () => (
  <Layout title="Contact">
    <H1>About</H1>

    <div className='pure-g'>

      <div className='pure-u-sm-1 pure-u-md-1-2'>
        <div className='info'>
          <img src='../static/photo.jpg' className='pure-img' />
          <div className='links'>
            <a href='https://github.com/pmenage'>Github profile</a><br />
            <a href='https://www.linkedin.com/in/pauline-m%C3%A9nage-030479109/'>Linkedin profile</a><br />
            <a href='#'>Blog posts on medium</a>
          </div>
        </div>
      </div>
      
      <div className='pure-u-sm-1 pure-u-md-1-2'>
        <div className='about'>
          <h2>About me</h2>
          <p>Hello, I am Pauline, a software engineering student completing my fifth year at Bordeaux Graduate School of Engineering, in Computer Science. I am passionate about computer science, and I spend most of my free time coding or reading about new technologies.</p>
          <p>As president of a Junior-Enterprise in 2016-2017, I learned how to manage a team, and take responsibility for my actions and decisions.</p>
          <p>On my personal time, I enjoy horseback riding and playing the piano, and spend a lot of time doing sports. I am always ready to learn new skills and enjoy learning about everything.</p>
        </div>
      </div>

      <div className='pure-u-1'>
        <div className='contact-form'>
          <h2>Send me a message</h2>
          <form className='pure-form pure-form-aligned' action='/contactProcess' method='post'>
            <fieldset>
              <div className='pure-control-group'>
                <input className='pure-input-2-3' id='name' name='name' type='text' placeholder='Your name' />
              </div>
              <div className="pure-control-group">
                <input className='pure-input-2-3' id="email" name='email' type="email" placeholder='Your email' />
              </div>
              <div className='pure-control-group'>
                <textarea className='pure-input-2-3' id='message' name='message' placeholder="You can write your message here, I'm looking forward to hear from you!" rows='10' />
              </div>
              <button type='submit' className='pure-button pure-button-primary'>Send</button>
              
            </fieldset>
          </form>
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
          font-weight: 700;
        }
        .about {
          letter-spacing: normal;
          line-height: 1.5em;
          padding: 2em;
          border-radius: 1em;
          background-color: #fff;
          color: #2c3e50;
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
        img {
            display: block;
            margin: 0 auto;
            margin-top: 4em;
        }
        .pure-img {
          border-radius: 100%;
          width: 15em;
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
