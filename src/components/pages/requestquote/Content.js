import React, { useEffect, useState } from "react";
import { getStates, getCities, getCountries } from "../../../components/action/region/public";
import { getContainers } from "../../../components/action/container/public";
import { getPorts } from "../../../components/action/port/public";



export default function Content(){
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [ports, setPorts] = useState([]);
    const [countries, setCountries] = useState([]);
    const [container, setContainer] = useState([]);

    useEffect(() => {
        _loadAPI();
    },[]);

    const _loadAPI = async () => {
        const data = {
            param: {}
        };

        await Promise.all([getCountries(data, ''), getContainers(data, ''), getPorts(data, '')])
            .then((res) => {
                const countriesData = res[0].result;
                const containersData = res[1].result;
                const portsData = res[2].result;

                setCountries(countriesData);
                setContainer(containersData);
                setPorts(portsData);
            })
            .catch((error) => {
                console.log(`error`, error);
            });
    };

    return (
        <>
            <main id="body-content">
                <section className="pos-rel bg-sky-blue">
                    <div className="container-fluid p-0">
                        <div className="d-lg-flex justify-content-end no-gutters mb-spacer-md" style={{ boxShadow: "0px 18px 76px 0px rgba(0, 0, 0, 0.06)" }}>
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <div className="wide-tb-90">
                                    <div className="col-sm-10 offset-md-1 col-md-10 col-lg-10 bg-white p-4 mb-4">
                                        <h2 className="h2-sm mb-4 fw-7 txt-blue">What are you shipping?</h2>
                                        <form noValidate="novalidate" className="rounded-field">
                                            <div className="form-row row mb-4 show-grid-row">
                                                <div className="col">
                                                    <p className="fw-7 txt-blue">Qty</p>
                                                    <input type="text" name="Qty" className="form-control" placeholder="ex. 1-5" />
                                                </div>
                                                <div className="col-8">
                                                    <p className="fw-7 txt-blue">Container</p>
                                                    <select
                                                        title="Please choose a package"
                                                        required=""
                                                        name="container"
                                                        className="custom-select"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        // onChange={() => {}}
                                                        // value=""
                                                    >
                                                        <option disabled={true} key={`container-0`} value={0}>Freight Type</option>
                                                        {container.map((item, i) => {
                                                            return (
                                                                <option key={`container-${item + 1}`} value={item.id}>
                                                                    {item.name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col mt-2">
                                                    <p className="fw-7 txt-blue">Overweight</p>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions" id="inlineRadio1"
                                                               value="option1"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="inlineRadio1">Yes</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions" id="inlineRadio2"
                                                               value="option2"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="inlineRadio2">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row row mb-4 show-grid-row">
                                                <div className="col mt-2">
                                                    <button className="btn btn-sm btn-outline-info" type="button"><i className="fa fa-plus"></i> Add Container</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-10 offset-md-1 col-md-10 col-lg-10">
                                        <div className="bs-docs-grid">
                                            <div className="show-grid row">
                                                <div className="col-md-6 bg-white p-4 mb-4">
                                                    <h2 className="h2-sm mb-4 fw-7 txt-blue">Pickup goods from</h2>
                                                    <div className="form-row mb-4 show-grid-row">
                                                        <div className="col">
                                                            <select title="Please choose a package" required="" name="port" className="custom-select" aria-required="true" aria-invalid="false">
                                                                <option disabled={true} key={`port-0`} value={0}>Port</option>
                                                                {ports.map((item, i) => {
                                                                    return (
                                                                        <option key={`port-${item + 1}`} value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select title="Please choose a package" required="" name="package" className="custom-select" aria-required="true" aria-invalid="false">
                                                                <option value="">Origin location type</option>
                                                                <option value="Type 1">Type 1</option>
                                                                <option value="Type 2">Type 2</option>
                                                                <option value="Type 3">Type 3</option>
                                                                <option value="Type 4">Type 4</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select
                                                                title="Please choose a package"
                                                                required=""
                                                                name="country"
                                                                className="custom-select"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                                // onChange={() => {}}
                                                                // value=""
                                                            >
                                                                <option disabled={true} key={`country-0`} value={0}>Origin country / Region</option>
                                                                {countries.map((item, i) => {
                                                                    return (
                                                                        <option key={`country-${item + 1}`} value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-4 show-grid-row">
                                                        <div className="col">
                                                            <input type="text" name="name" className="form-control" placeholder="City / Zip Code" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="date" name="email" className="form-control" placeholder="Goods ready (estimated)" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 bg-white p-4 mb-4">
                                                    <h2 className="h2-sm mb-4 fw-7 txt-blue">Deliver goods to</h2>
                                                    <div className="form-row mb-4">
                                                        <div className="col">
                                                            <select title="Please choose a package" required="" name="port2" className="custom-select" aria-required="true" aria-invalid="false">
                                                                <option disabled={true} key={`port2-0`} value={0}>Port</option>
                                                                {ports.map((item, i) => {
                                                                    return (
                                                                        <option key={`port2-${item + 1}`} value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select title="Please choose a package" required="" name="package" className="custom-select" aria-required="true" aria-invalid="false">
                                                                <option value="">Destination location type</option>
                                                                <option value="Type 1">Type 1</option>
                                                                <option value="Type 2">Type 2</option>
                                                                <option value="Type 3">Type 3</option>
                                                                <option value="Type 4">Type 4</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select
                                                                title="Please choose a package"
                                                                required=""
                                                                name="country2"
                                                                className="custom-select"
                                                                aria-required="true"
                                                                aria-invalid="false"
                                                                // onChange={() => {}}
                                                                // value=""
                                                            >
                                                                <option disabled={true} key={`country2-0`} value={0}>Origin country / Region</option>
                                                                {countries.map((item, i) => {
                                                                    return (
                                                                        <option key={`country2-${item + 1}`} value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <div className="col-6">
                                                            <input type="text" name="name" className="form-control" placeholder="City / Zip Code" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 offset-md-1 col-md-10 col-lg-10 bg-white p-4 mb-4">
                                        <h2 className="h2-sm mb-4 fw-7 txt-blue">Customs and additional services</h2>
                                        <p>All international shipments require customs clearance. USA imports also require a customs bond.</p>
                                        <div className="bs-docs-grid">
                                            <div className="show-grid row">
                                                <div className="col-md-6 bg-white p-4 mb-4">
                                                    <p className="h2-sm mb-4 fw-7 txt-blue">Add customs brokerage services to your quote? What's this?</p>
                                                    <div className="form-row mb-4">
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="flexRadioDefault1" id="flexRadioDefault1" />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault1">
                                                                    Yes I need custom clearance for <input type="number" name="com" style={{width:'100px'}}/> commodities
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="flexRadioDefault1" id="flexRadioDefault2"
                                                                       checked />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexRadioDefault2">
                                                                    No, I have my own customs broker who will handle customs brokerage for me
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 bg-white p-4 mb-4">
                                                    <p className="h2-sm mb-4 fw-7 txt-blue">Purchase a customs bond? (Required for USA imports)</p>
                                                    <div className="form-row mb-4">
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="flexRadioDefault" id="flexRadioDefault1" />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault1">
                                                                        Yes
                                                                    </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="flexRadioDefault" id="flexRadioDefault2"
                                                                       checked />
                                                                    <label className="form-check-label"
                                                                           htmlFor="flexRadioDefault2">
                                                                        No, I already have one
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 offset-md-1 col-md-10 col-lg-10">
                                        <div className="bs-docs-grid">
                                            <div className="show-grid row">
                                                <div className="col-md-6 bg-white p-4 mb-4">
                                                    <h2 className="h2-sm mb-4 fw-7 txt-blue">Additional details</h2>
                                                    <div className="form-row mb-4">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                   id="flexCheckDefault" />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexCheckDefault">
                                                                    This is hazardous shipment (ie. batteries, liquids)
                                                                </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                   id="flexCheckChecked" checked />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexCheckChecked">
                                                                    This is a personal shipment
                                                                </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 bg-white p-4 mb-4">
                                                    <h2 className="h2-sm mb-4 fw-7 txt-blue">Insurance</h2>
                                                    <div className="form-row mb-4">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                   id="flexCheckDefault" />
                                                                <label className="form-check-label"
                                                                       htmlFor="flexCheckDefault">
                                                                    Add Insurance (insurance covers goods value only up to $500K)
                                                                </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <div className="form-check">
                                                            <label className="col-sm-2 col-form-label">Insurance Value</label>
                                                            <div className="col-sm-10">
                                                                <input type="text" className="form-control" id="inputPassword" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 offset-md-1 col-md-10 col-lg-10 mt-4">
                                        <div className="bs-docs-grid">
                                            <div className="show-grid row">
                                                <div className="col-md-8 mb-4">
                                                    <h4 className="h2-sm fw-7 txt-blue">Please Check Your Order</h4>
                                                    <h2 className="h2-sm fw-7 txt-blue">Continue to confirm your booking by press button Search And Book.</h2>
                                                </div>
                                                <div className="col-md-4 mb-4">
                                                    <button type="button" className="btn btn-lg btn-primary pull-right">
                                                        Search And Book <i className="icofont-long-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light-gray">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-4 text-center">
                                <div className="px-5 wide-tb-100">
                                    <div className="service-icon mx-auto mb-5 icon-box-5">
                                        <i className="icofont-glass"></i>
                                    </div>
                                    <h4 className="h4-md fw-7 txt-blue">SAFE & SECURE</h4>
                                    Nunc non mollis nulla. Sed tconsectetur elit id mi consectetur bibendum.
                                </div>
                            </div>
                            <div className="col-lg-4 text-center bg-fixed clients-bg pos-rel txt-white">
                                <div className="bg-overlay black opacity-40"></div>
                                <div className="px-5 wide-tb-100" style={{ position: "relative", zIndex: "999" }}>
                                    <div className="service-icon mx-auto mb-5 icon-box-5">
                                        <i className="icofont-delivery-time"></i>
                                    </div>
                                    <h4 className="h4-md fw-7">FAST DELIVERY</h4>
                                    Nunc non mollis nulla. Sed tconsectetur elit id mi consectetur bibendum.
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="px-5 wide-tb-100">
                                    <div className="service-icon mx-auto mb-5 icon-box-5">
                                        <i className="icofont-live-support"></i>
                                    </div>
                                    <h4 className="h4-md fw-7 txt-blue">24/7 Support</h4>
                                    Nunc non mollis nulla. Sed tconsectetur elit id mi consectetur bibendum.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wide-tb-80 bg-scroll bg-img-6 pos-rel callout-style-1">
                    <div className="bg-overlay blue opacity-60"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 mb-0">
                                <h4 className="h4-xl">Interested in working with Logzee?</h4>
                            </div>
                            <div className="col">
                                <div className="center-text">
                                    We don’t just manage suppliers, we micro-manage them. We have a consultative, personalized approach
                                </div>
                            </div>
                            <div className="col-sm-auto">
                                <a href="#" className="btn btn-theme bg-white bordered">Get In Touch <i className="icofont-rounded-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
