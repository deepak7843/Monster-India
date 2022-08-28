import React from 'react'
import style from './careerpage.module.css';
import { FaComment, FaFacebook, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

const CareerPage = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", textAlign:"center",alignItems:"center" }}>
    <div className={style.mainCareer}>

        <div className={style.upperCareer}>
            <div className={style.upperCareer}  style={{width:"1001px", padding:"3px"}}>


                <div style={{display:"grid" ,width:"667px", height:"669px"}}>
                    <div style={{textAlign:"left", marginBottom:"-20px"}}>
                    <a href="#" style={{height:"15px", width:"89px", backgroundColor:"#4c4084", color:"white",
                        padding:"3px 4px 2px", font:"400", letterSpacing: "1px !important", fontSize: "10px", textDecoration:"none", textAlign:"left"}}>INTERVIEW TIPS</a>
                    </div>
                    <h2 className={style.description}>System Engineer Job Description</h2>
                    <p className={style.date}>Team Monster -August 24, 2022</p>
                    <img height="477px" width="640px" src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg" />
                    <p style={{fontSize:"14.5px", width:"637px", textAlign:"left",lineHeight: "1.3 !important", fontFamily: "Source Sans Pro !important"}}>Business these days is tricky, and so is its operation. Systems engineering is a process that includes identifying customers' needs and providing a suitable solution for them. The developed...</p>
                </div>


                <div style={{display:"grid",width:"333px", height:"700px",gap:"25px", padding:"0px 15px 0px 15px"}}>
                    <div>
                        <div style={{textAlign:"left"}}>
                        <img width="303px" height="136px" src="https://media.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg"/>
                        </div>
                        <h3 className={style.smalldescription} style={{width:"303px"}}><a href="#">System Engineer Job Description</a></h3>
                        <p className={style.date}>Team Monster -August 24, 2022</p>

                    </div>
                    <div>
                        <div style={{textAlign:"left"}}>
                            <img width="303px" height="136px" src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/Supply-Chain-Manager-job-description.jpg" />
                        </div>
                        <h1 className={style.smalldescription}><a>Supply Chain Manager Job Description</a></h1>
                        <p className={style.date}>Team Monster -August 24, 2022</p>
                        
                    </div>
                    <div>
                        <div style={{textAlign:"left"}}>
                        <img width="303px" height="136px" src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/Sales-Director-job-description.jpg" />
                        </div>
                        <h3 className={style.smalldescription}><a>Sales Director Job Description</a></h3>
                        <p className={style.date}>Team Monster -August 24, 2022</p>

                    </div>
                </div>
            </div>
            <div className={style.grid}>
                <div>
                    <div className={style.editorPicks}>
                    <h4>Editor Picks</h4>
                    </div>
                    <div className={style.flex}>
                        <div style={{width:"220px"}}>
                        <h3 className={style.smalldescription} style={{width:"169px"}}><a href="#">System Engineer Job Description</a></h3>
                        <p className={style.date}>Team Monster -August 24, 2022</p>
                        </div>
                        <div>
                            <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg"/>
                        </div>
                    </div>
                </div>
                <div>
                    <span className={style.ad}>- Advertisement -</span>
                    <img height="250px" width="250px" src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/01/RHS_Banner_2.jpg"/>
                </div>
               
                <div className={style.editorPicks} style={{marginBottom:"50px"}}>
                    <h4>Interview Tips</h4>
                </div>
                <div>
                    <div className={style.flex}>
                        <div style={{width:"220px"}}>
                        <h3 className={style.smalldescription} style={{width:"169px"}}><a href="#">System Engineer Job Description</a></h3>
                        <p className={style.date}>August 24, 2022</p>
                        </div>
                        <div>
                            <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg"/>
                        </div>
                    </div>

                    <div className={style.flex}>
                        <div style={{width:"220px"}}>
                        <h3 className={style.smalldescription} style={{width:"175px"}}><a href="#">Supply Chain Manager Job Description</a></h3>
                        <p className={style.date}>August 24, 2022</p>
                        </div>
                        <div>
                            <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg"/>
                        </div>
                    </div>

                    <div className={style.flex}>
                        <div style={{width:"230px"}}>
                        <h3 className={style.smalldescription} style={{width:"169px"}}><a href="#">Sales Director Job Description</a></h3>
                        <p className={style.date}>August 24, 2022</p>
                        </div>
                        <div>
                            <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.careerFlex}>
            <div>
                <h4>
                    <span>New in Job Search</span>
                </h4>
                <div className={style.flex1}>
                    <div>
                        <h3 className={style.smalldescription} style={{width:"290px", fontSize:"18px"}}><a>5 Must-Read Books for Accountants</a></h3>
                        <p className={style.date}>Team Monster -June 7, 2021</p>
                    </div>
                    <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/06/account-book-218x150.jpg" />
                </div>
            </div>
            <div>
                <h4>
                    <span>New in Interview Tips</span>
                </h4>
                <div className={style.flex1}>
                    <div>
                        <h3 className={style.smalldescription} style={{width:"290px", fontSize:"18px"}}><a>Systems Engineer Job Description</a></h3>
                        <p className={style.date}>August 24, 2022</p>
                    </div>
                    <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/08/System-Engineer-job-description.jpg" />
                </div>
            </div>
           <div>
                <h4>
                    <span>Stay Connected</span>
                </h4>
                <div className={style.stayGrid}>
                    <div className={style.grid1} style={{background:"#516eab"}}>
                        <span><FaFacebook /></span>
                        <span style={{fontSize:"17px"}}>759,772</span>
                        <span>Fans</span>
                    </div>
                    <div className={style.grid1} style={{background:"#29c5f6"}}>
                        <span><FaTwitter /></span>
                        <span style={{fontSize:"17px"}}>22,200</span>
                        <span>Followers</span>
                    </div>
                    <div className={style.grid1} style={{background:"#e14e42"}}>
                        <span><FaYoutube /></span>
                        <span style={{fontSize:"17px"}}>8,005</span>
                        <span>Subscribiers</span>
                    </div>
                </div>
           </div>
        </div>


        {/* <--------Career Management---------> */}
        <div className={style.mgmtFlex}>

           {/* <---------left----------> */}
            <div className={style.covid19}>
                <h4 ><span>Covid-19 Career</span></h4>
                <div>
                    <div>
                        <h3 className={style.smalldescription1}><a href="#">Companies that are Hiring Amid Coronavirus Outbreak</a></h3>
                        <p className={style.date}>September 8, 2020</p>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1} ><a href="#">Tips and Ideas to Set Up a Home Office You Love</a></h3>
                        <p className={style.date}>August 20, 2020</p>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1} ><a href="#">Coronavirus Pandemic is Changing the Way Recruiters Hire</a></h3>
                        <p className={style.date}>July 22, 2020</p>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1} ><a href="#">Top 10 In-demand Jobs in Coronavirus Pandemic</a></h3>
                        <p className={style.date}>July 17, 2020</p>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1} ><a href="#">Increase Your Chances of Earning Online with these 6 Skills</a></h3>
                        <p className={style.date}>June 30, 2020</p>
                    </div>
                    <div className={style.seeMore}>
                        <button className={style.button}>See More <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///+2traIiIj09PSpqan39/f7+/tTU1Nvb29MTEyurq7Y2NiAgICfn5/U1NTo6OjFxcUnJyfMzMzh4eFbW1uWlpYvLy+Ojo5mZma9vb3e3t51dXWYmJhYWFghISFFRUUaGho7OztxcMBcAAACvUlEQVR4nO3d2XKbQBCFYRIJ7Ua7vMqL3v8hEywnKsfdA2V3Vafb/3fpq3MKAyOYYaoKAAAAAAAAAAAAAAAAQNn+8DOew75vvcn6R1TrSY9+10vvmF+yvO4qOPWO+GXTcsHaO5+BulTwxjudiRu94Mw7m5GZ2nDoHc3IUCt48E5m5qA0HHkHMzOSC9565zJ0Kzace8cyNBcbLrxjGVqIDcfesQyNk19otEsNDSORG668YxlaiQ3vvGMZuhMbXnnHMnQlNqy8YxmSCyYa1MhDmkwHUSuY5kxUzsJWjsupfCF9c++dzsB9qWCGo1g8gq3oD0w7Hpe+auIOUEdNj36tfb0e/tcWx/n2wx/Xde9XMwAAAAAAAAAAAAB6mzTLeJPcVsumz6qnVh34HXBxvcybaeypwuPO9/jp52LEXXp4sc5esFgx/7w272RmtIIZlleeaTcN71yG5IIP3rEMPYgN498KL+SbYryhqE5ebxF3OPrRd10VlL9h7B8V78nrD3fesQztxIZ5hjTaoGbvHcuQMh86z4kon4ZZvvvRUr/9kWVUI49oWo/e0Yw8qg2ro3c2E0e9YI6KxYIZHtUUFh+epf/W12+TrXfMT9v2fXNRPTZ1PE3hEgoAAAAAAAAAAADgkzbNLuLkofGu2fTqN4u8C8RC30Tnr+izvbs+QfsUf7ug4VOxYIZ5wqNSxRwT2/RpbWnm0KorSZ+9k5l5VhrGnSn0r61c8MU7l6EXsWGeKcLaJOEcS2TP5IWy8W/2F/L+gBnu9n9813VP+RtG/E2okZeUxJ7+/N5SbNh4xzIk73Ox8Y5lSHmckWEbnTNtM508W63KG60mOoiF/ZC8oxnRC1Yn72wmToWGKfYe71hYcrJ8GOUxSloVj+Cr2Df+fltaDaI+118MevU7/7MO4un+9wQAAAAAAAAAAACA5H4B4lBZtnfpmU8AAAAASUVORK5CYII=" alt="image155"/></button>
                    </div>
                </div>
            </div>

            {/* <-------center-------> */}
            <div className={style.careerMgmt}>
                <div>
                    <h4><span>Career Management</span></h4>
                </div>
                <div className={style.mgmtGrid}>
                <div className={style.mgmtFlex}>
                    <div>
                        <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice-485x360.jpg"/>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1}><a href="#">Career Guidance, Courses and Career Options After 12</a></h3>
                        <p className={style.date}>September 1, 2021</p>
                        <div className={style.text}>Career guidance after 12th Career guidance after 12 that will determine the rest of your life for you is not an easy decision for a...</div>
                    </div>
                </div>

                <div className={style.mgmtFlex}>
                    <div>
                        <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/career-option-485x360.jpg"/>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1}><a href="#">Career option after 12th Humanities</a></h3>
                        <p className={style.date}>August 31, 2021</p>
                        <div className={style.text}>Unlike Science and Commerce, courses after 12th humanities do not provide Limited career choices. On the contrary, the Humanities courses help open the most...</div>
                    </div>
                </div>

                <div className={style.mgmtFlex}>
                    <div>
                        <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/Courses-for-PCM-Students-After-Class-12th-485x360.jpg"/>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1}><a href="#">Courses after 12th Commerce without Maths</a></h3>
                        <p className={style.date}>August 31, 2021</p>
                        <div className={style.text}>After graduating high school, deciding on the course and the college where the student wants to build their career further, is an important decision....</div>
                    </div>
                </div>

                <div className={style.mgmtFlex}>
                    <div>
                        <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/PCM-Students-After-Class-12th-485x360.jpg"/>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1}><a href="#">Courses for PCM Students After Class 12th</a></h3>
                        <p className={style.date}>August 31, 2021</p>
                        <div className={style.text}>12th grade is one of the life changing periods in every students’ life. It comes with the responsibility of answering the greatest question that...</div>
                    </div>
                </div>

                <div className={style.mgmtFlex}>
                    <div>
                        <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma-485x360.jpg"/>
                    </div>
                    <div>
                        <h3 className={style.smalldescription1}><a href="#">Careers and Jobs After B Pharm</a></h3>
                        <p className={style.date}>August 27, 2021</p>
                        <div className={style.text}>Bachelor of Pharmacy of b.pharm is a 4-year undergraduate course designed to provide students with a deeper understanding of the pharmacy sector. The pharmacy...</div>
                    </div>
                </div>
                </div>
            </div>

            {/* <--------right--------> */}
            <div className={style.resume}>
                <div className={style.border}>
                    <h4 style={{width:"340px"}}><span>Resume & Cover Letters</span></h4>
                    <div style={{displey:"grid", gap:"-10px"}}>
                        <div className={style.resumeFlex}>
                            <div><h3 className={style.smalldescription1} ><a href="#">Student Resume Examples: Samples, Guide & Writing Tips to get Internship Quickly</a></h3>
                            <p className={style.date}>July 23, 2021</p></div>
                            <div><img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/07/student-resume-examples-218x150.jpg"/></div>
                        </div>
                        <div style={{paddingLeft:"5px"}}>
                            <div><h3 className={style.smalldescription1} ><a href="#">Key Skills in Resume for Freshers and Experienced</a></h3>
                            <p className={style.date}>July 23, 2021</p></div>
                        </div>
                        <div className={style.resumeFlex}>
                            <div><h3 className={style.smalldescription1} ><a href="#">Objective for Resume for Fresher and Experienced</a></h3>
                            <p className={style.date}>July 23, 2021</p></div>
                            <div><img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/07/objective-for-resume-218x150.jpg" /></div>
                        </div>
                        <div className={style.seeMore} style={{textAlign:"left", marginLeft:"15px"}}>
                        <button className={style.button} style={{width:"109px"}}>See More <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///+2traIiIj09PSpqan39/f7+/tTU1Nvb29MTEyurq7Y2NiAgICfn5/U1NTo6OjFxcUnJyfMzMzh4eFbW1uWlpYvLy+Ojo5mZma9vb3e3t51dXWYmJhYWFghISFFRUUaGho7OztxcMBcAAACvUlEQVR4nO3d2XKbQBCFYRIJ7Ua7vMqL3v8hEywnKsfdA2V3Vafb/3fpq3MKAyOYYaoKAAAAAAAAAAAAAAAAQNn+8DOew75vvcn6R1TrSY9+10vvmF+yvO4qOPWO+GXTcsHaO5+BulTwxjudiRu94Mw7m5GZ2nDoHc3IUCt48E5m5qA0HHkHMzOSC9565zJ0Kzace8cyNBcbLrxjGVqIDcfesQyNk19otEsNDSORG668YxlaiQ3vvGMZuhMbXnnHMnQlNqy8YxmSCyYa1MhDmkwHUSuY5kxUzsJWjsupfCF9c++dzsB9qWCGo1g8gq3oD0w7Hpe+auIOUEdNj36tfb0e/tcWx/n2wx/Xde9XMwAAAAAAAAAAAAB6mzTLeJPcVsumz6qnVh34HXBxvcybaeypwuPO9/jp52LEXXp4sc5esFgx/7w272RmtIIZlleeaTcN71yG5IIP3rEMPYgN498KL+SbYryhqE5ebxF3OPrRd10VlL9h7B8V78nrD3fesQztxIZ5hjTaoGbvHcuQMh86z4kon4ZZvvvRUr/9kWVUI49oWo/e0Yw8qg2ro3c2E0e9YI6KxYIZHtUUFh+epf/W12+TrXfMT9v2fXNRPTZ1PE3hEgoAAAAAAAAAAADgkzbNLuLkofGu2fTqN4u8C8RC30Tnr+izvbs+QfsUf7ug4VOxYIZ5wqNSxRwT2/RpbWnm0KorSZ+9k5l5VhrGnSn0r61c8MU7l6EXsWGeKcLaJOEcS2TP5IWy8W/2F/L+gBnu9n9813VP+RtG/E2okZeUxJ7+/N5SbNh4xzIk73Ox8Y5lSHmckWEbnTNtM508W63KG60mOoiF/ZC8oxnRC1Yn72wmToWGKfYe71hYcrJ8GOUxSloVj+Cr2Df+fltaDaI+118MevU7/7MO4un+9wQAAAAAAAAAAACA5H4B4lBZtnfpmU8AAAAASUVORK5CYII=" /></button>
                    </div>
                    </div>
                </div>
                <div className={style.border}>
                    <div>
                        <span className={style.ad}>- Advertisement -</span>
                        <img height="100%" width="250px" src="https://www.monsterindia.com/career-advice/wp-content/uploads/2022/01/RHS_Banner_Monster.jpg"/>
                    </div>
                     {/* <div style={{display:"grid"}}>
                    <h3 className={style.smalldescription} style={{width:"292px", fontSize:"25px", color:"#5d4da8"}}><a>Salary Negotiation</a></h3>
                        <div className={style.resumeFlex}>
                            <div><h3 className={style.smalldescription1} ><a href="#">Relocation Negotiation</a></h3>
                            <p className={style.date}>July 1, 2020</p></div>
                            <div><img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1593597941.jpg"/></div>
                        </div>
                        <div className={style.resumeFlex}>
                            <div><h3 className={style.smalldescription1} ><a href="#">Money Talks: how to negotiate a salary and get that little extra</a></h3>
                            <p className={style.date}>July 1, 2020</p></div>
                            <div><img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1593597663.jpg"/></div>
                        </div>
                        <div className={style.seeMore} style={{textAlign:"left", marginLeft:"15px"}}>
                        <button className={style.button} style={{width:"109px"}}>See More <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD///+2traIiIj09PSpqan39/f7+/tTU1Nvb29MTEyurq7Y2NiAgICfn5/U1NTo6OjFxcUnJyfMzMzh4eFbW1uWlpYvLy+Ojo5mZma9vb3e3t51dXWYmJhYWFghISFFRUUaGho7OztxcMBcAAACvUlEQVR4nO3d2XKbQBCFYRIJ7Ua7vMqL3v8hEywnKsfdA2V3Vafb/3fpq3MKAyOYYaoKAAAAAAAAAAAAAAAAQNn+8DOew75vvcn6R1TrSY9+10vvmF+yvO4qOPWO+GXTcsHaO5+BulTwxjudiRu94Mw7m5GZ2nDoHc3IUCt48E5m5qA0HHkHMzOSC9565zJ0Kzace8cyNBcbLrxjGVqIDcfesQyNk19otEsNDSORG668YxlaiQ3vvGMZuhMbXnnHMnQlNqy8YxmSCyYa1MhDmkwHUSuY5kxUzsJWjsupfCF9c++dzsB9qWCGo1g8gq3oD0w7Hpe+auIOUEdNj36tfb0e/tcWx/n2wx/Xde9XMwAAAAAAAAAAAAB6mzTLeJPcVsumz6qnVh34HXBxvcybaeypwuPO9/jp52LEXXp4sc5esFgx/7w272RmtIIZlleeaTcN71yG5IIP3rEMPYgN498KL+SbYryhqE5ebxF3OPrRd10VlL9h7B8V78nrD3fesQztxIZ5hjTaoGbvHcuQMh86z4kon4ZZvvvRUr/9kWVUI49oWo/e0Yw8qg2ro3c2E0e9YI6KxYIZHtUUFh+epf/W12+TrXfMT9v2fXNRPTZ1PE3hEgoAAAAAAAAAAADgkzbNLuLkofGu2fTqN4u8C8RC30Tnr+izvbs+QfsUf7ug4VOxYIZ5wqNSxRwT2/RpbWnm0KorSZ+9k5l5VhrGnSn0r61c8MU7l6EXsWGeKcLaJOEcS2TP5IWy8W/2F/L+gBnu9n9813VP+RtG/E2okZeUxJ7+/N5SbNh4xzIk73Ox8Y5lSHmckWEbnTNtM508W63KG60mOoiF/ZC8oxnRC1Yn72wmToWGKfYe71hYcrJ8GOUxSloVj+Cr2Df+fltaDaI+118MevU7/7MO4un+9wQAAAAAAAAAAACA5H4B4lBZtnfpmU8AAAAASUVORK5CYII=" /></button>
                        </div>
                    </div>  */}
                </div>
               
            </div>
        </div>
    </div>
    </div>
  )
}

export default CareerPage


