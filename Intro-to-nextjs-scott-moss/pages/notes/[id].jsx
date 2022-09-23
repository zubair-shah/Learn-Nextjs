/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {id} </h1>
    </div>
  );
};
