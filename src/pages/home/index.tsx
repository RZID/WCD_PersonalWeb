// Deps
import { useState } from "react";
import classNames from "classnames";

// Layouts
import AboutLayout from "../../layouts/About";
import HomeBanner from "../../layouts/HomeBanner";

// Templates
import Navbar from "../../templates/Navbar";
import Experience from "../../templates/Experience";

// Assets
import ExampleProject1 from "../../assets/example-project-1.png";
import ExampleProject2 from "../../assets/example-project-2.png";
import ExampleProject3 from "../../assets/example-project-3.png";
import ExampleProject4 from "../../assets/example-project-4.png";
import ExampleProject5 from "../../assets/example-project-5.png";
import ExampleProject6 from "../../assets/example-project-6.png";
import ExampleProject7 from "../../assets/example-project-7.png";
import ExampleProject8 from "../../assets/example-project-8.png";
import Project from "../../templates/Project";

const LandingPage = () => {
  // States
  const [works] = useState([
      {
        name: "Decodable.co",
        fields: ["Brand Design", "Webflow Development", "Web Design"],
      },
      {
        name: "Gofirefly.io",
        fields: ["Brand Design", "Webflow Development", "Web Design"],
      },
      {
        name: "Blinkops.com",
        fields: ["Brand Design", "Webflow Development", "Web Design"],
      },
      {
        name: "Withkanvas.com",
        fields: ["Brand Design", "Webflow Development", "Web Design"],
      },
    ]),
    [projects] = useState([
      ExampleProject1,
      ExampleProject2,
      ExampleProject3,
      ExampleProject4,
      ExampleProject5,
      ExampleProject6,
      ExampleProject7,
      ExampleProject8,
    ]);

  return (
    <div className={classNames("flex", "flex-col", "gap-y-20", "bg-slate-100")}>
      <Navbar />
      <HomeBanner />
      <AboutLayout title="About">
        <p className={classNames("text-2xl")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </AboutLayout>

      <AboutLayout title="Recent Work">
        <div className={classNames("flex", "flex-col", "gap-y-8")}>
          {works.map((el, i, arr) => (
            <div
              className={classNames("flex", "flex-col", "gap-y-8")}
              key={`work-${i}`}
            >
              <Experience fields={el.fields} name={el.name} />
              {i < arr.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </AboutLayout>

      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default LandingPage;
