import React from "react";

import { Button, Img, Line, Text } from "components";

const Home = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <Img
            className="logo"
            src="images/img_logo.svg"
            alt="AT DIGITAL"
          />
          <ul className="navList bd_grid">
            <li>
              <a href="#" className="link">
                <Text className="text-sm">SERVICES</Text>
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <Text className="text-sm">ABOUT US</Text>
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <Text className="text-sm">CONTACT US</Text>
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <Text className="text-sm">CAREERS</Text>
              </a>
            </li>
          </ul>
        </header>
        {/*End Of header */}


        <div className="container">
          <div className="image-container">
            <Img
              className="image-home"
              src="images/img_andykelly0ev.png"
              alt="andykelly0ev"
            />
            <div className="gradient-box">
              <Text
                className="capitalize leading-[100.00%] max-w-[556px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px]"
                size="txtInterBold48"
              >
                We crush your competitors, goals, and sales records - without
                the B.S.
              </Text>
              <Button className="button">
                Get free consultation
              </Button>
            </div>
          </div>
        </div>


        <div className="section-container">
          <Img
            className="image"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <div className="flex-container">
            <div className="poppins-container">
              <Text
                className="title"
              >
                Web & Mobile App Development
              </Text>
            </div>
            <Text
              className="text-container"
              size="txtInterRegular16"
            >
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </Text>
            <Button className="button">
              LEARN MORE
            </Button>
          </div>
        </div>


        <div className="section-container">
          <div className="flex-container">
            <div className="poppins-container">
              <Text
                className="title"  
              >
                Digital Strategy Consulting
              </Text>
            </div>
            <Text
              className="text-container"
              size="txtInterRegular16"
            >
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </Text>
            <Button className="button">
              LEARN MORE
            </Button>
          </div>
          <Img
            className="image"
            src="images/img_image1.png"
            alt="imageOne"
          />
        </div>
        

        {/*Fooder code started*/}
        <footer className="bg-deep_purple-500 flex font-lato items-center justify-center mt-[100px] pb-5 pt-10 px-20 md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[413px] sm:w-full">
                <Img
                  className="logo"
                  src="images/img_logo.svg"
                  alt="logo_One"
                />
                <Text
                  className="max-w-[413px] md:max-w-full text-base text-white-A700"
                  size="txtLatoRegular16"
                >
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </Text>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row font-inter sm:gap-10 gap-32 items-start justify-between w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-[197px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-auto"
                    size="txtInterSemiBold21"
                  >
                    Our Technologies
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">ReactJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Gatsby</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">NextJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">NodeJS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">GraphQL</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="capitalize text-sm text-white-A700"
                      >
                        <Text size="txtInterMedium14">Laravel</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-[197px]">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-auto"
                    size="txtInterSemiBold21"
                  >
                    Our Services
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Social media Marketing
                    </Text>
                    <Text
                      className="capitalize max-w-[197px] md:max-w-full text-sm text-white-A700"
                      size="txtInterMedium14"
                    >
                      Web & Mobile App Development
                    </Text>
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Data & Analytics
                    </Text>
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Google Marketing solutions
                    </Text>
                    <Text
                      className="capitalize text-sm text-white-A700 w-full"
                      size="txtInterMedium14"
                    >
                      Search Engine Optimization
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-2 items-center justify-start max-w-[630px] w-full">
              <Line className="bg-white-A700 h-px w-full" />
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <a
                  href="javascript:"
                  className="capitalize text-sm text-white-A700 w-auto"
                >
                  <Text size="txtInterMedium14">Privacy Policy</Text>
                </a>
                <Line className="bg-white-A700 h-4 w-px" />
                <a
                  href="javascript:"
                  className="capitalize text-sm text-white-A700 w-auto"
                >
                  <Text size="txtInterMedium14">Terms & Conditions</Text>
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/*Fooder code End*/}


      </div>
    </>
  );
};

export default Home;
