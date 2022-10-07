/** @jsxImportSource theme-ui */
import Link from "next/link";

const IndexPage = () => {
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
        <Link href={"/notes"}>
          <a>Notes</a>
        </Link>
      </h1>
    </div>
  </div>
   }
export default IndexPage

export async function getStaticProps(context) {
  return {
    props: {}
  }
}

