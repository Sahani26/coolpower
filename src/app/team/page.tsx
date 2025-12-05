"use client";
import Image from "next/image";
import team1 from "@/img/team-1.jpg";
import team2 from "@/img/team-2.jpg";
import team3 from "@/img/team-3.jpg";
import team4 from "@/img/team-4.jpg";

export default function Team() {
  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        <div
          className="d-flex flex-column mx-auto text-center mb-5"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4 mb-4">Electricity Service offerings</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            deserunt provident ab voluptates rerum eaque eum magni autem atque.
          </p>
        </div>

        <div className="row g-4">
          {/* TEAM MEMBER 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <Image src={team1} className="img-fluid w-100" alt="" />
                <div className="team-icon">
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="team-content bg-light text-center p-4">
                <h4>Shoaib Bashir</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>

          {/* TEAM MEMBER 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <Image src={team2} className="img-fluid w-100" alt="" />
                <div className="team-icon">
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="team-content bg-light text-center p-4">
                <h4>Shoaib Bashir</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>

          {/* TEAM MEMBER 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <Image src={team3} className="img-fluid w-100" alt="" />
                <div className="team-icon">
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="team-content bg-light text-center p-4">
                <h4>Shoaib Bashir</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>

          {/* TEAM MEMBER 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="team-item">
              <div className="team-img">
                <Image src={team4} className="img-fluid w-100" alt="" />
                <div className="team-icon">
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary mb-2" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="team-content bg-light text-center p-4">
                <h4>Shoaib Bashir</h4>
                <p className="mb-0">Profession</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
