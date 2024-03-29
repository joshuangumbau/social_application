import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text } from "../../components";
import Header2 from "../../components/Header2";
import HomeCard06 from "../../components/HomeCard06";
import HomeCarddekstop2 from "../../components/HomeCarddekstop2";
import HomeCarddekstop3 from "../../components/HomeCarddekstop3";
import HomeSeemorebutton from "../../components/HomeSeemorebutton";
import HomeUser from "../../components/HomeUser";
import HomeUser1 from "../../components/HomeUser1";

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10 overflow-auto bg-gray-100">
        <div className="flex flex-col items-center justify-start p-[45px] md:p-5">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-[48px] w-[48px] mb-[886px]"
          />
        </div>
        <div className="flex flex-row md:flex-col justify-start items-start w-[87%] md:w-full gap-[30px] md:gap-5">
          <div className="flex flex-col items-center justify-start w-[62%] md:w-full mt-[138px] md:mt-0">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
              <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-full gap-[7px] p-[30px] sm:p-5 bg-white-A700 rounded-[12px]">
                  <div className="flex flex-row justify-start items-start w-full gap-[5px]">
                    <Img
                      src="images/img_avatar.png"
                      alt="avatar_one"
                      className="w-[38px] md:h-auto object-cover rounded-[12px]"
                    />
                    <div className="flex flex-row justify-start w-[87%] p-2.5 bg-white-A700 rounded-[19px]">
                      <Text as="p" className="mt-px mb-[52px]">
                        What are you thinking?{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-between w-[33%]">
                      <div className="flex flex-col items-center justify-start h-[28px] w-[28px]">
                        <Button color="gray_100" className="w-[28px] rounded-lg">
                          <Img src="images/img_group_339.svg" />
                        </Button>
                      </div>
                      <Button color="gray_100" className="w-[28px] rounded-lg">
                        <Img src="images/img_group_337.svg" />
                      </Button>
                      <Button color="gray_100" className="w-[28px] rounded-lg">
                        <Img src="images/img_group_335.svg" />
                      </Button>
                    </div>
                    <HomeSeemorebutton
                      label="Share"
                      iconarrowOne="images/img_icon_arrow_right.svg"
                      className="flex flex-row justify-center w-[24%]"
                    />
                  </div>
                </div>
                <HomeCarddekstop2 className="flex flex-col items-center justify-start w-full" />
              </div>
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-[30px]">
                <HomeCard06 className="flex flex-col items-center justify-start w-full" />
                <HomeCarddekstop3 className="flex flex-col items-center justify-start w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[37%] md:w-full mb-16">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_modal_desktop_dark.svg"
                alt="modaldesktop"
                className="h-[1024px] left-0 bottom-0 top-0 my-auto absolute"
              />
              <Header2 className="flex flex-row justify-between items-center w-full sm:w-full left-0 top-[4%] m-auto absolute" />
              <div className="flex flex-col items-start justify-start w-[86%] gap-[41px] right-0 top-[14%] m-auto absolute">
                <Heading size="xl" as="h1" className="!text-white-A700">
                  Featured Stories
                </Heading>
                <div className="flex flex-row sm:flex-col w-full gap-5">
                  <div className="flex flex-col items-center justify-start h-[48px] w-[13%] sm:w-full border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_40x40.png"
                      alt="image_one"
                      className="w-[40px] md:h-auto object-cover rounded-[9px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[48px] w-[13%] sm:w-full border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_4.png"
                      alt="image_one"
                      className="w-[40px] md:h-auto object-cover rounded-[9px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[48px] w-[13%] sm:w-full border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_5.png"
                      alt="image_one"
                      className="w-[40px] md:h-auto object-cover rounded-[9px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[48px] w-[13%] sm:w-full border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_6.png"
                      alt="image_one"
                      className="w-[40px] md:h-auto object-cover rounded-[9px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[48px] w-[13%] sm:w-full border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_7.png"
                      alt="image_one"
                      className="w-[40px] md:h-auto object-cover rounded-[9px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start h-[48px] w-[13%] sm:w-full border-2 border-solid blue_A700_light_blue_200_border rounded-[12px]">
                    <Img
                      src="images/img_image_8.png"
                      alt="image_one"
                      className="w-[40px] md:h-auto object-cover rounded-[9px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[68%] bottom-[3%] right-0 left-0 m-auto absolute">
                <Heading size="xl" as="h2" className="!text-white-A700">
                  Who to Follow
                </Heading>
                <div className="flex flex-col w-full mt-[41px] gap-[30px]">
                  <HomeUser className="flex flex-row justify-between w-full" />
                  <HomeUser
                    cammyHedling="images/img_avatar_38x38.png"
                    className="flex flex-row justify-between w-full"
                  />
                  <HomeUser cammyHedling="images/img_avatar_1.png" className="flex flex-row justify-between w-full" />
                </div>
                <div className="flex flex-row justify-start items-center mt-[43px] gap-1">
                  <a href="#">
                    <Heading size="s" as="h3" className="!text-gray-500 tracking-[1.00px] uppercase">
                      See more
                    </Heading>
                  </a>
                  <Img
                    src="images/img_icon_arrow_right_gray_500.svg"
                    alt="iconarrow_three"
                    className="h-[18px] w-[18px]"
                  />
                </div>
                <Heading size="xl" as="h4" className="mt-16 !text-white-A700">
                  Trend Topics
                </Heading>
                <div className="flex flex-col w-full mt-[39px] gap-[30px]">
                  <HomeUser1 one="#1" className="flex flex-row justify-between w-full" />
                  <HomeUser1 one="#2" className="flex flex-row justify-between w-full" />
                  <HomeUser1 one="#3" className="flex flex-row justify-between w-full" />
                  <HomeUser1 one="#4" className="flex flex-row justify-between w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
