import React from "react";
import { useRouter } from "next/router";

const NoteWithParam = () => {
  const router = useRouter();

  const { params } = router.query;
  console.log(router);

  return <div> Hello this is a Note page with specific Id: {params}</div>;
};
export default NoteWithParam;
