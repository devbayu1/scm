import React from "react";
import Header from "../../../PagesHeader";
import Footer from "../../../Footer";
import Content from "./Content";
import Breadcrumbs from "../../../Breadcrumbs";
import EmailSubscribe from "../../../EmailSubscribe";
import BackToTop from "../../../BackToTop";
import SearchPopup from "../../../SearchPopup";
import RequestModal from "../../../RequestModal";
import BreadcrumbsData from "../../../breadcrumbs.json";

const Services = () => {
	return (
		<>
			<Header />
			<Breadcrumbs title={BreadcrumbsData.services.services.title} description={BreadcrumbsData.services.services.description}/>
			<Content />
			<EmailSubscribe />
			<Footer />
			<SearchPopup />
			<RequestModal />
			<BackToTop />
		</>
	);
};
export default Services;
