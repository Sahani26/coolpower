"use client";

import Link from "next/link";

export default function Header() {
    return (
        <div className="container-fluid header-top">
            <div className="container d-flex align-items-center">
                
                {/* Left Logo (Big Screen) */}
                <div className="d-flex align-items-center h-100">
                    <Link href="/" className="navbar-brand" style={{ height: "125px" }}>
                        <h1 className="text-primary mb-0">
                            <i className="fas fa-bolt"></i>CoolPower
                        </h1>
                    </Link>
                </div>

                <div className="w-100 h-100">

                    {/* Topbar */}
                    <div 
                        className="topbar px-0 py-2 d-none d-lg-block" 
                        style={{ height: "45px" }}
                    >
                        <div className="row gx-0 align-items-center">

                            {/* Left Info */}
                            <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                                <div className="d-flex flex-wrap">
                                    <div className="border-end border-primary pe-3">
                                        <Link href="#" className="text-muted small">
                                            <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                            Find A Location
                                        </Link>
                                    </div>

                                    <div className="ps-3">
                                        <a href="mailto:example@gmail.com" className="text-muted small">
                                            <i className="fas fa-envelope text-primary me-2"></i>
                                            example@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Social + Language */}
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-flex justify-content-end">

                                    <div className="d-flex border-end border-primary pe-3">
                                        <Link href="#" className="btn p-0 text-primary me-3">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        <Link href="#" className="btn p-0 text-primary me-3">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link href="#" className="btn p-0 text-primary me-3">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                        <Link href="#" className="btn p-0 text-primary me-0">
                                            <i className="fab fa-linkedin-in"></i>
                                        </Link>
                                    </div>

                                    {/* Language Dropdown */}
                                    <div className="dropdown ms-3">
                                        <a
                                            href="#"
                                            className="dropdown-toggle text-white"
                                            data-bs-toggle="dropdown"
                                        >
                                            <small className="text-body">
                                                <i className="fas fa-globe-europe text-primary me-2"></i>
                                                English
                                            </small>
                                        </a>

                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" href="#">English</Link>
                                            <Link className="dropdown-item" href="#">Bangla</Link>
                                            <Link className="dropdown-item" href="#">French</Link>
                                            <Link className="dropdown-item" href="#">Spanish</Link>
                                            <Link className="dropdown-item" href="#">Arabic</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Navbar */}
                    <div className="nav-bar px-0 py-lg-0" style={{ height: "80px" }}>
                        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">

                            {/* Logo for Mobile */}
                            <Link href="#" className="navbar-brand-2">
                                <h1 className="text-primary mb-0">
                                    <i className="fas fa-bolt"></i>CoolPower
                                </h1>
                            </Link>

                            {/* Toggle Button */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                            >
                                <span className="fa fa-bars"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav mx-0 mx-lg-auto bg-white">

                                    <Link href="/" className="nav-item nav-link active">
                                        Home
                                    </Link>

                                    <Link href="/about" className="nav-item nav-link">
                                        About
                                    </Link>

                                    <Link href="/service" className="nav-item nav-link">
                                        Service
                                    </Link>
                                    <Link href="/blog" className="nav-item nav-link">
                                        Blog
                                    </Link>

                                    {/* Dropdown Pages */}
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                            <span className="dropdown-toggle">Pages</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <Link href="/team" className="dropdown-item">Our Team</Link>
                                            <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                                            <Link href="/404" className="dropdown-item">404 Page</Link>
                                        </div>
                                    </div>

                                    <Link href="/contact" className="nav-item nav-link">
                                        Contact
                                    </Link>

                                   

                                </div>
                            </div>

                        </nav>
                    </div>

                </div>

            </div>
        </div>
    );
}
