import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix!</h1>
      <h2>Deployed into a client account with Appius, again!</h2>
      <img src="/images/react.svg" alt="react logo" width={100}/>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
