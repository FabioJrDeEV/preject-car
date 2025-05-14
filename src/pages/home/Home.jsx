import { Link } from "react-router-dom";
import person from "../../../public/person.png";
import car1 from "../../../public/car1.png";
import car2 from "../../../public/car2.png";
import vol from "../../../public/volante.png";
import Hearts from "../../components/heart/Heart";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [car, setCar] = useState([]);

  function handleHeart(e) {}

  useEffect(() => {
    fetch("https://wbrendo.pythonanywhere.com/api/cars/")
      .then((res) => res.json())
      .then((dados) => {
        if (!dados) {
          console.log("Deu merda");
        }
        setCar(dados);
      });
  }, []);

  return (
    <div className="w-100 min-vh-100">
      {/* Navbar Desktop*/}
      <nav className="navbar navbar-expand-lg border-bottom d-none d-md-none d-lg-flex">
        <div className="d-flex align-items-center w-100 mt-4 mb-4">
          <a
            className="navbar-brand text-uppercase ms-5"
            style={{ color: "#3563E9", fontSize: "32px" }}
            href="/"
          >
            Morent
          </a>
          <div
            className="ms-3 d-flex align-items-center w-100"
            id="navbarSupportedContent"
          >
            <div className="w-100">
              <form
                className="d-flex ms-5 border rounded-4 p-1"
                style={{ width: "492px" }}
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <button type="submit" className="bg-transparent border-0 ms-3">
                  <i className="bi bi-search fs-5"></i>
                </button>
                <input
                  className="me-2 ms-3 border-0 w-75"
                  style={{ outline: "none" }}
                  type="search"
                  placeholder="Search something here"
                  aria-span="Search"
                />
                <button className="bg-transparent border-0" type="submit">
                  <i className="bi bi-filter ms-4 fs-5"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="me-auto d-flex align-items-center">
            <div
              className="d-flex justify-content-center border rounded-circle me-3"
              style={{ width: "44px", height: "44px", border: "#c3d4e940" }}
            >
              <button className="bg-transparent border-0">
                <i
                  className="bi bi-heart-fill text-center"
                  style={{ width: "24px", height: "24px" }}
                ></i>
              </button>
            </div>
            <div className="position-relative">
              <div
                className="rounded-circle position-absolute icon"
                style={{ width: "11px", height: "11px", background: "#ff4423" }}
              ></div>
              <div
                className="d-flex justify-content-center border rounded-circle me-3 "
                style={{ width: "44px", height: "44px", border: "#c3d4e940" }}
              >
                <button className="bg-transparent border-0">
                  <i
                    className="bi bi-bell-fill text-center"
                    style={{ width: "24px", height: "24px" }}
                  ></i>
                </button>
              </div>
            </div>
            <div
              className="d-flex justify-content-center border rounded-circle me-3"
              style={{ width: "44px", height: "44px", border: "#c3d4e940" }}
            >
              <button className="bg-transparent border-0">
                <i
                  className="bi bi-gear-fill text-center"
                  style={{ width: "24px", height: "24px" }}
                ></i>
              </button>
            </div>
            <div
              className="d-flex justify-content-center border rounded-circle me-5"
              style={{ width: "44px", height: "44px", border: "#c3d4e940" }}
            >
              <button className="bg-transparent border-0">
                <img
                  src={person}
                  className="img-fluid rounded-circle"
                  alt="Pessoa"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*Banner carros and Popular cars*/}
      <section
        className="w-100 min-vh-100 p-3"
        style={{ background: "#F6F7F9" }}
      >
        <div className="container p-0">
          <div className="row mt-4 justify-content-between">
            {/*Ads 1 */}
            <div
              className="rounded-2"
              style={{ background: "#54A6FF", width: "660px" }}
            >
              <div className="d-flex flex-column">
                <span
                  className="text-light ms-2 mt-3"
                  style={{
                    maxWidth: "350px",
                    fontSize: "32px",
                    lineHeight: "-3%",
                  }}
                >
                  The best Plataform for Car Rental
                </span>
                <span
                  className="text-light ms-2 mt-2"
                  style={{ width: "300px", fontSize: "16px" }}
                >
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </span>
                <Link
                  to="/"
                  className="p-2 text-light text-decoration-none mb-2 rounded-2 text-center ms-2 mt-3"
                  style={{ background: "#3563E9", width: "120px" }}
                >
                  Rental Car
                </Link>
                <div className="w-100 d-flex justify-content-center">
                  <img src={car1} className="mt-3" alt="Carro ads 1" />
                </div>
              </div>
            </div>
            {/*Ads 2 */}
            <div
              className="rounded-2"
              style={{ background: "#3563E9", width: "660px" }}
            >
              <div className="d-flex flex-column">
                <span
                  className="text-light ms-2 mt-3"
                  style={{
                    maxWidth: "350px",
                    fontSize: "32px",
                    lineHeight: "-3%",
                  }}
                >
                  Easy way to rent a car at a low price
                </span>
                <span
                  className="text-light ms-2 mt-2 mb-2"
                  style={{ width: "300px", fontSize: "16px" }}
                >
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </span>
                <Link
                  to="/"
                  className="p-2 text-light text-decoration-none mb-2 rounded-2 text-center ms-2 mt-3"
                  style={{ background: "#54A6FF", width: "120px" }}
                >
                  Rental Car
                </Link>
                <div className="w-100 d-flex justify-content-center">
                  <img src={car2} className="mt-3" alt="Carro ads 2" />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 align-items-center justify-content-between">
            <div
              className="col-5 p-3 rounded-3"
              style={{ background: "#FFFFFF" }}
            >
              <div className="w-100 d-flex align-items-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    background: "#3563E94D",
                    width: "16px",
                    height: "16px",
                  }}
                >
                  <div
                    className="rounded-circle"
                    style={{
                      background: "#3563E9",
                      width: "8px",
                      height: "8px",
                    }}
                  ></div>
                </div>
                <span
                  className="ms-2"
                  style={{ color: "#1A202C", fontSize: "16px" }}
                >
                  Pick - Up
                </span>
              </div>

              <div className="d-flex mt-3">
                <div className="d-flex flex-column border-end">
                  <span
                    className="fw-bold"
                    style={{ color: "#1A202C", fontSize: "16px" }}
                  >
                    Locations
                  </span>
                  <select
                    name=""
                    id=""
                    className="border-0 text-muted me-5"
                    style={{ outline: "none", fontSize: "12px" }}
                  >
                    <option value="">Select your city</option>
                    <option value="mgil">Monsenhor Gil</option>
                    <option value="teresina">Teresina</option>
                    <option value="agua-branca">Água Branca</option>
                  </select>
                </div>

                <div className="d-flex flex-column border-end ms-3">
                  <span
                    className="fw-bold"
                    style={{ color: "#1A202C", fontSize: "16px" }}
                  >
                    Date
                  </span>
                  <input
                    type="date"
                    className="border-0 text-muted me-5"
                    style={{ fontSize: "12px" }}
                    placeholder="Select your date"
                    name=""
                    id=""
                  />
                </div>

                <div className="d-flex flex-column ms-3">
                  <span
                    className="fw-bold"
                    style={{ color: "#1A202C", fontSize: "16px" }}
                  >
                    Time
                  </span>
                  <select
                    name=""
                    id=""
                    className="border-0 text-muted me-5"
                    style={{ outline: "none", fontSize: "12px" }}
                  >
                    <option value="">Select your time</option>
                    <option value="01">09:00 AM</option>
                    <option value="02">12:00 PM</option>
                    <option value="03">16:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="rounded-3 d-flex justify-content-center p-2"
              style={{ background: "#3563E9", width: "60px" }}
            >
              <button className="bg-transparent border-0 p-2">
                <i className="bi bi-arrow-down-up text-light"></i>
              </button>
            </div>

            <div
              className="col-5 p-3 rounded-3"
              style={{ background: "#FFFFFF" }}
            >
              <div className="w-100 d-flex align-items-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    background: "#3563E94D",
                    width: "16px",
                    height: "16px",
                  }}
                >
                  <div
                    className="rounded-circle"
                    style={{
                      background: "#3563E9",
                      width: "8px",
                      height: "8px",
                    }}
                  ></div>
                </div>
                <span
                  className="ms-2"
                  style={{ color: "#1A202C", fontSize: "16px" }}
                >
                  Drop - Off
                </span>
              </div>

              <div className="d-flex mt-3">
                <div className="d-flex flex-column border-end">
                  <span
                    className="fw-bold"
                    style={{ color: "#1A202C", fontSize: "16px" }}
                  >
                    Locations
                  </span>
                  <select
                    name=""
                    id=""
                    className="border-0 text-muted me-5"
                    style={{ outline: "none", fontSize: "12px" }}
                  >
                    <option value="">Select your city</option>
                    <option value="mgil">Monsenhor Gil</option>
                    <option value="teresina">Teresina</option>
                    <option value="agua-branca">Água Branca</option>
                  </select>
                </div>

                <div className="d-flex flex-column border-end ms-3">
                  <span
                    className="fw-bold"
                    style={{ color: "#1A202C", fontSize: "16px" }}
                  >
                    Date
                  </span>
                  <input
                    type="date"
                    className="border-0 text-muted me-5"
                    style={{ fontSize: "12px" }}
                    placeholder="Select your date"
                    name=""
                    id=""
                  />
                </div>

                <div className="d-flex flex-column ms-3">
                  <span
                    className="fw-bold"
                    style={{ color: "#1A202C", fontSize: "16px" }}
                  >
                    Time
                  </span>
                  <select
                    name=""
                    id=""
                    className="border-0 text-muted me-5"
                    style={{ outline: "none", fontSize: "12px" }}
                  >
                    <option value="">Select your time</option>
                    <option value="01">09:00 AM</option>
                    <option value="02">12:00 PM</option>
                    <option value="03">16:00 PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100 mt-5">
            <h1
              className="fw-medium"
              style={{ fontSize: "16px", color: "#90A3BF" }}
            >
              Popular Car
            </h1>
            <div className="row mt-4">
              {car
                .map((item) => (
                  <div key={item.id} className="col-3 mt-4">
                    <div className="card border-0" style={{ width: "304px" }}>
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="card-title">{item.name}</h5>
                          <button className="bg-transparent border-0">
                            <Hearts />
                          </button>
                        </div>
                        <p
                          className="card-text"
                          style={{ fontSize: "14px", color: "#90A3BF" }}
                        >
                          {item.type}
                        </p>
                        <img
                          src={item.images[0]?.image}
                          className="img-fluid"
                          alt={item.name}
                        />
                        <div className="d-flex align-items-center justify-content-between mt-3">
                          <div
                            className="d-flex align-items-center"
                            style={{ color: "#90A3BF" }}
                          >
                            <i
                              class="bi bi-fuel-pump-fill"
                              style={{ width: "24px" }}
                            ></i>
                            <span style={{ fontSize: "14px" }}>
                              {item.fuel_capacity}L
                            </span>
                          </div>

                          <div
                            className="d-flex align-items-center"
                            style={{ color: "#90A3BF" }}
                          >
                            <img
                              src={vol}
                              className="me-1"
                              alt="Volante card"
                            />
                            <span style={{ fontSize: "14px" }}>
                              {item.transmission}
                            </span>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            style={{ color: "#90A3BF" }}
                          >
                            <i
                              class="bi bi-people-fill"
                              style={{ width: "24px" }}
                            ></i>
                            <span style={{ fontSize: "14px" }}>
                              {item.capacity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                .slice(0, 4)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
