import * as React from "react";
import { Link } from "gatsby";

import IndexLayout from "../layouts";

const NotFoundPage: React.FC = () => (
  <IndexLayout title="404 Not Found">
    <h1>404: Page not found.</h1>
    <p>
      You&apos;ve hit the void. <Link to="/">Go back.</Link>
    </p>
  </IndexLayout>
);

export default NotFoundPage;
