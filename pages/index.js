import Link from "next/link.js";
import StyledLink from "../components/StyledLink.js";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href="/team" passHref>
        <StyledLink>Team</StyledLink>
      </Link>
    </>
  );
}
