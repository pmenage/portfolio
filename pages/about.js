import Layout from '../components/layout'

import '../style.scss'

export default () => (
	<Layout title="About">
		<div class="about">
			<h1>About</h1>

			<div className='pure-g'>

				<div className='pure-u-sm-1 pure-u-md-1-2'>
					<div className='info'>
						<img src='../static/Pauline.jpg' alt="Pauline Ménage" className='pure-img image' />

						<div className='links'>
							<a href='https://github.com/pmenage' rel="noopener" target="_blank">GitHub profile</a><br />
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
			</div>
		</div>

	</Layout>
)
