import Layout from '../components/layout'

export default () => (
  <Layout title="Contact">
    <h1>About</h1>

    <div className='pure-g'>

      <div className='pure-u-sm-1 pure-u-md-1-2'>
        <div className='about'>
          <h2>About me</h2>
          <p>Hello, I am Pauline, a software engineering student completing my fourth year at Bordeaux Graduate School, in Computer Science. I am passionate about computer science, and I spend most of my free time coding or reading about new technologies.</p>
          <p>As president of a student organization in 2016-2017, I learned how to manage a team, and take responsibility for my actions and decisions.</p>
          <p>On my personal time, I also enjoy horseback riding and playing the piano. I am always ready to learn new skills, and I enjoy self-teaching myself languages.</p>
        </div>
      </div>

      <div className='pure-u-sm-1 pure-u-md-1-2'>
        <div className='contact-form'>
          <h2>Send me a message</h2>
          <form className='pure-form pure-form-aligned' action='/contactProcess' method='post'>
            <fieldset>
              <div className='pure-control-group'>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' placeholder='Name' />
              </div>
              <div className="pure-control-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name='email' type="email" placeholder="Email Address" />
              </div>
              <div className='pure-control-group'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' rows='10' cols='23' placeholder='Write your message here' />
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
        .about {
          letter-spacing: normal;
          line-height: 1.5em;
          margin-left: 1em;
          margin-right: 1em;
          padding: .8em;
          border-radius: 1em;
          background-color: #fff;
          color: #2c3e50;
        }
        .contact-form {
          letter-spacing: normal;
          margin-left: 1em;
          color: #fff;
          background-color: none;
        }
        .contact-form button {
          margin-left: 1em;
          background-color: #16a085;
          color: #fff;
          border: solid #fff .1em;
        }
        .contact-form h2 {
          color: #fff;
        }
        h2 {
          font-family: Raleway;
          font-size: 30px;
          font-weight: 200;
          color: #16a085;
        }
        @media only screen and (min-width: 768px) {
          .about {
            line-height: 1.5em;
            margin-left: 4em;
            margin-right: 4em;
            padding: 1em 4em 2em 4em;
            border-radius: 1em;
            background-color: #fff;
            color: #2c3e50;
          }
          .contact-form {
            letter-spacing: normal;
            margin-left: 4em;
            color: #fff;
            background-color: none;
          }
          .contact-form button {
            margin-left: 11em;
          }
        }
      `}</style>

    </div>

  </Layout>
)
