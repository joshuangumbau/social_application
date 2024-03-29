import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
          <div className="flex flex-col items-center justify-start p-[45px] md:p-5">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-[48px] w-[48px] mb-[886px]"
            />
          </div>
          <div className="h-[1070px] w-[85%] md:w-full relative">
            <header className="flex flex-row md:flex-col justify-between items-center w-[97%] top-[4%] right-0 left-0 m-auto md:gap-10 absolute">
              <div className="flex flex-row justify-center">
                <Button
                  color="gray_500_33"
                  size="7xl"
                  shape="round"
                  leftIcon={<Img src="images/img_icon_arrowleft_gray_500.svg" alt="Icon/Arrow-Left" />}
                  className="w-full gap-2.5 sm:px-5 font-sfprodisplay font-bold"
                >
                  Back
                </Button>
              </div>
              <div className="flex flex-row sm:flex-col justify-between items-center w-[60%] md:w-full sm:gap-10">
                <div className="flex flex-row justify-between items-start w-[40%] sm:w-full">
                  <Heading as="p" className="mt-px !text-gray-500">
                    Posts
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-[18%] gap-[7px]">
                    <Heading as="p" className="text-center">
                      Photos
                    </Heading>
                    <div className="h-[2px] w-[82%] bg-gray-900" />
                  </div>
                  <Heading as="p" className="!text-gray-500 text-center">
                    Videos
                  </Heading>
                  <Heading as="p" className="mt-px !text-gray-500 text-center">
                    Events
                  </Heading>
                </div>
                <div className="flex flex-row justify-start w-[17%] sm:w-full gap-5">
                  <StoriesNotifications
                    abOne="1"
                    className="flex flex-col items-center justify-start h-[48px] w-[48px] sm:w-full"
                  />
                  <Img
                    src="images/img_avatar_48x48.png"
                    alt="avatar_one"
                    className="w-[48px] md:h-auto object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-[29%] h-full gap-[30px] left-0 bottom-0 top-0 p-[30px] my-auto sm:p-5 bg-white-A700 absolute rounded-[12px]">
              <div className="flex flex-col items-center justify-start w-[76%] md:w-full mt-2.5 gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[95%] md:w-full gap-2">
                  <DirectMessageProfile3
                    avatarThree="images/img_avatar_108x108.png"
                    className="flex flex-col items-center justify-start h-[108px] w-[108px] sm:w-full"
                  />
                  <Heading size="2xl" as="h1" className="text-center">
                    Edward Ford
                  </Heading>
                  <Text as="p" className="text-center !font-normal">
                    @edwardford
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-full gap-[22px] px-1.5">
                  <div className="flex flex-row justify-start w-[42%] gap-2">
                    <Heading size="lg" as="h2">
                      518
                    </Heading>
                    <Heading size="lg" as="h3" className="mr-px !text-gray-500">
                      Posts
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start w-[48%] gap-[5px]">
                    <Heading size="lg" as="h4">
                      22k
                    </Heading>
                    <Heading size="lg" as="h5" className="!text-gray-500">
                      Friends
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full mb-2.5">
                <div className="flex flex-row justify-between items-center w-full">
                  <Button
                    color="green_400"
                    size="7xl"
                    shape="round"
                    leftIcon={<Img src="images/img_button.svg" alt="Icon/Check" />}
                    className="gap-2 sm:px-5 font-sfprodisplay font-bold min-w-[149px]"
                  >
                    Freinds
                  </Button>
                  <Button size="3xl" shape="square" className="w-[48px]">
                    <Img src="images/img_button_icon_5.svg" />
                  </Button>
                  <Button color="gray_500_33" size="3xl" variant="outline" shape="round" className="w-[48px]">
                    <Img src="images/img_button_icon_gray_900.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start mt-10 pt-0.5 gap-3">
                  <Heading size="s" as="h6" className="tracking-[1.00px] uppercase">
                    About
                  </Heading>
                  <Text as="p" className="!font-normal !leading-[22px]">
                    <>
                      Travel, Adventure & Lifestyle
                      <br />
                      Photographer & Digital Influencer
                      <br />
                      Nikon Ambassador
                      <br />
                      Let&#39;s Work:
                      <br />
                      user@mail.com
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[58px] gap-5">
                  <Heading size="lg" as="h6" className="!font-sfprodisplay">
                    Friends
                  </Heading>
                  <div className="flex flex-col w-full gap-[15px]">
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_avatar_45x45.png"
                        alt="avatar_one"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_55.png"
                        alt="avatar_three"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_56.png"
                        alt="avatar_five"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_57.png"
                        alt="avatar_seven"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_58.png"
                        alt="avatar_nine"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_avatar_59.png"
                        alt="avatar_one"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_60.png"
                        alt="avatar_three"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_61.png"
                        alt="avatar_five"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_62.png"
                        alt="avatar_seven"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_63.png"
                        alt="avatar_nine"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <Img
                        src="images/img_avatar_64.png"
                        alt="avatar_one"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_65.png"
                        alt="avatar_three"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_66.png"
                        alt="avatar_five"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_67.png"
                        alt="avatar_seven"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                      <Img
                        src="images/img_avatar_68.png"
                        alt="avatar_nine"
                        className="w-[45px] md:h-auto object-cover rounded-[14px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1070px] w-[67%] md:w-full right-0 bottom-0 top-0 my-auto absolute">
              <Img
                src="images/img_modal_desktop_white.svg"
                alt="modaldesktop"
                className="h-[1024px] top-0 right-0 left-0 m-auto absolute"
              />
              <div className="flex flex-col items-center justify-start w-[87%] bottom-0 right-0 left-0 m-auto absolute">
                <div className="justify-center w-full gap-4 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  <Img
                    src="images/img_image_221x221.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_40.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_41.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_42.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_43.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_44.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_45.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_46.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_47.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_48.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_49.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                  <Img
                    src="images/img_image_50.png"
                    alt="image_one"
                    className="w-full md:h-auto object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
