import NewsData from "../interfaces/NewsData";
import sassSection from "../../imgs/dashboard/sassSection.jpg";
import design from "../../imgs/dashboard/design.jpg";
import team from "../../imgs/dashboard/team.jpg";
import payment from "../../imgs/dashboard/payment.jpg";

const newsData: NewsData[] = [
  {
    id: 0,
    src: sassSection,
    title: "Created SASS Section",
    firstText: "New SASS Examples & Tutorials",
    secondText: "3 Days ago",
  },
  {
    id: 1,
    src: design,
    title: "Changed The Design",
    firstText: "A Brand New Website Design",
    secondText: "5 Days ago",
  },
  {
    id: 2,
    src: team,
    title: "Team Increased",
    firstText: "3 Developers Joined The Team",
    secondText: "7 Days ago",
  },
  {
    id: 3,
    src: payment,
    title: "Added Payment Gateway",
    firstText: "Many New Payment Gateways Added",
    secondText: "9 Days ago",
  },
];

export default newsData;
