import React from "react";
import Loader from "./Loader";

const Header = () => {
	return (
		<>
			<Loader />
			<header className="fixed-top header-fullpage bordered-nav wow fadeInDown">
				<div className="top-bar-right d-flex align-items-center text-md-left">
					<div className="container px-0">
						<div className="row align-items-center">
							<div className="col d-flex">
								<div className="top-text">
									<small className="txt-black">Address</small>
									254 Street Avenue, LA US
            					</div>
								<div className="top-text">
									<small className="txt-black">Emaii Us</small>
									<a href="#">support@logzee.com</a>
								</div>
								<div className="top-text">
									<small className="txt-black">Phone Number</small>
									+88 (0) 202 0000 001
            					</div>
							</div>
							<div className="col-md-auto">
								<div className="d-inline-flex request-btn ml-2">
									<a className="btn-theme icon-left bg-orange no-shadow d-none d-lg-inline-block align-self-center" href="#" role="button" data-toggle="modal" data-target="#request_popup"><i className="icofont-page"></i> Request Quote</a>
								</div>
								<div className="d-inline-flex request-btn ml-2">
									<a className="btn-theme icon-left bg-orange no-shadow d-none d-lg-inline-block align-self-center" href="#" role="button" data-toggle="modal" data-target="#request_popup"><i className="icofont-key"></i> Login</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<nav className="navbar navbar-expand-lg bg-transparent">
					<div className="container text-nowrap bdr-nav px-0">
						<div className="d-flex mr-auto">
							<a className="navbar-brand rounded-bottom light-bg" href="home-one">
								<img src="images/logo_white.png" alt="" />
							</a>
						</div>
						<span className="order-lg-last d-inline-flex request-btn">
							<a className="nav-link mr-2 ml-auto" href="#" id="search_home"><i className="icofont-search"></i></a>
						</span>
						<button className="navbar-toggler x collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown" data-animations="slideInUp slideInUp slideInUp slideInUp">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="requestquote">Request Quote</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="pages/services">Services</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="pages/about">About Us</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact">About Us</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
