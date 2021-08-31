import React from "react";

const Breadcrumbs = (props) => {
    return (
        <>
            <div className="slider bg-navy-blue bg-scroll pos-rel breadcrumbs-page">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="icofont-home"></i></a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                        </ol>
                    </nav>

                    <h1>{props.title}</h1>
                    <div className="breadcrumbs-description">{props.description}</div>
                </div>
            </div>
        </>
    );
};
export default Breadcrumbs;
