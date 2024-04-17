import React from "react";
import Briefcase from "../../assets/static/images/briefcase.png";
import UpComingCardDesidn from "./UpComingCardDesidn";

const UpComingEvents = () => {
  const EventsData = [
    {
      id: 1,
      img: Briefcase,
      tittle: "Job Hunting in the UK",
      calender: "Virtual",
      date: "April 29",
      timeDuration: "5:30am-7:30am",
      description:
        "We are looking for Enrollment Advisors who are looking to take most 30-35 appointments per week. All leads lorem ipsum sit amet are pre-scheduled.",
    },
    {
      id: 2,
      img: Briefcase,
      tittle: " Ask Us Any Questions",
      calender: "Virtual",
      date: "April 29",
      timeDuration: "5:30am-7:30am",
      description:
        "We are looking for Enrollment Advisors who are looking to take most 30-35 appointments per week. All leads lorem ipsum sit amet are pre-scheduled.",
    },
    {
      id: 3,
      img: Briefcase,
      tittle: "Pass Assessment Centres ?",
      calender: "Virtual",
      date: "April 29",
      timeDuration: "5:30am-7:30am",
      description:
        "We are looking for Enrollment Advisors who are looking to take most 30-35 appointments per week. All leads lorem ipsum sit amet are pre-scheduled.",
    },
    {
      id: 4,
      img: Briefcase,
      tittle: "Job Hunting in the UK",
      calender: "Virtual",
      date: "April 29",
      timeDuration: "5:30am-7:30am",
      description:
        "We are looking for Enrollment Advisors who are looking to take most 30-35 appointments per week. All leads lorem ipsum sit amet are pre-scheduled.",
    },
  ];

  return (
    <div>
      <h3 className="feature-events">Feature Events</h3>
      <h2 className="Students-tittle">Upcoming Events & News</h2>

      <UpComingCardDesidn EventsData={EventsData} />
    </div>
  );
};

export default UpComingEvents;
