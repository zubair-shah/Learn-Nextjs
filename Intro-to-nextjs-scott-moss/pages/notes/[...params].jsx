import React from "react";
import { useRouter } from "next/router";

const NoteWithParam = () => {
  const router = useRouter();

  const { params } = router.query;
  const id = 4;


  return (
    <div>
      {" "}
      Hello this is a Note page with specific Id: {params}
      <button onClick={(e) => router.push("/")}>GO Home</button>
      <button onClick={(e) => router.push("/notes/[id]", `/notes/${id}`)}>
        Dashboard
      </button>
    </div>
  );
};
export default NoteWithParam;
