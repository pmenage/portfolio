import Layout from '../components/layout'

export default () => (
  <Layout title="Contact">
    <h1>Hi, I am Pauline.</h1>

    <div className='pure-g'>

      <div className='pure-u-md-1-2'>
        <p>Hi, I am Pauline, a software engineering student completing my fourth year at Bordeaux Graduate School, in Computer Science. I am passionate about computer science, and I spend most of my free time coding or reading about new technologies.</p>
        <p>As president of a student organization in 2016-2017, I learned how to manage a team, and take responsibility for my actions and decisions.</p>
        <p>On my personal time, I also enjoy horseback riding and playing the piano. I am always ready to learn new skills, and I enjoy self-teaching myself languages.</p>
      </div>

      <div className='pure-u-md-1-2'>
        <h2>Say hi.</h2>
        <form className="pure-form pure-form-aligned">
          <fieldset>
            <div className='pure-control-group'>
              <label for='name'>Name</label>
              <input id='name' type='text' placeholder='Name' />
            </div>
            <div className="pure-control-group">
              <label for="email">Email Address</label>
              <input id="email" type="email" placeholder="Email Address" />
            </div>
            <div className='pure-control-group'>
              <label for='message'>Message</label>
              <textarea id='message' rows='10' cols='23' placeholder='Write your message here' />
            </div>
            <button type='submit' className='pure-button pure-button-primary'>Submit</button>
          </fieldset>
        </form>
      </div>

    </div>
  </Layout>
)
