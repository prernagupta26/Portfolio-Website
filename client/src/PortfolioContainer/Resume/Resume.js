import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    //here we have
    const programmingSkillsDetails = [
        { skill: "Java", ratingPercentage: 85 },
        { skill: "Data Structures and Algorithms", ratingPercentage: 85 },
        { skill: "C++", ratingPercentage: 85 },
        { skill: "Object Oriented Programming", ratingPercentage: 89 },   
        { skill: "SpringBoot", ratingPercentage: 89 },
        { skill: "Hibernate", ratingPercentage: 70 },
        { skill: "Operating System", ratingPercentage: 85 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
            title: "CoronaVirus Tracker ",
            duration: { fromDate: "2020", toDate: "2021" },
            description:
                "Java Spring Boot application to track and monitor global coronavirus confirmed cases.",
            subHeading:
                "Technologies Used:  Java, SpringBoot, REST APIs, Maven, MongoDB.",
        },

        {
            title: "Forensic Face Sketch Construction and Recognition",
            duration: { fromDate: "2021", toDate: "2022" },
            description:
                "Facial sketch construction and identification module for law enforcement agencies to enhance criminal identification and investigation capabilities.",
            subHeading:
                "Technologies Used: Java, JavaFX, AWS rekognition",
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2022", toDate: "2023" },
            description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootstrap,HTML,CSS",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"10th"}
                subHeading={"Dayanand Public School, Shimla"}
                fromDate={"2016"}
                toDate={"2017"}
            />

            <ResumeHeading
                heading={"12th"}
                subHeading={"Dayanand Public School, Shimla"}
                fromDate={"2018"}
                toDate={"2019"}
            />
            <ResumeHeading
                heading={"B.Tech, Computer Science and Engineering"}
                subHeading={"Jaypee University of Information and Technology"}
                fromDate={"2019"}
                toDate={"2023"}
            />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Tekizma"}
                    subHeading={"Intern"}
                    fromDate={"06/2022"}
                    toDate={"07/2022"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Acquired practical experience in technical field where I integrated a download button feature to facilitate data retrieval using PHP.

                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        Configured email sending capabilities during the login process of the Tekizma portal, using MySQLi connect and PHP Mailer.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Skills: PHP, MySQLi,  PHP Mailer, SMTP{" "}
                    </span>
                    <br />
                </div>
            </div>
        </div>,

        /* PROGRAMMING SKILLS */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Gym and Fitness"
                description="I am passionate about maintaining a healthy lifestyle and regularly go to the gym to work out and stay fit. I enjoy challenging myself with different exercises and pushing my physical limits."
            />
            <ResumeHeading
                heading="Reading Novels"
                description="I have a great love for literature, and reading novels is one of my favorite pastimes. It allows me to explore different worlds, gain new perspectives, and enhance my imagination."
            />
            <ResumeHeading
                heading="E-Gaming"
                description="I am an enthusiastic gamer and enjoy playing video games in my free time. Engaging in interactive gaming sessions helps me relax and provides a source of entertainment and enjoyment."
            />
            <ResumeHeading
                heading="Cooking"
                description="I have a passion for cooking and love experimenting with different recipes. Exploring various culinary techniques and flavors brings me joy, and I enjoy creating delicious meals for myself and others to enjoy."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container fade-in" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
