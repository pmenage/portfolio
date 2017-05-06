import Layout from '../components/layout'
import H1 from '../components/h1'

export default () => (
  <Layout title="Contact">
    <H1 title="― About ―"></H1>

    <div className='pure-g'>

      <div className='pure-u-md-1-2'>
        <div className='left'>
          <h2>About me</h2>
          <p>Hello, I am Pauline, a software engineering student completing my fourth year at Bordeaux Graduate School, in Computer Science. I am passionate about computer science, and I spend most of my free time coding or reading about new technologies.</p>
          <p>As president of a student organization in 2016-2017, I learned how to manage a team, and take responsibility for my actions and decisions.</p>
          <p>On my personal time, I also enjoy horseback riding and playing the piano. I am always ready to learn new skills, and I enjoy self-teaching myself languages.</p>
        </div>
      </div>

      <div className='pure-u-md-1-2'>
        <div className='right'>
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
              <button type='submit' className='pure-button pure-button-primary'>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>

      <style jsx>{`
        .left {
          padding-left: 5em;
          padding-right: 5em;
        }
        .right {
          padding-left: 3em;
          padding-right: 3em;
        }
        h2 {
          font-family: Raleway;
          font-size: 30px;
          font-weight: 200;
          color: #16a085;
        }
      `}</style>

    </div>
  </Layout>
)
