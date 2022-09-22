import React from "react";

import Link from "next/link";
const Page = () => {
  return (
    <div>
      {" "}
      Hello World Learning Nextjs
      <Link href={"/notes"}>
        <a>Notes</a>
      </Link>
    </div>
  );
};
export default Page;
