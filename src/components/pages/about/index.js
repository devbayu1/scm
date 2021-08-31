import React from "react";
import Header from "../../PagesHeader";
import Footer from "../../Footer";
import Content from "./Content";
import Breadcrumbs from "../../Breadcrumbs";
import EmailSubscribe from "../../EmailSubscribe";
import BackToTop from "../../BackToTop";
import SearchPopup from "../../SearchPopup";
import VideoBox from "./VideoBox";
import RequestModal from "../../RequestModal";
import BreadcrumbsData from "../../breadcrumbs.json";

const About = () => {
	return (
		<>
			<Header />
			<Breadcrumbs title={BreadcrumbsData.about.title} description={BreadcrumbsData.about.description}/>
			<Content />
			<EmailSubscribe />
			<Footer />
			<VideoBox />
			<SearchPopup />
			<RequestModal />
			<BackToTop />
		</>
	);
};
export default About;
