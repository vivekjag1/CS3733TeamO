import "../styles/ServicesCard.css";
import * as React from "react";

// import FormContainer from "../components/FormContainer.tsx";

import { Link } from "react-router-dom";

// import taehaImage from '../../assets/people/Taeha.png';
import background from "../../assets/bwh-exterior-default.png";
import { Card, CardContent, styled } from "@mui/material";
import paths from "../common/paths.tsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import danielImage from "../../assets/employees/dan-gorbunov.jpeg";
import CreditCard from "../components/CreditCard.tsx";
import webstormImage from "../../assets/webstormpics.png";
import githubImage from "../../assets/githubpics.png";
import taigaImage from "../../assets/taigapics.png";

const CustomCardContent = styled(CardContent)({
  display: "flex",
  "&:last-child": {
    padding: 0,
    paddingBottom: 0,
  },
});

const tools = [
  {
    name: "Webstorm ",
    imageSrc: webstormImage,
    url: "https://www.jetbrains.com/webstorm/",
    urlName: "Webstorm Link",
  },
  {
    name: "GitHub ",
    imageSrc: githubImage,
    url: "https://github.com",
    urlName: "Git Hub Link",
  },
  {
    name: "Taiga ",
    imageSrc: taigaImage,
    url: "https://taiga.io",
    urlName: "Taiga Link",
  },
  {
    name: "AWS",
    imageSrc: webstormImage,
    url: "https://aws.amazon.com",
    urlName: "AWS Link",
  },
  {
    name: "Cloud Flare ",
    imageSrc: webstormImage,
    url: "https://www.cloudflare.com/en-gb/",
    urlName: "Cloud Flare Link",
  },
  {
    name: "Docker ",
    imageSrc: webstormImage,
    url: "https://www.docker.com",
    urlName: "Docker Link",
  },
  {
    name: "Typescript ",
    imageSrc: danielImage,
    url: "https://www.typescriptlang.org",
    urlName: "Typescript Link",
  },
  {
    name: "React ",
    imageSrc: danielImage,
    url: "https://react.dev",
    urlName: "React Link",
  },
  {
    name: "Yarn ",
    imageSrc: danielImage,
    url: "https://yarnpkg.com",
    urlName: "Yarn Link",
  },
  {
    name: "Nodejs ",
    imageSrc: danielImage,
    url: "https://nodejs.org/en",
    urlName: "Nodejs Link",
  },
  {
    name: "Turbo ",
    imageSrc: danielImage,
    url: "https://turbo.build",
    urlName: "Turbo Link",
  },
  {
    name: "Vite ",
    imageSrc: danielImage,
    url: "https://vitest.dev",
    urlName: "Vite Link",
  },
  {
    name: "Prettier ",
    imageSrc: danielImage,
    url: "https://prettier.io",
    urlName: "Prettier Link",
  },
  {
    name: "ESlint ",
    imageSrc: danielImage,
    url: "https://eslint.org",
    urlName: "ESlint Link",
  },
  {
    name: "Husky ",
    imageSrc: danielImage,
    url: "https://typicode.github.io/husky/",
    urlName: "Husky Link",
  },
  {
    name: "Ts-Node ",
    imageSrc: danielImage,
    url: "https://typestrong.org/ts-node/docs/",
    urlName: "Ts-Node Link",
  },
  {
    name: "Nodemon ",
    imageSrc: danielImage,
    url: "https://www.npmjs.com/package/nodemon",
    urlName: "Nodemon Link",
  },
  {
    name: "postgreSQL ",
    imageSrc: danielImage,
    url: " https://www.postgresql.org",
    urlName: "PostgreSQL Link",
  },
  {
    name: "prismaORM ",
    imageSrc: danielImage,
    url: "https://www.prisma.io",
    urlName: "PrismaORM Link",
  },
  {
    name: "expressjs ",
    imageSrc: danielImage,
    url: "https://expressjs.com",
    urlName: "Expressjs Link",
  },
  {
    name: "traefik ",
    imageSrc: danielImage,
    url: "https://doc.traefik.io/traefik/",
    urlName: "Traefik Link",
  },
  {
    name: "Multer ",
    imageSrc: danielImage,
    url: " https://www.npmjs.com/package/multer",
    urlName: "Multer Link",
  },
  {
    name: "Auth0 ",
    imageSrc: danielImage,
    url: "https://auth0.com/",
    urlName: "Auth0 Link",
  },
  {
    name: "Material UI",
    imageSrc: danielImage,
    url: "https://mui.com",
    urlName: "Material UI Link",
  },
  {
    name: "Tailwind ",
    imageSrc: danielImage,
    url: "https://tailwindcss.com",
    urlName: "Tailwind Link",
  },
  {
    name: "Axios ",
    imageSrc: danielImage,
    url: "https://www.npmjs.com/package/axios",
    urlName: "Axios Link",
  },
  {
    name: "Bootstrap ",
    imageSrc: danielImage,
    url: "https://getbootstrap.com",
    urlName: "Bootstrap Link",
  },
  {
    name: "Framer Motion ",
    imageSrc: danielImage,
    url: "https://www.framer.com/motion/",
    urlName: "Framer Motion Link",
  },
  {
    name: "Flowbite ",
    imageSrc: danielImage,
    url: "https://flowbite.com",
    urlName: "Flowbite Link",
  },
  {
    name: "Tan stake table ",
    imageSrc: danielImage,
    url: "https://tanstack.com/table/v8",
    urlName: "Tan Stake Table",
  },
];

