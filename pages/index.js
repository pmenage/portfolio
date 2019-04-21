import Layout from '../components/layout'

export default () => (
  <Layout>
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
              <div>Software Engineer</div>
              <div>Master's Degree</div>
          </div>

          <div id='looking'>
              Looking for remote freelance opportunities
          </div>

        </div>

        <div id='page_wrap'>

          <div id='right'>
            <div>
                <h2>Experience</h2>

                <div className='exp'>
                    <div className='experience'>Software Engineer (intern then freelance)</div>
                    <div><a target='_blank' href='https://www.thermofisher.com'>Thermo Fisher Scientific</a> - Bordeaux, France <span className='date'>// February – August 2018</span></div>
                    C#, .NET Core, SignalR, TypeScript, Angular
                    <ul>
                        <li>Development of realtime comments and annotations</li>
                        <li>Research about collaborative text editing using CRDT and OT</li>
                    </ul>
                </div>

                <div className='exp'>
                    <div className='experience'>Software Engineering Intern</div>
                    <div><a target='_blank' href='https://unacast.com'>Unacast</a> - Oslo, Norway <span className='date'>// June – September 2017</span></div>
                    GCP, AWS, Kubernetes, Docker, Golang
                    <ul>
                        <li>Creation of a pipeline to transfer files from S3 to BigQuery</li>
                        <li>Automation of tasks with a Slack chatbot</li>
                        <li>Development of microservices from specification to production</li>
                    </ul>
                </div>

                <div className='exp'>
                    <div className='experience'>3<sup>rd</sup> place in the Atos IT Challenge 2017</div>
                    <div>Created a ticket selling mobile <a target='_blank' href='https://www.atositchallenge.net/edition-2017/'>app</a> based on the Ethereum blockchain</div>
                </div>

                <div className='exp'>
                    <div className='experience'>Business and Software Engineering Intern</div>
                    <div><a target='_blank' href='http://captiz.com/'>Captiz</a> - Bordeaux, France <span className='date'>// July – August 2016</span></div>
                    <ul>
                        <li>Developed a Node.js software module</li>
                        <li>Negotiated contracts (11k€) and created marketing material</li>
                    </ul>
                </div>

              </div>

            <div>
                    <h2>Education</h2>
                    <div>
                        <div className='formation'>
                            <div className='ecole'>Master's Degree in Software Engineering</div>
                            <div>Bordeaux Graduate School of Engineering</div>
                            <div><a target='_blank' href='https://enseirb-matmeca.bordeaux-inp.fr/en'>ENSEIRB-MATMECA</a>, Bordeaux, France <span className='date'>// 2015 – 2018</span></div>
                        </div>
                        <div className='formation'>
                            <div className='ecole'>Intensive Math and Physics Course</div>
                            <div>Preparation for the selective entrance into French graduate schools</div>
                            <div><a target='_blank' href='http://www.lycee-saintlouis.fr/'>Lycée Saint-Louis</a>, Paris, France <span className='date'>// 2013 – 2015</span></div>
                        </div>
                        <div className='formation'>
                            <div className='ecole'>International Option Baccalaureate (OIB)</div>
                            <div>Equivalent to 'A' levels in math, physics, and science</div>
                            <div><a target='_blank' href='http://www.ecolejeanninemanuel.org/en/public.html'>Ecole Jeannine Manuel</a> (international school), Paris, France <span className='date'>// 2013</span></div>
                        </div>

                    </div>
                </div>

          </div>

          <div id='left'>
            <div>
                <h2>Technologies</h2>
                <div className='info'><div className='leftinfo'>Web <small>(front-end)</small></div><div>React, Angular, Vue, Bootstrap</div></div>
                <div className='info'><div className='leftinfo'>Web <small>(back-end)</small></div><div >Node.js, PHP, MongoBD, MySQL, PostgreSQL</div></div>
                <div className='info'><div className='leftinfo'>Mobile</div><div>React Native, Android</div>
                <div className='info'><div className='leftinfo'>Cloud / Devops</div><div >Google Cloud Platform, Amazon Web Services, Docker, Kubernetes</div></div>
                <div className='info'><div className='leftinfo'>System</div><div>C, Go, C#, .NET Core, Java, Python</div></div>
            </div>

            <div>
                <h2>Volunteering</h2>
                <div className='exp'>
                    <div className='experience'>President of a <a className='atitle' target='_blank' href='https://junior-aei.com/'>Junior-Enterprise</a></div>
                    <div>Bordeaux, France</div>
                    <div className='date'>April 2016 – April 2017</div>
                    <ul>
                        <li>Managed 23 collaborators</li>
                        <li>Established middle- and long-term strategies</li>
                        <li>Negotiated partnerships</li>
                    </ul>
                </div>
            </div>

            <div>
              <h2>Projects</h2>

              <div className='exp'>
                  <div className='experience'>Followed a Machine Learning MOOC</div>
                  <div>Stanford University - 2017</div>
              </div>

              <div className='exp'>
                  <div className='experience'>Open-source projects</div>
                  <ul>
                      <li>Video game (Java, Maven, Processing)</li>
                      <li>Chatbot to get city bikes (Golang, Kubernetes)</li>
                  </ul>
              </div>
            </div>

            <div>
                <h2>Languages</h2>
                    <div className='info'><span className='leftlang'>French</span>- Mother tongue</div>
                    <div className='info'><span className='leftlang'>English</span>- Bilingual <small>(5 years in the USA)</small></div>
                    <div className='info'><span className='leftlang'>Spanish</span>- Good working knowledge</div>
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
                    <a href="https://github.com/pmenage" target="_blank">github.com/pmenage</a><br />
                    +33 (0)6 45 47 42 43<br />
                    pauline.menage26@gmail.com
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <style jsx>{`
        .body {
            font-family: Roboto;
            font-size: 12pt;
            color: #2c3e50;
            padding: 1em;
            -webkit-print-color-adjust: exact;
            line-height: 1.7;
        }

        h1 {
            font-family: 'Roboto Slab', serif;
            font-size: 3em;
            font-weight: 300;
            color: #2980b9;
            letter-spacing: .05cm;
            margin: 0;
            line-height: 1.2;
        }

        h2 {
            font-family: 'Roboto Slab';
            font-size: 25px;
            font-weight: 500;
            color: #c0392b;
            letter-spacing: .05cm;
            margin-bottom: 5px;
        }

        #title {
            padding: 1em 1em;
            text-align: center;
        }

        #looking {
            font-family: 'Roboto';
            font-size: 18px;
            font-weight: 500;
            color: white;
            word-spacing: .2em;
            background-color: #16a085;
            border-radius: .3em;
            padding: .8em;
            text-align: center;
        }

        .titlecontact {
            margin-top: 15px;
        }

        #titlecontactleft, #titlecontactright {
            display: none;
        }

        .titletop {
            margin-top: 25px;
            margin-bottom: 25px;
            font-size: 1.3em;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #page_wrap {
            display: flex;
            flex-direction: column-reverse;
        }

        .formation {
            margin-bottom: 10px;
        }

        .date {
            font-weight: 200;
            font-size: 11pt;
        }

        .ecole, .experience {
            font-weight: 700;
        }

        .exp {
            margin-bottom: 10px;
        }

        .exp ul {
            margin-top: 5px;
        }

        span {
            margin-right: 4px;
        }

        li {
            list-style-type: square;
        }

        .info {
            padding-right: 20px;
        }

        .leftlang {
            font-weight: bold;
        }

        .leftinfo, .leftlang, .ecole, .experience {
            font-family: 'Lato';
            color: #2980b9;
            font-size: 110%;
            font-weight: 500;
            margin-bottom: 5px;
        }

        @page {
            size: A4;
            margin: 1cm;
        }

        @media screen {
            a, a:visited, a:hover {
                color: #6E8A8D !important;
                text-decoration: none;
                border-bottom: 1pt dotted #6E8A8D;
            }
        }

        @media print {
            a, a:visited, a:hover {
                text-decoration: none;
                color: #2c3e50;
            }
            .atitle {
                color: #c0392b;
            }
        }

        @media print, (min-width: 900px) {
            #page_wrap, #title {
                width: 900px;
                margin: 0 auto;
            }

            #page_wrap {
                flex-direction: row;
            }

            #left {
                width: 42%;
                padding-left: 0px;
                padding-right: 0px;
                box-sizing: border-box;
            }

            #right {
                width: 58%;
                padding-left: 30px;
                padding-right: 0px;
                box-sizing: border-box;
            }

            #contact {
                display: none;
            }

            #titlecontactleft, #titlecontactright {
                margin-top: 1.5em;
                display: inline;
                font-size: 11pt;
                color: #7f8c8d;
            }

            #titlecontactleft {
                float: left;
                text-align: left;
            }

            #titlecontactright {
                float: right;
                text-align: right;
            }

            .web {
                display: block;
            }
        }
      `}</style>
    </div>

  </Layout>
)
