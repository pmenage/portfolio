import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className='pure-g body'>
      <div className='pure-u-1'>
        <div id='title'>
          <div id='titlecontactleft'>
              Rés Gambetta, Bat A2, Apt 41<br />
              19 Rue Roustaing<br />
              33400 TALENCE<br />
              France
          </div>
    
          <div id='titlecontactright'>
              pauline.menage26@gmail.com<br />
              paulinemenage.com<br />
              github.com/pmenage<br />
              +33 (0)6 45 47 42 43
          </div>
          
          <h1>Pauline Ménage</h1>
              
          <div className='titletop'>
              Software Engineering Student<br />
              Pursuing a Master's Degree
          </div>
      
          <div id='cherche'>
              Looking for a 6-month internship starting February 2018
          </div>
    
        </div>
        
        <div id='page_wrap'>
        
          <div id='right'>
            
            <div>
                <h2>Experience</h2>
                
                <div className='exp'>
                    <div className='experience'>Software development internship</div>
                    <div><a target='_blank' href='https://unacast.com'>Unacast</a> - Oslo, Norway <span className='date'>// June to September 2017</span></div>
                    GCP, AWS, Kubernetes, Docker, Golang
                    <ul>
                        <li>Creation of a pipeline to transfer files from S3 to BigQuery</li>
                        <li>Automation of tasks with a Slack chatbot</li>
                        <li>Development of microservices from specification to production</li>
                    </ul>
                </div>
                  
                <div className='exp'>
                    <div className='experience'>Dual business- and development-oriented internship</div>
                    <div><a target='_blank' href='http://captiz.com/'>Captiz</a> - Bordeaux, France <span className='date'>// July – August 2016</span></div>
                    <ul>
                        <li>Developed a Node.js software module</li>
                        <li>Negotiated contracts (11k€) and created marketing material</li>
                    </ul>
                </div>
      
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
                    <h2>Education</h2>
                    <div>
                        <div className='formation'>
                            <div className='ecole'>Pursuing a Master's Degree in Software Engineering</div>
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
                        <div className='formation'>
                            <div className='ecole'>Mooc Machine Learning</div>
                            <div>Stanford University <span className='date'>// 2017</span></div>
                        </div>
                    </div>
                </div>
              
          </div>
          
          <div id='left'>
          
            <div className='space'>
              <h2>Projects</h2>
              
              <div className='exp'>
                  <div className='experience'>3<sup>rd</sup> place in the Atos IT Challenge 2017</div>
                  <ul>
                      <li>Created a ticket selling mobile <a target='_blank' href='https://www.atositchallenge.net/edition-2017/'>app</a> based on the Ethereum blockchain</li>
                  </ul>
              </div>
              
              <div className='exp'>
                  <div className='experience'>Application for an <a target='_blank' href='http://www.pulseo.fr/en'>incubator</a></div>
                  <div>Created a responsive app to manage meetings and finances (Java EE, MySQL, JSF, Primefaces)</div>
              </div>
              
              <div className='exp'>
                  <div className='experience'>Open-source projects</div>
                  <ul>
                      <li>Video game (Java, Maven, Processing)</li>
                      <li>Chatbot to get city bikes (Golang, Kubernetes)</li>
                  </ul>
              </div>
                  
            </div>
          
            <div className='space'>
                <h2>Technologies</h2>
                    <div className='info'><div className='leftinfo'>System</div><div>C, C++, Go, Java, Java EE, Scheme, Python, Android</div></div>
                    <div className='info'><div className='leftinfo'>Cloud</div><div >Google Cloud Platform, Amazon Web Services, Docker, Kubernetes</div></div>
                    <div className='info'><div className='leftinfo'>Big Data</div><div>Spark, Hadoop, HDFS, HBase</div>
                    <div className='info'><div className='leftinfo'>Web <small>(front-end)</small></div><div>ReactJS, Angular, jQuery, Bootstrap</div></div>
                    <div className='info'><div className='leftinfo'>Web <small>(back-end)</small></div><div >PHP, MySQL, Node.js, MongoBD, Docker</div></div>
            </div>
            
            <div className='space'>
                <h2>Languages</h2>
                    <div className='info'><span className='leftlang'>French</span>- Mother tongue</div>
                    <div className='info'><span className='leftlang'>English</span>- Bilingual <small>(5 years in the USA)</small></div>
                    <div className='info'><span className='leftlang'>Spanish</span>- Good working knowledge</div>
            </div>
            
            <div className='space'>
                <h2>Interests</h2>
                        <ul>
                            <li>Horseback riding <small>Galop&nbsp;7, contests</small></li>
                            <li>Piano <small>7 years</small></li>
                            <li>Debate club</li>
                        </ul>
            </div>
            
             <div className='space' id='contact'>
                <h2>Contact</h2>
                <div className='titlecontact'>
                    Rés Gambetta, Bat A2, Apt 41<br />
                    19 Rue Roustaing<br />
                    33400 TALENCE<br />
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
        line-height: 1.9;
        /*color: #13131A; */
        color: #2c3e50;
        padding: 1em;
        -webkit-print-color-adjust: exact;
    }
    
    #title {
        padding: 1em 1em;
        text-align: center;
        /*border-bottom: solid 3px #16a085;*/
    }
    
    .exp ul {
        margin-top: 5px;
    }
    
    h1 {
        font-size: 3em;
        font-weight: 300;
        margin-bottom: 0px;
        margin-top: 0px;
        line-height: 1.2;
    }
    
    .titlecontact {
        margin-top: 15px;
        line-height: 1.7;
    }
    
    #titlecontactleft, #titlecontactright {
        display: none;
    }
    
    .titletop {
        margin-top: 25px;
        margin-bottom: 25px;
        font-size: 1.3em;
        line-height: 1.6;
        /*color:  #c0392b;*/
    }
    
    h2 {
        font-family: 'Roboto Slab';
        font-size: 25px;
        letter-spacing: .05cm;
        font-weight: 500;
        /*color: #2980b9;*/
        color: #2980b9;
    }
    
    .formation {
        margin-bottom: 10px;
    }
    
    .date {
        font-weight: 200;
        font-size: 11pt;
    }
    
    .ecole {
        font-weight: 700;
    }
    
    .experience {
        font-weight: 700;
    }
    
    .exp {
        margin-bottom: 10px;
    }
    
    span {
        display: inline-block;
        margin-right: 4px;
    }
    
    li {
        list-style-type: square;
    }
    
    .info {
        padding-right: 20px;
    }
    
    .space {
        margin-top: 26px;
    }
    
    .leftlang {
        font-weight: bold;
    }
    
    .space .info {
        clear: both;
        margin-top: 5px;
    }
    
    h1 {
        color: #2980b9;
        /*text-shadow: 0 0 5pt #2ecc71;*/
    }
    
    h2::after {
        content: ' ';
        display: block;
        height: 1px;
        background-image: linear-gradient(90deg, #2980b9, white);
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
        #left {
            line-height: 1.62;
        }
        #right {
            line-height: 1.84;
        }
        .space .info {
            margin-top: 5px;
        }
    }
    
    h1 {
        font-family: 'Roboto Slab', serif;
        letter-spacing: .05cm;
    }
    
    .leftinfo, .leftlang, .ecole, .experience {
        font-family: 'Lato';
        /*color: #6CA0B8;*/
        color: #c0392b;
        font-size: 110%;
        font-weight: 500;
    }
    
    #cherche {
        font-family: 'Roboto';
        font-size: 18px;
        background-color: #16a085;
        color: white;
        padding: .5em;
        /*letter-spacing: 0.03cm;*/
        word-spacing: .2em;
        font-weight: 500;
        text-align: center;
    /*    text-transform: uppercase; */
        border-radius: .3em;
    }
    
    @page {
        size: A4;
        margin: 1cm;
    }
    
    @media (min-width: 900px) {
        .info {
            margin-top: 0px;
        }
        #right {
            line-height: 2.1;
        }
        #left {
            line-height: 2.0;
        }
    }
    
    @media print, (min-width: 900px) {
    
    #page_wrap, #title {
        width: 900px;
        margin: 0 auto;
    }
    
    #left {
        float: left;
        width: 42%;
        padding-left: 0px;
        padding-right: 0px;
        box-sizing: border-box;
    }
    
    #right { 
        float: right;
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
        line-height: 1.7;
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
    /*
    #right {
        border-left: 1pt solid #16a085;;
    }
    
    #title {
        border-bottom: 1pt solid #16a085;;
    }
    */
    }
    `}</style>
    </div>
  </Layout>
)
