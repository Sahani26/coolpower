"use client";
import Image from "next/image";
import testimonial1 from "@/img/testimonial-1.jpg";
import testimonial2 from "@/img/testimonial-2.jpg";
import testimonial3 from "@/img/testimonial-3.jpg";
export default function Testimonial() {
    return (
        <div className="container-fluid testimonial bg-dark border-bottom border-primary py-5">
            <div className="container py-5">
                <div className="row g-5">

                    {/* LEFT SIDE CONTENT */}
                    <div className="col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h4 className="text-primary">Testimonial</h4>
                        <h1 className="display-4 text-white mb-4">
                            Powerfull Praise Heare From Our Customers
                        </h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic
                            aspernatur unde magnam necessitatibus provident iusto maxime nobis esse
                            eligendi.
                        </p>
                        <a className="btn btn-light py-3 px-5" href="#">
                            View All Reviews
                        </a>
                    </div>

                    {/* RIGHT SIDE CAROUSEL */}
                    <div className="col-lg-6 col-xl-7 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="owl-carousel testimonial-carousel">

                            {/* ITEM 1 */}
                            <div className="testimonial-item">
                                <div className="testimonial-quote">
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>

                                <div className="testimonial-inner p-4">
                                   <Image src={testimonial1} className="img-fluid" alt="Customer 1" width={100} height={100} />


                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>

                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-text p-4">
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
                                        neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus
                                        impedit.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM 2 */}
                            <div className="testimonial-item">
                                <div className="testimonial-quote">
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>

                                <div className="testimonial-inner p-4">
                                    <Image src={testimonial2} className="img-fluid" alt="" />
                                    

                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>

                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-text p-4">
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
                                        neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus
                                        impedit.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM 3 */}
                            <div className="testimonial-item">
                                <div className="testimonial-quote">
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>

                                <div className="testimonial-inner p-4">
                                  <Image src={testimonial3} className="img-fluid" alt="Customer 1" width={100} height={100} />

                                    <div className="ms-4">
                                        <h4>Person Name</h4>
                                        <p>Profession</p>

                                        <div className="d-flex text-primary">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star text-body"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-text p-4">
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta
                                        neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus
                                        impedit.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
