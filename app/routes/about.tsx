import { Link } from "@remix-run/react";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page.</p>
            <ul>
                <li>
                    <Link to="/">Go back home</Link>
                </li>
            </ul>
        </div>
    );
}