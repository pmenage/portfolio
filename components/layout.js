import Link from 'next/link'
import Head from 'next/head'

class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<title>{this.props.title ? this.props.title : 'Home'}</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
					<meta name='description' content="Pauline's portfolio" />
					<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Lato:200,300,400,500,600,700&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/pure-min.css" crossOrigin="anonymous" />
					<link rel="stylesheet" href="https://unpkg.com/purecss@0.6.2/build/grids-responsive-min.css" crossOrigin="anonymous" />
					<style>{`
						body {
						background-color: #fff;
						font-family: Roboto;
						}
						h1 {
						font-family: 'Roboto Slab', serif;
						letter-spacing: .05cm;
						font-size: 50px;
						font-weight: 300;
						text-align: center;
						margin: 1em;
						color: #34495e;
						}
					`}</style>
				</Head>
				<body>
					<header>
						<nav>
							<div className='pure-menu pure-menu-horizontal'>
								<ul className='pure-menu-list'>
									<li className='pure-menu-list'><Link href='/'><a className='pure-menu-link menu-link'>Resume</a></Link></li>
									<li className='pure-menu-list'><Link href='/projects'><a className='pure-menu-link menu-link'>Work</a></Link></li>
									<li className='pure-menu-list'><Link href='/teaching'><a className='pure-menu-link menu-link'>Teaching</a></Link></li>
									<li className='pure-menu-list'><Link href='/about' as='/about'><a className='pure-menu-link menu-link'>About</a></Link></li>
								</ul>
							</div>
							<style jsx>{`
								.pure-menu {
									background-color: #fff;
									height: 6em;
									text-align: center;
									border-bottom: 1px solid #bdc3c7;
								}
								.pure-menu-link {
									font-size: 20px;
									display: inline;
									color: #34495e;
								}
								.pure-menu-list {
									padding-top: 1.1em;
								}
								.pure-menu-link:hover {
									background: none;
									color: #16a085;
								}
								.menu-link:hover::after {
									content:"―";
									position:absolute;
									left: 40%;
									right: 40%;
									top: 2em;
									bottom:0;
								}
								.pure-menu-link:focus {
									background: none;
								}
								a.selected:link, a.selected:visited{
									color: #1abc9c;
								}

								@media only screen and (min-width: 1000px) {
									.pure-menu {
									width: 1000px;
									margin: 0 auto;
									}
								}

								@media screen and (max-width: 430px) {
									.menu-link {
										font-size: 18px;
										padding: 10px;
									}
								}
							`}</style>
						</nav>
					</header>

					{this.props.children}

					<footer>
						<div className='pure-g'>
							<div className='pure-u-1'>
								<a href='../static/PaulineMenage.pdf' className='pure-button' download>Download resume</a>
							</div>
							<style jsx>{`
								.pure-g {
									text-align: center;
									padding-top: 2em;
									border-top: 1px solid #bdc3c7;
								}

								.pure-button {
									padding: 1.1em 1.4em 1.1em 1.4em;
									color: #fff;
									background-color: #d35400;
									border-radius: 1.8em;
								}

								@media only screen and (min-width: 1000px) {
									.pure-g {
									width: 1000px;
									margin: 0 auto;
									}
								}
							`}</style>
						</div>
						<div className="pure-g">
							<div className="pure-u-1 footer">
								<span><Link href='/'><a className='link'>Resume</a></Link></span>
								<span><Link href='/projects'><a className='link'>Work</a></Link></span>
								<span><Link href='/teaching'><a className='link'>Teaching</a></Link></span>
								<span><Link href='/about' as='/about'><a className='link'>About</a></Link></span>
							</div>
							<style jsx>{`
								.footer {
									background-color: #34495e;
									margin-top: 2em;
									padding: 2em;
									text-align: center;
								}
								span {
									margin-right: 2em;
								}
								.link {
									text-decoration: none;
									color: #fff;
								}
								@media screen and (max-width: 430px) {
									.link {
										font-size: 14px;
									}
									span {
										margin: 10px;
									}
								}
							`}</style>
						</div>
					</footer>
					<script src="https://kit.fontawesome.com/e957e9f284.js" crossOrigin="anonymous"></script>
				</body>
			</html >
		)
	}
}

export default Index;
