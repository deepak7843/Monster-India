import "./HomePage.css";
import HomeSlider1 from "./Slider/HomeSlider1";
import HomeSlider2 from "./Slider/HomeSlider2";
import HomeSlider3 from "./Slider/HomeSlider3";
// import HomeSlider2 from "../Slider/HomeSlider2";
// import HomeSlider3 from "../Slider/HomeSlider3";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="hometopdiv">
          <p>500,000+ Jobs. Find Better. Faster</p>
          <div className="home-main1">
            <div className="home-inner1">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "17px 30px 0 30px",
                }}
              >
                <div style={{ borderBottom: "2px solid white" }}>All Jobs</div>
                <div>Work From Home</div>
                <div style={{ backgroundColor: "#ec167f", height: "25px" }}>
                  TRIUMPH Jobs
                </div>
                <div>Contract Jobs</div>
                <div>Fresher Jobs</div>
              </div>

              <div style={{ margin: "20px 10px 0 " }}>
                <input
                  style={{
                    height: "40px",
                    width: "440px",
                    border: "1px solid black",
                    margin: "15px 0 0 20px",
                  }}
                  type="text"
                  placeholder=" 🔍 Search by Skills, Company & Job Title                                             🔊"
                />
                <button
                  style={{
                    height: "40px",
                    width: "120px",
                    backgroundColor: "#5c4da8",
                    color: "white",
                  }}
                >
                  Search
                </button>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  margin: "20px 0 0 480px",
                  cursor: "pointer",
                }}
              >
                Advanced Search
              </div>

              <div style={{ display: "flex", margin: "5px 0 0 20px" }}>
                <div style={{ fontSize: "15px" }}>Trending Searches : </div>
                <div
                  style={{
                    fontSize: "14px",
                    width: "430px",
                    paddingLeft: "5px",
                  }}
                >
                  {" "}
                  Jobs in Delhi, Jobs in Mumbai, Jobs in Hyderabad, Jobs in
                  Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in Kolkata,Jobs
                  in Lucknow
                </div>
              </div>
            </div>

            <div className="home-main2">
              <div className="home-inner2">
                <h4
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "20px 20px 20px 55px",
                  }}
                >
                  NEW TO MONSTER
                </h4>
                <div
                  style={{
                    color: "#6159b0",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "20px 20px 20px 55px",
                  }}
                >
                  REGISTER WITH US
                </div>
                <hr />
                <div style={{ color: "black", textAlign: "center" }}>Or</div>

                <div
                  style={{
                    margin: "15px 15px 15px 15px",
                    textAlign: "center",
                    height: "53px",
                    width: "200px",
                    backgroundColor: "rgb(244,135,34)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      paddingTop: "5px",
                    }}
                  >
                    UPLOAD RESUME
                  </div>
                  <div style={{ color: "white", paddingTop: "1px" }}>
                    We will create your profile
                  </div>
                </div>
              </div>

              <div className="home-inner2">
                <h4
                  style={{
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "10px 20px 20px 55px",
                  }}
                >
                  FREE JOB ALERT
                </h4>
                <div
                  style={{
                    color: "#6159b0",
                    fontSize: "14px",
                    fontWeight: "bold",
                    margin: "20px 20px 20px 55px",
                  }}
                >
                  Get an email on jobs matching your criteria
                </div>
                <hr />

                <div style={{ color: "black", textAlign: "center" }}>
                  No registration required
                </div>
                <div
                  style={{
                    margin: "15px 15px 15px 15px",
                    textAlign: "center",
                    height: "47px",
                    width: "200px",
                    backgroundColor: "white",
                    border: "1px solid rgb(92,77,168)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      paddingTop: "12px",
                      color: "rgb(92,77,168)",
                    }}
                  >
                    CREATE JOB ALERT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="set">
          <HomeSlider1 />

          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  height: "120px",
                  width: "900px",
                  margin: "10px 0 0 140px",
                  backgroundColor: "#f8e7af",
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "110px",
                      width: "200px",
                      margin: "10px 0 0 0",
                    }}
                    src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png"
                    alt=""
                  />
                </div>
                <div style={{ margin: "30px 0 0 0" }}>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    What it feels like to have 48% more interview calls
                  </div>
                  <div>To get 5x more recruiter views on your profile</div>
                </div>
              </div>

              <HomeSlider2 />
              <HomeSlider3 />

              <div
                style={{
                  margin: "90px 0 0 140px",
                  width: "900px",
                  height: "350px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    margin: "30px 0 0 30px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    paddingTop: "30px",
                  }}
                >
                  Premium Services
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    margin: "30px 0 0 30px",
                  }}
                >
                  <div
                    style={{
                      height: "220px",
                      width: "200px",
                      backgroundColor: "rgb(249,253,248)",
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "rgb(239,248,236)",
                      }}
                    >
                      <img
                        style={{
                          width: "70px",
                          height: "100px",
                          marginLeft: "60px",
                        }}
                        src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        margin: "10px 0 0 20px",
                      }}
                    >
                      Resume Writing
                    </div>
                    <div
                      style={{ fontSize: "13px", margin: "0px 40px 0 20px" }}
                    >
                      Professionally written resume + cover letter
                    </div>
                    <div
                      style={{
                        color: "blue",
                        margin: "13px 0 0 80px",
                        cursor: "pointer",
                      }}
                    >
                      ->Read More
                    </div>
                  </div>

                  <div
                    style={{
                      height: "220px",
                      width: "200px",
                      backgroundColor: "rgb(249,253,248)",
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "rgb(239,248,236)",
                      }}
                    >
                      <img
                        style={{
                          width: "70px",
                          height: "100px",
                          marginLeft: "60px",
                        }}
                        src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/Xra3gEbEDCZChclt6KyeY08aT14mQIemY87tp56k.png"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        margin: "10px 0 0 20px",
                      }}
                    >
                      Featured Profile
                    </div>
                    <div
                      style={{ fontSize: "13px", margin: "0px 40px 0 20px" }}
                    >
                      Better your chances of getting shortlisted
                    </div>
                    <div
                      style={{
                        color: "blue",
                        margin: "13px 0 0 80px",
                        cursor: "pointer",
                      }}
                    >
                      ->Read More
                    </div>
                  </div>

                  <div
                    style={{
                      height: "220px",
                      width: "200px",
                      backgroundColor: "rgb(249,253,248)",
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "rgb(239,248,236)",
                      }}
                    >
                      <img
                        style={{
                          width: "70px",
                          height: "100px",
                          marginLeft: "60px",
                        }}
                        src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/K109Ubc6KIVisXQSRJaQhTSXJpOAkU0UUA2dpe7R.png"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        margin: "10px 0 0 20px",
                      }}
                    >
                      Profile Highlighter
                    </div>
                    <div
                      style={{ fontSize: "13px", margin: "0px 40px 0 20px" }}
                    >
                      Grab the attention of employers
                    </div>
                    <div
                      style={{
                        color: "blue",
                        margin: "13px 0 0 80px",
                        cursor: "pointer",
                      }}
                    >
                      ->Read More
                    </div>
                  </div>

                  <div
                    style={{
                      height: "220px",
                      width: "200px",
                      backgroundColor: "rgb(249,253,248)",
                    }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "rgb(239,248,236)",
                      }}
                    >
                      <img
                        style={{
                          width: "70px",
                          height: "100px",
                          marginLeft: "60px",
                        }}
                        src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/UWwaneAf2OBhqcauh7PujGU5mIavChpFlRnZabZp.png"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        margin: "10px 0 0 20px",
                      }}
                    >
                      Career Booster
                    </div>
                    <div
                      style={{ fontSize: "13px", margin: "0px 40px 0 20px" }}
                    >
                      Get power and speed up your job search
                    </div>
                    <div
                      style={{
                        color: "blue",
                        margin: "13px 0 0 80px",
                        cursor: "pointer",
                      }}
                    >
                      ->Read More
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  margin: "20px 0 0 140px",
                  width: "900px",
                }}
              >
                <div
                  style={{
                    margin: "20px 0 0 30px",
                    padding: "30px 0 15px 0",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Find Job By Vacancies
                </div>
                <div className="vacancyjob">
                  <div
                    style={{
                      backgroundColor: "rgb(92,77,167)",
                      color: "white",
                    }}
                  >
                    Skill
                  </div>
                  <div>Location</div>
                  <div>Industry</div>
                  <div>Function</div>
                  <div>Roles</div>
                  <div>Company</div>
                </div>

                <div className="vacancyjob1">
                  <div>
                    <div>Sales</div>
                    <div>Java </div>
                    <div>
                      Jio Customer Associate<br></br> Freelancer{" "}
                    </div>
                    <div>
                      Jio Customer Associate<br></br> Freelancer{" "}
                    </div>
                  </div>
                  <div>
                    <div>Operations</div>
                    <div>Software Eng </div>
                    <div>Sql</div>
                    <div>Javascript</div>
                    <div>Python</div>
                  </div>
                  <div>
                    <div>Customer Service</div>
                    <div>Good Communication</div>
                    <div>Lead Generation</div>
                    <div>HTML</div>
                    <div>CSS</div>
                  </div>
                  <div>
                    <div>Voice Process</div>
                    <div>Problem Solver</div>
                    <div>Bpo</div>
                    <div>Marketing</div>
                    <div>Customer Support</div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  style={{ margin: "20px 0 0 190px" }}
                  src="https://tpc.googlesyndication.com/simgad/1057082815438327185"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div style={{ margin: "20px 0 0 30px", height:"200px", width:"250px" }}>
                <img style={{height:"100%", width:"100%"}}
                  src="https://tpc.googlesyndication.com/simgad/16477560418161237424"
                  alt=""
                />
              </div>

              <div className="jobby">
                <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Jobs by Top Skills
                </h1>
                <hr></hr>
                <p>Accounting Jobs</p>
                <p>Analytics Jobs</p>
                <p>Animation Jobs</p>
                <p>Architecture Jobs</p>
                <p>Banking Jobs</p>
                <p>BPO Jobs</p>
                <p>Data Science Jobs</p>
                <p>Java Jobs</p>
                <p>Marketing Jobs</p>
                <p>Networking Jobs</p>
                <p>UX/UI Jobs</p>
              </div>
              <div style={{ margin: "20px 0 0 0px" }}>
                <img style={{width:"100%"}}
                  src="https://tpc.googlesyndication.com/simgad/11380897855822522918"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
