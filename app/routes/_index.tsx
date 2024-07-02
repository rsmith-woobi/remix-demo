import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  Form,
  Link,
  json,
  useActionData,
  useLoaderData,
} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() || "";
  return json({ name });
}

export async function loader() {
  return json({ number: Math.random() });
}

export default function Index() {
  const data = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Welcome to Remix 3!</h1>
      <h2>GitHub App Test!</h2>
      <img src="/images/react.svg" alt="react logo" width={100} />
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {loaderData?.number && (
        <p>{`LOADER DATA: ${JSON.stringify(loaderData)}`}</p>
      )}
      <Form method="post">
        <input type="text" name="name" placeholder="Name" />
        <button type="submit">Submit</button>
      </Form>
      {data?.name && <p>{data?.name}</p>}
    </div>
  );
}
