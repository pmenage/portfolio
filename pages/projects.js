import React from 'react'
import Layout from '../components/layout'
import projects from '../data/projects'
import { Link } from  '../routes'

const Project = ({ title, image, slug, technologies, description, github }) => (
  <div className='main pure-g'>
    <div className='pure-u-1-6'></div>
    <div className='pure-u-2-3'>
      <img src={ image } className='pure-img' />
      <div className="gray-on-hover">
        <div className="view">
          <span className='view-more'>
            <Link route='project' params={{ slug }}><a>View more</a></Link>
          </span>
        </div>
      </div>
      <div className="description">
        <span className="title">{ title }</span>
        <span className="tech">
        {
          technologies.map( (tech, i) => (
            <span className="technology">{ tech }</span>
          ))
        }
        </span>
      </div>
    </div>
    <div className='pure-u-1-6'></div>
    <style jsx>{`
      .pure-u-2-3 {
        margin-bottom: 5em;
        box-shadow: 0 0 .5em #1abc9c;
        position: relative;
      }
      .gray-on-hover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 1.5em;
        background-color: none;
        text-align: center;
      }
      .view {
        position: relative;
        top: 45%
      }
      .view-more {
        padding: 1.2em 2.3em 1.2em 2.3em;
        border-radius: .5em;
        background-color: #1abc9c;
        opacity: 0;
      }
      .view-more > a {
        text-decoration: none;
        font-family: Raleway;
        color: #2c3e50;
        font-size: 18px;
        font-weight: 700;
      }
      .gray-on-hover:hover {
        background-color: rgba(52, 73, 94, 0.7);
        -webkit-transition: .5s ease-in-out;
      }
      .gray-on-hover:hover .view-more {
        opacity: 1;
        -webkit-transition: 1s ease-in-out;
      }
      .description {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 1.5em;
        background-color: #bdc3c7;
      }
      .title {
        font-family: Raleway;
        font-size: 30px;
        font-weight: 700;
        color: #2c3e50;
      }
      div {
        color: #34495e;
      }
      .tech {
        margin-top: .5em;
        float: right;
        margin-bottom: 0;
      }
      .technology {
        margin-bottom: 0;
        padding: .4em;
        border-radius: .5em;
        margin-right: 1em;
        background-color: #fff;
      }
    `}</style>
  </div>
)


const Projects = () => (
  <Layout title="Work">

    <h1>Some of my projects</h1>
    {
      projects.map( (project, i) => (
        <Project
          title={ project.name }
          image={ project.image }
          slug={ project.slug }
          technologies={ project.technologies }
          description={ project.description }
          github={ project.github }>
        </Project>
      ))
    }
  </Layout>
)

export default Projects