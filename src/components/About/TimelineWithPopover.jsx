import React, { useEffect, useRef, useState } from "react";
import { Timeline, Popover, Button } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { div } from "motion/react-client";

const TimelineWithPopover = () => {
  const timelineItems = [
    {
      dot: <span className="material-symbols-outlined icon-circle">book</span>,
      label: "Jan 2022",
      children: (
        <div className="timeline-content">
          <h3 className="timeline-title">Bachelor's in Software Engineering</h3>
          <p className="timeline-description">
            Started a Bachelor's in Software Engineering (Hons) (Part-time/Reading) at the Informatics Institute of Technology.
          </p>
        </div>
      ),
    },
    {
      dot: <span className="material-symbols-outlined icon-circle">work</span>,
      label: "Jan 2022",
      children: (
        <div className="timeline-content">
          <h3 className="timeline-title">Intern - HCL Tech</h3>
          <p className="timeline-description">
            Started as a .NET developer, building skills in the .NET Framework and SQL Server, and developing proof-of-concept (POC) projects as required.
          </p>
        </div>
      ),
    },
    {
      dot: <span className="material-symbols-outlined icon-circle">work</span>,
      label: "Mar 2023",
      children: (
        <div className="timeline-content">
          <h3 className="timeline-title">Associate Software Engineer - HCL Tech</h3>
          <p className="timeline-description">
            Worked as a back-end developer, contributing to MVC software development and related tasks for an ERP SaaS platform.
          </p>
        </div>
      ),
    },
    {
      dot: <span className="material-symbols-outlined icon-circle">work</span>,
      label: "Dec 2023",
      children: (
        <div className="timeline-content">
          <h3 className="timeline-title">Software Engineer (Trainee) - Expernetic</h3>
          <p className="timeline-description">
            Served as a full-stack developer, working on both frontend and backend tasks to improve an efficient B2B SaaS product.
          </p>
        </div>
      ),
    },
    {
      dot: <span className="material-symbols-outlined icon-circle">work</span>,
      label: "Aug 2024",
      children: (
        <div className="timeline-content">
          <h3 className="timeline-title">Associate Software Engineer - Invorg (Canada)</h3>
          <p className="timeline-description">
            Working as a full-stack developer, focusing on frontend-heavy tasks, API integration, and performance optimization for a healthcare SaaS platform.
          </p>
        </div>
      ),
    },
  ];
  
  
  return (
    <div className=" absolute left-1/2 transform -translate-x-1/2 mt-10">
    <Timeline
      style={{ color: "white", width: "20rem" }}
      mode="left"
      items={timelineItems}
    />
    </div>
  );
};

export default TimelineWithPopover;
