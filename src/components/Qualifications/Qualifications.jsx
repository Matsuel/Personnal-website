import React from 'react';
import { useState } from 'react';
import "./quali.css";

const Qualifications = () => {

    const [toggleState, setToggleState]=useState(0);

    const toggleTab= (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qualifications section">
        <h2 className="section_title">Qualifications</h2>
        <span className="section_subtitle">My personnel formation</span>

        <div className="qualifications_container container">
            <div className="qualifications_tabs">
                <div className={toggleState===1 ? "qualifications_button qualifications_active button-flex":"qualifications_button button-flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualifications_icon"></i>
                    Education
                </div>

                <div className={toggleState===2 ? "qualifications_button qualifications_active button-flex":"qualifications_button button-flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualifications_icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualifications_sections">
                <div className={toggleState===1 ? "qualifications_content qualifications_content-active": "qualifications_content"}>
                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> kk-2027
                            </div>
                        </div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>
                    </div>

                    <div className="qualifications_data">
                        <div></div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>
                    </div>

                    <div className="qualifications_data">
                        <div></div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className={toggleState===2 ? "qualifications_content qualifications_content-active": "qualifications_content"}>
                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>
                    </div>

                    <div className="qualifications_data">
                        <div></div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        
                    </div>

                    <div className="qualifications_data">
                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>
                    </div>

                    <div className="qualifications_data">
                        <div></div>

                        <div className="">
                            <span className="qualifications_rounder"></span>
                            <span className="qualifications_line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications_title">Ynov</h3>
                            <span className="qualifications_subtitle">Ynov bordeaux Campus</span>
                            <div className="qualifications_calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-2027
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications