import { EducationItemType } from "@/types";

const eduItems: EducationItemType[] = [
  {
    schoolName: "Springboard",
    subject: "Full-stack software engineering bootcamp",
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
    schoolName: "California State University, Long Beach",
    subject: "BA, Media & Communications",
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
];

export default eduItems;