export default function Credit() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 overflow-hidden bg-cover bg-no-repeat bg-center blur-sm"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="h-screen overflow-auto">
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center gap-2 mx-5 my-8">
            <Card
              className="shadow-xl drop-shadow w-full max-w-5xl overflow-hidden"
              sx={{ borderRadius: "20px" }}
            >
              <CustomCardContent>
                {/*<div className="bg-lime-900">*/}

                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "2rem",
                  }}
                  className="custom-form-container"
                >
                  <div className="flex items-center justify-between w-full">
                    <Link
                      to={paths.ABOUT_US}
                      onClick={() => paths.ABOUT_US}
                      className="flex items-center flex-row"
                    >
                      <ArrowBackIosIcon />
                      <span>About Us</span>
                    </Link>
                    <h1 className="text-4xl flex-grow text-center"> CREDIT</h1>
                  </div>
                  <br />
                  <p style={{ color: "olive" }}>
                    {" "}
                    WPI Computer Science Department
                  </p>
                  <p style={{ color: "grey" }}>
                    {" "}
                    CS3733-D24 (Software Engineering)
                  </p>
                  <br />
                  <hr className="pl-96 pr-96" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {tools.map((tool, index) => (
                      <div key={index}>
                        <CreditCard
                          name={tool.name}
                          imageSrc={tool.imageSrc}
                          urls={tool.url}
                          urlName={tool.urlName}
                        />
                      </div>
                    ))}
                  </div>
                  Tools
                  <br />
                  <br />
                  webstorm :https://www.jetbrains.com/webstorm/
                  <br />
                  github : https://github.com/
                  <br />
                  taiga : https://taiga.io/
                  <br />
                  AWS : https://aws.amazon.com/
                  <br />
                  cloud flare: https://www.cloudflare.com/en-gb/
                  <br />
                  docker : https://www.docker.com/
                  <br />
                  <br />
                  Other stuff
                  <br />
                  Project
                  <br />
                  Typescript: https://www.typescriptlang.org/
                  <br />
                  react : https://react.dev/
                  <br />
                  yarn : https://yarnpkg.com/
                  <br />
                  nodejs : https://nodejs.org/en
                  <br />
                  turbo: https://turbo.build/
                  <br />
                  vite : https://vitest.dev/
                  <br />
                  Prettier : https://prettier.io/
                  <br />
                  eslint : https://eslint.org/
                  <br />
                  husky :https://typicode.github.io/husky/
                  <br />
                  ts-node: https://typestrong.org/ts-node/docs/
                  <br />
                  nodemon: https://www.npmjs.com/package/nodemon
                  <br />
                  postgreSQL : https://www.postgresql.org/
                  <br />
                  prismaORM : https://www.prisma.io/
                  <br />
                  expressjs : https://expressjs.com/
                  <br />
                  traefik : https://doc.traefik.io/traefik/
                  <br />
                  Multer: https://www.npmjs.com/package/multer
                  <br />
                  Auth0: https://www.npmjs.com/package/multer
                  <br />
                  material ui :https://mui.com/
                  <br />
                  tailwind: https://tailwindcss.com/
                  <br />
                  axios : https://www.npmjs.com/package/axios
                  <br />
                  bootstrap: https://getbootstrap.com/
                  <br />
                  framer motion:https://www.framer.com/motion/
                  <br />
                  flowbite: https://flowbite.com/
                  <br />
                  Tan stake table:https://tanstack.com/table/v8
                  <br />
                  <div>
                    <br />
                    <p style={{ color: "#012D5A", textAlign: "center" }}>
                      {" "}
                      "Thanks to Brigham and Womens Hospital and their
                      represenative, Andrew Shin."{" "}
                    </p>
                    <label className="animate-pulse">
                      {" "}
                      The B&WH maps and data used in this app are copyrighted
                      and for educational use only.{" "}
                    </label>
                  </div>
                </div>
              </CustomCardContent>
              {/*</div>*/}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
