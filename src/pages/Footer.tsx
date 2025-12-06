"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <div
            className="container-fluid footer bg-dark py-5 wow fadeIn"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeIn" }}
        >
            <div className="container py-5">
                
                {/* Subscribe Row */}
                <div className="row g-5 mb-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="position-relative mx-auto">
                            <input
                                className="form-control w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Email address to Subscribe"
                            />
                            <button
                                type="button"
                                className="btn btn-primary position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                            <Link className="btn btn-light btn-md-square me-3" href="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link className="btn btn-light btn-md-square me-3" href="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link className="btn btn-light btn-md-square me-3" href="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link className="btn btn-light btn-md-square me-0" href="#">
                                <i className="fab fa-linkedin-in" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Columns */}
                <div className="row g-5">
                    
                    {/* Column 1 */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h3 className="text-white mb-4">
                                <i className="fas fa-bolt text-primary me-3"></i>
                               CoolPower
                            </h3>
                            <p className="mb-3">
                                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <Link href="#">Home</Link>
                            <Link href="#">About us</Link>
                            <Link href="#">Service</Link>
                            <Link href="#">Testimonial</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Electricity service</h4>
                            <Link href="#">Air Conditioning</Link>
                            <Link href="#">Electrical Panels</Link>
                            <Link href="#">Security System</Link>
                            <Link href="#">Indoor Lighting</Link>
                            <Link href="#">Electrical Services</Link>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>

                            <Link href="#">
                                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                123 Street, New York, USA
                            </Link>
                            <a href="mailto:info@example.com">
                                <i className="fas fa-envelope text-primary me-2"></i>
                                info@example.com
                            </a>
                            <a href="mailto:info@example.com">
                                <i className="fas fa-envelope text-primary me-2"></i>
                                info@example.com
                            </a>
                            <a href="tel:+01234567890">
                                <i className="fas fa-phone text-primary me-2"></i>
                                +012 345 67890
                            </a>
                            <a href="tel:+01234567890" className="mb-3">
                                <i className="fas fa-print text-primary me-2"></i>
                                +012 345 67890
                            </a>
                        </div>
                    </div>

                </div>
            </div>
               <a id="back-to-top"></a>
        </div>
     
    );
}
