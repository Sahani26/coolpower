"use client";

import Image from "next/image";
import commercial1 from "@/img/commercial-1.jpg";
import commercial2 from "@/img/commercial-2.jpg";
import commercial3 from "@/img/commercial-3.jpg";
import residential1 from "@/img/residential-1.jpg";
import residential2 from "@/img/residential-2.jpg";
import residential3 from "@/img/residential-3.jpg";
import industrial1 from "@/img/industrial-1.jpg";
import industrial2 from "@/img/industrial-2.jpg";
import industrial3 from "@/img/industrial-3.jpg";

export default function Service() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4">The Best Service For You</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            deserunt provident ab voluptates rerum eaque eum magni autem atque
            in minus laboriosam corrupti deleniti voluptatibus rem reiciendis
            modi veniam animi?
          </p>
        </div>

        <div className="row g-5 align-items-center">
          {/* LEFT TAB MENU */}
          <div className="col-lg-3 wow fadeInLeft" data-wow-delay="0.2s">
            <ul className="nav flex-column">
              <li className="nav-item me-lg-0 mb-4">
                <a className="py-3 px-5 active" data-bs-toggle="pill" href="#ServiceTab-1">
                  <span>Commercial</span>
                </a>
              </li>
              <li className="nav-item me-lg-0 mb-4">
                <a className="py-3 px-5" data-bs-toggle="pill" href="#ServiceTab-2">
                  <span>Residential</span>
                </a>
              </li>
              <li className="nav-item me-lg-0 mb-4 mb-lg-0">
                <a className="py-3 px-5" data-bs-toggle="pill" href="#ServiceTab-3">
                  <span>Industrial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-9 wow fadeInRight" data-wow-delay="0.3s">
            <div className="tab-content">

              {/* TAB 1 - Commercial */}
              <div id="ServiceTab-1" className="tab-pane fade show p-0 active">
                <div className="service-carousel owl-carousel">

                  <div className="service-item">
                    <Image src={commercial1} alt="Brite Spark Services" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Brite Spark Services</h4>
                      <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <Image src={commercial2} alt="Energy Ease Packages" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Energy Ease Packages</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <Image src={commercial3} alt="Electra Care Packages" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Electra Care Packages</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                </div>
              </div>

              {/* TAB 2 - Residential */}
              <div id="ServiceTab-2" className="tab-pane fade show p-0">
                <div className="service-carousel owl-carousel">

                  <div className="service-item">
                    <Image src={residential1} alt="Electrical Services" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Electrical Services</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <Image src={residential2} alt="Security Systems" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Security Systems</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <Image src={residential3} alt="Air Conditioner" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Air Conditioner</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                </div>
              </div>

              {/* TAB 3 - Industrial */}
              <div id="ServiceTab-3" className="tab-pane fade show p-0">
                <div className="service-carousel owl-carousel">

                  <div className="service-item">
                    <Image src={industrial1} alt="Factory Manufacture" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Factory Manufacture</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <Image src={industrial2} alt="General Electrical" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">General Electrical</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <Image src={industrial3} alt="Electrical Planning" className="img-fluid w-100" />
                    <div className="border border-top-0 p-4">
                      <h4 className="mb-3">Electrical Planning</h4>
                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
