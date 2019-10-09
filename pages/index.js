import Layout from '../components/layout'

import '../style.scss'

export default () => (
    <Layout>
        <div className='resume'>
            <div className='pure-g body'>
                <div className='pure-u-1'>
                    <div id='title'>
                        <div id='titlecontactleft'>
                            66 Rue Denfert Rochereau<br />
                            92100 Boulogne-Billancourt<br />
                            France
                        </div>

                        <div id='titlecontactright'>
                            pauline.menage26@gmail.com<br />
                            paulinemenage.com<br />
                            github.com/pmenage
                        </div>

                        <h1>Pauline Ménage</h1>

                        <div className='titletop'>
                            <div>Freelance Software Engineer</div>
                            <div>Master's Degree</div>
                        </div>

                        <div id='looking'>
                            Looking for remote freelance opportunities
                        </div>
                    </div>

                    <div id='page_wrap'>
                        <div id='left'>
                            <div>
                                <h2>Technologies</h2>
                                <div><h3>Web <small>(front-end)</small></h3><div>React, Angular, Vue, Bootstrap</div></div>
                                <div><h3>Web <small>(back-end)</small></h3><div >Node.js, PHP, MongoBD, MySQL, PostgreSQL</div></div>
                                <div><h3>Mobile</h3><div>React Native, Android</div></div>
                                <div><h3>Cloud / Devops</h3><div >Google Cloud Platform, Amazon Web Services, Docker, Kubernetes</div></div>
                                <div><h3>System</h3><div>C, Go, C#, .NET Core, Java, Python</div></div>
                            </div>

                            <div>
                                <h2>Volunteering</h2>
                                <div className='experience'>
                                    <h3>President of a Junior-Enterprise - AEI</h3>
                                    <div className='row'>
                                        <div>Bordeaux, France</div>
                                        <div className='date'>// April 2016 – April 2017</div>
                                    </div>
                                    <ul>
                                        <li>Managed 23 collaborators</li>
                                        <li>Established middle- and long-term strategies</li>
                                        <li>Negotiated partnerships</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2>Projects</h2>

                                <div className='experience'>
                                    <h3>3<sup>rd</sup> place in the Atos IT Challenge 2017</h3>
                                    <div>Created a ticket selling mobile <a target='_blank' rel="noopener" href='https://www.atositchallenge.net/edition-2017/'>app</a> based on the Ethereum blockchain</div>
                                </div>

                                <div className='experience'>
                                    <h3>Followed a Machine Learning MOOC</h3>
                                    <div>Stanford University - 2017</div>
                                </div>

                                <div className='experience'>
                                    <h3>Open-source projects</h3>
                                    <ul>
                                        <li>Video game (Java, Maven, Processing)</li>
                                        <li>Chatbot to get city bikes (Golang, Kubernetes)</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2>Languages</h2>
                                <div className='language row'><h3>French</h3><div>- Mother tongue</div></div>
                                <div className='language row'><h3>English</h3><div>- Bilingual <small>(5 years in the USA)</small></div></div>
                                <div className='language row'><h3>Spanish</h3><div>- Good working knowledge</div></div>
                            </div>

                            <div>
                                <h2>Interests</h2>
                                <ul>
                                    <li>Horseback riding <small>Galop&nbsp;7, competitions</small></li>
                                    <li>Piano <small>7 years</small></li>
                                    <li>Debate club</li>
                                </ul>
                            </div>

                            <div id='contact'>
                                <h2>Contact</h2>
                                <div className='titlecontact'>
                                    66 Rue Denfert Rochereau<br />
                                    92100 Boulogne-Billancourt<br />
                                    France
                                </div>

                                <div className='titlecontact'>
                                    paulinemenage.com<br />
                                    <a href="https://github.com/pmenage" rel="noopener" target="_blank">github.com/pmenage</a><br />
                                    +33 (0)6 45 47 42 43<br />
                                    pauline.menage26@gmail.com
                                </div>
                            </div>
                        </div>
                        <div id='right'>
                            <div>
                                <h2>Experience</h2>

                                <div className='experience'>
                                    <h3>Freelance Software Engineer</h3>
                                    <div>January 2019 - present</div>
                                    <ul>
                                        <li>Uppiz <span className='date'>// Angular, Node.js</span></li>
                                        <li>HoloMake <span className='date'>// React, Firebase, Google App Engine</span></li>
                                    </ul>
                                </div>

                                <div className='experience'>
                                    <h3>Mentor and course creator - OpenClassrooms</h3>
                                    <div>January 2019 - present</div>
                                    <ul>
                                        <li>Course creator <span className='date'>// Visual Studio and unit testing</span></li>
                                        <li>Mentor <span className='date'>// HTML, CSS, PHP, JavaScript, MySQL</span></li>
                                        <li>Technical proofreader <span className='date'>// ASP.NET Core</span></li>
                                    </ul>
                                </div>

                                <div className='experience'>
                                    <h3>Software Engineer - Thermo Fisher Scientific</h3>
                                    <div>Bordeaux, France <span className='date'>// February – December 2018</span></div>
                                    <div>Angular, .NET Core, PostgreSQL, Docker, Kubernetes</div>
                                    <ul>
                                        <li>Developed realtime comments and annotations</li>
                                        <li>Created a file sharing functionality</li>
                                        <li>Deployed the website with Docker and Kubernetes</li>
                                    </ul>
                                </div>

                                <div className='experience'>
                                    <h3>Software Engineer - Unacast</h3>
                                    <div>Oslo, Norway <span className='date'>// June – September 2017</span></div>
                                    GCP, AWS, Kubernetes, Docker, Golang
                                    <ul>
                                        <li>Created a pipeline to transfer files from S3 to BigQuery</li>
                                        <li>Automated tasks with a Slack chatbot</li>
                                        <li>Developed microservices from specification to production</li>
                                    </ul>
                                </div>

                                <div className='experience'>
                                    <h3>Software and business intern - Captiz</h3>
                                    <div>Bordeaux, France <span className='date'>// July – August 2016</span></div>
                                    <ul>
                                        <li>Developed a Node.js software module</li>
                                        <li>Negotiated contracts (11k€) and created marketing material</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2>Education</h2>
                                <div>
                                    <div>
                                        <h3>Master's Degree in Software Engineering</h3>
                                        <div>Bordeaux Graduate School of Engineering</div>
                                        <div><a target='_blank' rel="noopener" href='https://enseirb-matmeca.bordeaux-inp.fr/en'>ENSEIRB-MATMECA</a>, Bordeaux, France <span className='date'>// 2015 – 2018</span></div>
                                    </div>
                                    <div>
                                        <h3>Intensive Math and Physics Course</h3>
                                        <div>Preparation for the selective entrance into French graduate schools</div>
                                        <div><a target='_blank' rel="noopener" href='http://www.lycee-saintlouis.fr/'>Lycée Saint-Louis</a>, Paris, France <span className='date'>// 2013 – 2015</span></div>
                                    </div>
                                    <div>
                                        <h3>International Option Baccalaureate (OIB)</h3>
                                        <div>Equivalent to 'A' levels in math, physics, and science</div>
                                        <div><a target='_blank' rel="noopener" href='http://www.ecolejeanninemanuel.org/en/public.html'>Ecole Jeannine Manuel</a> (international school), Paris, France <span className='date'>// 2013</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
