import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Text, Button, Input } from "../../components";
import DirectMessageProfile3 from "../../components/DirectMessageProfile3";
import HomeCard06 from "../../components/HomeCard06";
import HomeSeemorebutton from "../../components/HomeSeemorebutton";
import SingleVideoVideoplayer1 from "../../components/SingleVideoVideoplayer1";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function MyProfilePage() {
  const [searchBarValue20, setSearchBarValue20] = React.useState("");

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
          <div className="h-[1212px] w-[85%] md:w-full relative">
            <div className="flex flex-col items-center justify-start w-[63%] bottom-0 left-0 m-auto bg-gray-100 absolute">
              <div className="flex flex-col w-full gap-px">
                <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[30px] md:gap-5">
                  <HomeCard06
                    optionsThree="images/img_options_gray_500.svg"
                    iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                    iconcomment="images/img_icon_comment_gray_500.svg"
                    className="flex flex-col items-center justify-start w-[47%] md:w-full"
                  />
                  <div className="flex flex-col items-start justify-center w-[50%] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[12px]">
                    <Heading size="lg" as="h1" className="!font-sfprodisplay">
                      Photos
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                      <div className="h-[320px] w-[320px] gap-2.5 grid-cols-3 grid">
                        <Img
                          src="images/img_image_221x221.png"
                          alt="photos_one"
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
                          alt="image"
                          className="w-full md:h-auto object-cover rounded-[12px]"
                        />
                        <Img
                          src="images/img_image_46.png"
                          alt="image"
                          className="w-full md:h-auto object-cover rounded-[12px]"
                        />
                        <Img
                          src="images/img_image_47.png"
                          alt="image"
                          className="w-full md:h-auto object-cover rounded-[12px]"
                        />
                      </div>
                      <HomeSeemorebutton
                        iconarrowOne="images/img_icon_arrow_right_gray_900.svg"
                        className="flex flex-row justify-start sm:w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[30px] md:gap-5">
                  <HomeCard06
                    optionsThree="images/img_options_gray_500.svg"
                    imageSeven="images/img_image_17.png"
                    iconheartSeven="images/img_icon_heart_regular_gray_500.svg"
                    iconcomment="images/img_icon_comment_gray_500.svg"
                    className="flex flex-col items-center justify-start w-[47%] md:w-full mt-[30px] md:mt-0"
                  />
                  <div className="flex flex-col items-start justify-center h-[379px] w-[380px] md:w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[12px]">
                    <Heading size="lg" as="h2" className="!font-sfprodisplay">
                      Videos
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2.5">
                      <SingleVideoVideoplayer1
                        playbuttonOne="images/img_play_button_white_a700.svg"
                        className="flex flex-row justify-start w-[38%] sm:w-full"
                      />
                      <div className="flex flex-col items-start justify-start w-[60%] gap-2">
                        <Heading as="h3" className="!leading-5">
                          Tropical Fresh Tourism Is Back In Full Swing In{" "}
                        </Heading>
                        <Text as="p" className="!font-normal">
                          2 days ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-2.5">
                      <SingleVideoVideoplayer1
                        imageFive="images/img_image_27.png"
                        playbuttonOne="images/img_play_button_white_a700.svg"
                        className="flex flex-row justify-start w-[38%] sm:w-full"
                      />
                      <div className="flex flex-col items-start justify-start w-[60%] gap-2">
                        <Heading as="h4" className="!leading-5">
                          How Timberland created the visual campaign of the{" "}
                        </Heading>
                        <Text as="p" className="!font-normal">
                          2 days ago
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-2.5">
                      <SingleVideoVideoplayer1
                        imageFive="images/img_image_39.png"
                        playbuttonOne="images/img_play_button_white_a700.svg"
                        className="flex flex-row justify-start w-[38%] sm:w-full"
                      />
                      <div className="flex flex-col items-start justify-start w-[60%] gap-2">
                        <Heading as="h5" className="!leading-5">
                          Take your mobile photography to the next{" "}
                        </Heading>
                        <Text as="p" className="!font-sfprodisplay !font-normal">
                          2 days ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <header className="flex flex-row md:flex-col justify-between items-center w-[97%] top-[3%] right-0 left-0 m-auto md:gap-10 absolute">
              <div className="flex flex-row md:flex-col justify-start items-center w-[65%] md:w-full gap-[13px] p-3 bg-white-A700 rounded-[12px]">
                <Input
                  size="sm"
                  shape="square"
                  name="search"
                  placeholder="Search in social…"
                  value={searchBarValue20}
                  onChange={(e) => setSearchBarValue20(e)}
                  prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
                  suffix={
                    searchBarValue20?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue20("")} height={18} width={18} />
                    ) : null
                  }
                  className="w-[89%] md:w-full gap-[15px] my-px md:mt-0"
                />
                <Heading size="s" as="p" className="!text-gray-500 tracking-[1.00px] uppercase">
                  Filters
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-[10%] md:w-full gap-5">
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
            </header>
            <div className="flex flex-col items-center justify-start w-[32%] right-0 top-0 m-auto absolute">
              <div className="h-[1024px] w-full relative">
                <Img
                  src="images/img_modal_desktop_dark_gray_900_1024x382.png"
                  alt="modaldesktop"
                  className="justify-center h-[1024px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-center justify-start w-[75%] gap-[31px] bottom-[8%] right-[10%] m-auto absolute">
                  <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-2">
                    <DirectMessageProfile3
                      avatarThree="images/img_avatar_108x108.png"
                      className="flex flex-col items-center justify-start h-[108px] w-[108px] sm:w-full"
                    />
                    <Heading size="2xl" as="h6" className="!text-white-A700 text-center">
                      Edward Ford
                    </Heading>
                    <Text as="p" className="text-center !font-normal">
                      @edwardford
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[70%] md:w-full gap-[27px]">
                    <div className="flex flex-row justify-start w-[40%] gap-[5px]">
                      <Heading size="lg" as="h6" className="mb-px !text-white-A700">
                        518
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-500">
                        Posts
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-[47%] gap-[3px]">
                      <Heading size="lg" as="h6" className="mt-px !text-white-A700">
                        22k
                      </Heading>
                      <Heading size="lg" as="h6" className="!text-gray-500">
                        Friends
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-[50px]">
                    <div className="flex flex-row justify-start items-center w-full gap-5">
                      <div className="flex flex-row justify-start w-[77%]">
                        <Button color="green_400" size="7xl" className="w-full sm:px-5 font-bold rounded-[29px]">
                          Edit Profile
                        </Button>
                      </div>
                      <Button color="gray_500_33" size="3xl" variant="outline" shape="round" className="w-[48px]">
                        <Img src="images/img_button_icon_white_a700_48x48.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-3">
                      <Heading size="s" as="p" className="!text-white-A700 tracking-[1.00px] uppercase">
                        About
                      </Heading>
                      <Text as="p" className="!text-white-A700_cc !font-normal !leading-[22px]">
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
                    <div className="flex flex-col items-start justify-start w-full gap-5">
                      <Heading size="lg" as="h6" className="!text-white-A700 !font-sfprodisplay">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
