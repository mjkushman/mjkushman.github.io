import { WorkItemType } from "@/types";

const workItems: WorkItemType[] = [
  {
    jobTitle: "Software Engineer",
    companyName: "WeUp",
    location: "San Francisco / Remote",
    startDate: "2024",
    endDate: "Current",
    description: (
      <ul>
        <li>
          Typescript / NestJS (Express) / Postgres backend API to manage users,
          payments, and core business logic.
        </li>
        <li>Integrated Stripe API for financial transactions.</li>
        <li>
          Developed features for assembling users into teams and managing group
          roles, actions, goals.
        </li>
      </ul>
    ),
  },
  {
    jobTitle: "Growth Product Manager",
    companyName: "Glowforge",
    location: "Seattle / San Francisco / Remote",
    startDate: "2018",
    endDate: "2023",
    description: (
      <ul>
        <li>
          Restructured a $100M+ revenue e-com website, resulted in ~15% CVR
          lift.
        </li>
        <li>
          Owned $20MM+ paid acquisition; martech stack and implementation.
        </li>
      </ul>
    ),
  },
  {
    jobTitle: "Growth Marketing Manager",
    companyName: "Autodesk",
    location: "San Francisco",
    startDate: "2017",
    endDate: "2018",
    description: (
      <ul>
        <li>
          Optimized web/mobile onboarding to impropve install-to-subscribe rate.
        </li>
        <li>
          Created bespoke data tracking schema, produced new product analytics.
        </li>
      </ul>
    ),
  },
  {
    jobTitle: "Growth Product Manager",
    companyName: "Good & Co",
    location: "San Francisco",
    startDate: "2016",
    endDate: "2017",
    description: (
      <ul>
        <li>
          Managed a 3-person team to build growth-focused features and
          enhancements.
        </li>
      </ul>
    ),
  },
];

export default workItems;
