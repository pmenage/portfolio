import React from 'react'
import Layout from '../components/layout'
import trainings from '../data/trainings'

import '../style.scss'

const Training = ({ name, role, date, technologies, description }) => (
    <div className='training'>
        <div className='date-container'>
            <div className='date'>{date}</div>
            <i class='fas fa-caret-right'></i>
            <div className='red-circle'></div>
        </div>
        <div className='info'>
            <h2>{role}</h2>
            <h3>{name}</h3>
            <div className='description'>{description}</div>
            <div className='tech'>
                {
                    technologies.map((tech, i) => (
                        <span className='technology' key={i}>{tech}</span>
                    ))
                }
            </div>
        </div>
    </div>
)

const Trainings = () => (
    <Layout title="Teaching">

        <h1>Teaching</h1>
        <div className='trainings'>
            {
                trainings.map((training, i) => (
                    <Training
                        key={i}
                        name={training.name}
                        role={training.role}
                        date={training.date}
                        technologies={training.technologies}
                        description={training.description}
                    />
                ))
            }
        </div>
    </Layout>
)

export default Trainings