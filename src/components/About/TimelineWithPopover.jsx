import React, { useEffect, useRef, useState } from "react";
import { Timeline, Popover, Button } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { div } from "motion/react-client";

const TimelineWithPopover = () => {
  const timelineItems = [
    {
      dot: <span class=" icon-circle material-symbols-outlined">work</span>,
      label: "Sept 2021",
      children: (
        <div className="timeline-content">
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus sunt alias possimus error est, quasi consequuntur
              aliquid, neque animi ratione quo modi corrupti aliquam iste? Culpa
              maxime consectetur illum repudiandae!
            </p>
          </div>
      ),
    },
    {
      dot: <span class="material-symbols-outlined icon-circle">book</span>,
      label: "Jan 2022",
      children: (
        <div className="timeline-content">
              <p>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus sunt alias possimus error est, quasi consequuntur
                aliquid, neque animi ratione quo modi corrupti aliquam iste?
                Culpa maxime consectetur illum repudiandae!
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
