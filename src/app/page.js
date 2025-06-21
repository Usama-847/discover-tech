import About from "./about/page";
import Homepage from "../pages/Homepage";
import Service from "@/pages/Service";
import Build from "@/pages/Build";
import Counting from "@/pages/Counting";
export default function Home() {
  return (
    <div>
      <Homepage />
      <Service />
      <Build />
      <Counting />
    </div>
  );
}
