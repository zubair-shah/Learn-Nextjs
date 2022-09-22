import React from "react";
import Link from "next/link";
import '../../src/components/styles.module.css'
const Note = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));
  console.log(notes);
  return (
    <div>
      {" "}
      this is a Notes page
      {notes.map((i, ind) => {
        return (
          <div className="box" key={ind}>
            <Link key={i.id} href={"/notes/[id]"} as={`/notes/${i.id}`}>
              <a>
                <span>id : {i.id}</span>

                <span>title : {i.title}</span>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Note;
