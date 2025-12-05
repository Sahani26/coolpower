"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/img/header-logo.png";
import { usePathname } from "next/navigation";



export default function Header() {
    const pathname = usePathname();

    useEffect(() => {
        const btn = document.querySelector(".navbar-toggler");
        const menu = document.querySelector("#navbarCollapse");
        const remove = document.querySelector(".close-buttton");
        const overlay = document.querySelector(".overlay");
        const links = document.querySelectorAll("#navbarCollapse .nav-link, #navbarCollapse .dropdown-item");

        if (!btn || !menu || !overlay) return;

        // Functions
        const openCloseMenu = () => {
            menu.classList.toggle("show");

            if (menu.classList.contains("show")) {
                overlay.classList.add("show");  // add active class
                document.body.classList.add("show");  // add active class
            } else {
                overlay.classList.remove("show"); // remove when closed
                document.body.classList.remove("show"); // remove when closed
            }
        };

        const closeMenu = () => {
            menu.classList.remove("show");
            document.body.classList.remove("show"); // remove from body
            overlay.classList.remove("show");
        };

        // Open/Close toggle
        btn.addEventListener("click", openCloseMenu);

        // Close button
        if (remove) {
            remove.addEventListener("click", closeMenu);
        }

        // Close when clicking any menu item
        links.forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        // Cleanup
        return () => {
            btn.removeEventListener("click", openCloseMenu);
            if (remove) remove.removeEventListener("click", closeMenu);
            links.forEach(link => link.removeEventListener("click", closeMenu));
        };
    }, []);

    return (
        <div className="container-fluid header-top">
            <div className="container d-flex align-items-center">

                {/* Left Logo (Big Screen) */}
                <div className="d-flex align-items-center h-100">
                    <Link href="/" className="navbar-brand"  >
                        <h1 className="text-primary mb-0">
                            <Image src={Logo} alt="General Electrical" className="logo-img img-fluid w-100" />
                        </h1>
                    </Link>
                </div>

                <div className="toggle-header">

                    {/* Topbar */}


                    {/* Navbar */}
                    <div className="nav-bar px-0 py-lg-0" >
                        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">

                            {/* Logo for Mobile */}
                            <div className="overlay"></div>
                            <Link href="/" className="navbar-brand-2">
                                <h1 className="text-primary mb-0">
                                    <Image src={Logo} alt="General Electrical" className="img-fluid w-100" />
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
                                    <div className="close_bt">
                                        <div className="close-buttton"></div>


                                    </div>
                                    <Link href="/" className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`}>
                                        Home
                                    </Link>

                                    <Link href="/about" className={`nav-item nav-link ${pathname === "/about" ? "active" : ""}`}>
                                        About
                                    </Link>

                                    <Link href="/service" className={`nav-item nav-link ${pathname === "/service" ? "active" : ""}`}>
                                        Service
                                    </Link>

                                    <Link href="/blog" className={`nav-item nav-link ${pathname === "/blog" ? "active" : ""}`}>
                                        Blog
                                    </Link>




                                    {/* Dropdown Pages */}
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                            <span className="dropdown-toggle">Pages</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <Link
                                                href="/team"
                                                className={`dropdown-item ${pathname === "/team" ? "active" : ""}`}
                                            >
                                                Our Team
                                            </Link>

                                            <Link
                                                href="/testimonial"
                                                className={`dropdown-item ${pathname === "/testimonial" ? "active" : ""}`}
                                            >
                                                Testimonial
                                            </Link>

                                            <Link
                                                href="/404"
                                                className={`dropdown-item ${pathname === "/404" ? "active" : ""}`}
                                            >
                                                404 Page
                                            </Link>
                                        </div>
                                    </div>

                                    <Link href="/contact" className={`nav-item nav-link ${pathname === "/contact" ? "active" : ""}`}>
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
