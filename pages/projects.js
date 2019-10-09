import React from 'react'
import Layout from '../components/layout'
import projects from '../data/projects'

import '../style.scss'

const Project = ({ title, image, technologies, description, github, website }) => (
	<div className='projects'>
		<div className='main-pure-g'>
			<div className='pure-u-sm-1 pure-u-md-1-2'>
				<div className='image'>
					<img src={image} alt={title} className='pure-img' />
				</div>
			</div>
			<div className='pure-u-sm-1 pure-u-md-1-2'>
				<div className='information'>
					<span className='title'>{title}</span>
					<div className='tech'>
						{
							technologies.map((tech, i) => (
								<span className='technology' key={i}>{tech}</span>
							))
						}
						<div className='description'>{description}</div>
						{github && <a rel="noopener" target="_blank" href={github} className='pure-button github-button'>Github</a>}
						{website && <a rel="noopener" target="_blank" href={website} className='pure-button'>Website</a>}
					</div>
				</div>
			</div>
		</div>
	</div>
)


const Projects = () => (
	<Layout title="Work">

		<h1>My projects</h1>
		{
			projects.map((project, i) => (
				<Project
					key={i}
					title={project.name}
					image={project.image}
					technologies={project.technologies}
					description={project.description}
					github={project.github}
					website={project.website}>
				</Project>
			))
		}
	</Layout>
)

export default Projects