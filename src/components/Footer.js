import React from "react";

const Footer = () => {
	return (
		<>
			{/* footer start */}
			<footer className="wide-tb-70 bg-light-gray pb-0">
				<div className="container">
					<div className="row">

						<div className="col-lg-4 col-md-6 ">
							<div className="logo-footer">
								<img src="images/logo_footer.png" alt="" />
							</div>
							<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
							<p>Vivamus ac ultrices diam, vitae accumsan tellus. Integer sollicitudin vulputate lacus, congue .</p>

							<h3 className="footer-heading">We're Social</h3>
							<div className="social-icons">
								<a href="#"><i className="icofont-facebook"></i></a>
								<a href="#"><i className="icofont-twitter"></i></a>
								<a href="#"><i className="icofont-whatsapp"></i></a>
								<a href="#"><i className="icofont-google-plus"></i></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 ">
							<h3 className="footer-heading">Recent Post</h3>
							<div className="blog-list-footer">
								<ul className="list-unstyled">
									<li>
										<div className="media">
											<div className="post-thumb">
												<img src="images/post_thumb_1.jpg" alt="" className="rounded-circle" />
											</div>
											<div className="media-body post-text">
												<h5 className="mb-3 h5-md"><a href="#">Liberalisation of air cargo</a></h5>
												<p>Far far away, behind the word mountains, far from the countries.</p>

												<div className="comment-box">
													<span><i className="icofont-ui-calendar"></i>  04.10.2013</span>
													<span><a href="#"><i className="icofont-speech-comments"></i>  25</a></span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="media">
											<div className="post-thumb">
												<img src="images/post_thumb_2.jpg" alt="" className="rounded-circle" />
											</div>
											<div className="media-body post-text">
												<h5 className="mb-3 h5-md"><a href="#">New Ocean Freight Rules</a></h5>
												<p>Far far away, behind the word mountains, far from the countries.</p>

												<div className="comment-box">
													<span><i className="icofont-ui-calendar"></i>  04.10.2013</span>
													<span><a href="#"><i className="icofont-speech-comments"></i>  25</a></span>
												</div>
											</div>
										</div>
									</li>
								</ul>

							</div>
						</div>

						<div className="col-lg-4 col-md-12 ">
							<h3 className="footer-heading">Our Photostream</h3>
							<ul id="basicuse" className="photo-thumbs"></ul>
						</div>

					</div>
				</div>

				{/*<div className="copyright-wrap bg-navy-blue wide-tb-30">*/}
				{/*	<div className="container">*/}
				{/*		<div className="row text-md-left text-center">*/}
				{/*			<div className="col-sm-12 col-md-6 copyright-links">*/}
				{/*				<a href="#">Privacy Policy</a>   <span>|</span>   <a href="#">CONTACT</a>   <span>|</span>   <a href="#">FAQS</a>*/}
				{/*			</div>*/}
				{/*			<div className="col-sm-12 col-md-6 text-md-right text-center">*/}
				{/*				Designed by <a href="#" rel="nofollow">MannatStudio</a> © 2019 All Rights Reserved*/}
            	{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</footer>
		</>
	);
};

export default Footer;
