import React from 'react'
import Layout from '../components/layout'
import projects from '../data/projects'

const Project = ({ title, image, technologies, description, github }) => (
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
					{github ? <a rel="noopener" target="_blank" href={github} className='pure-button'>Github</a> : null}
				</div>
			</div>
		</div>
		<style jsx>{`
			.title {
				font-family: 'Roboto Slab', serif;
				letter-spacing: .03cm;
				font-size: 30px;
				font-weight: 500;
				color: #2c3e50;
			}

			div {
				color: #34495e;
			}

			.pure-img {
				box-shadow: 0 0 .7em #bdc3c7;
				position: relative;
			}

			.image {
				padding: 1em;
			}

			.information {
				padding: 1em;
				text-align: center;
			}

			.tech {
				margin-top: 1em;
			}

			.technology {
				font-family: 'Roboto Slab';
				color: #3498db;
				margin-right: 5px;
				font-size: 19px;
				font-weight: 500;
			}

			.description {
				margin-top: 1em;
				line-height: 1.4em;
			}

			.pure-button {
				margin-top: 1.5em;
				padding: .8em 1.5em .8em 1.5em;
				border-radius: 1.8em;
				background-color: #16a085;
				color: #fff;
			}

			@media only screen and (min-width: 768px) {
				.image {
				padding: 2em 1em 2em 2em;
				}

				.information {
				padding: 2em 2em 2em 1em;
				text-align: left;
				}
			}

			@media only screen and (min-width: 1000px) {
				.main-pure-g {
				width: 1000px;
				margin: 0 auto;
				}

				.title {
				font-size: 30px;
				padding-bottom: .3em;
				}

				.image {
				padding: 2em;
				}

				.information {
				padding: 2em;
				}
			}
    `}</style>
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
					github={project.github}>
				</Project>
			))
		}
	</Layout>
)

export default Projects