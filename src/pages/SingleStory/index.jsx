import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Input, Button, Slider, Text } from "../../components";
import HomeUser1 from "../../components/HomeUser1";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function SingleStoryPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-start w-full gap-px md:gap-5 bg-gray-100">
        <div className="flex flex-col items-center justify-start w-[12%] md:w-full p-[45px] md:p-5">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-[48px] w-[48px] mb-[886px]"
          />
        </div>
        <div className="flex flex-row md:flex-col justify-start items-center w-[89%] md:w-full pl-[5px] gap-2.5 md:gap-5">
          <div className="h-[128px] w-[1%] bg-white-A700_66 rounded-sm" />
          <div className="flex flex-row justify-end w-[99%] md:w-full rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
            <div className="flex flex-row md:flex-col justify-start items-center w-[93%] gap-[47px] md:gap-5">
              <div className="flex flex-col items-center justify-start w-[60%] md:w-full gap-[35px]">
                <div className="flex flex-row justify-between items-center w-[89%] md:w-full">
                  <div className="flex flex-row justify-center">
                    <Button
                      color="white_A700_33"
                      size="7xl"
                      shape="round"
                      leftIcon={<Img src="images/img_icon_arrowleft.svg" alt="Icon/Arrow-Left" />}
                      className="w-full gap-2.5 sm:px-5 font-sfprodisplay font-bold"
                    >
                      Back
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start items-center pl-[5px] gap-2.5">
                    <Text as="p" className="!text-white-A700 text-right">
                      Sara Scholz
                    </Text>
                    <Img
                      src="images/img_avatar.png"
                      alt="avatar_one"
                      className="w-[38px] md:h-auto object-cover rounded-[12px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
                  <Button color="white_A700_33" size="3xl" variant="outline" shape="round" className="w-[48px]">
                    <Img src="images/img_group_76.svg" />
                  </Button>
                  <div className="w-[78%]">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Img
                            src="images/img_image_768x540.png"
                            alt="image_one"
                            className="md:h-auto mx-auto object-cover rounded-lg"
                          />
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <Button color="white_A700_33" size="3xl" variant="outline" shape="round" className="w-[48px] !border">
                    <Img src="images/img_arrow_right.svg" />
                  </Button>
                </div>
                <Input
                  color="gray_900"
                  name="comment"
                  placeholder="Write a comment…"
                  suffix={<Img src="images/img_icon_emoji_white_a700.svg" alt="Icon/Emoji" />}
                  className="w-[78%] sm:w-full gap-[35px] border-gray-500 border-2 border-solid rounded"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[37%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[46px] p-[30px] sm:p-5 rounded-tl-[32px] rounded-bl-[32px] bg-white-A700">
                    <div className="flex flex-row justify-start w-[35%] md:w-full mt-[15px] gap-5">
                      <StoriesNotifications className="flex flex-col items-center justify-start h-[48px] w-[48px] sm:w-full" />
                      <Img
                        src="images/img_avatar_48x48.png"
                        alt="avatar_three"
                        className="w-[48px] md:h-auto object-cover rounded-[12px]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[90%] md:w-full gap-[41px]">
                      <Heading size="xl" as="h1">
                        Next Stories
                      </Heading>
                      <div className="flex flex-col w-full gap-[30px]">
                        <HomeUser1 one="images/img_avatar.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_1.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_2.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_3.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_4.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_5.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_6.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_7.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_8.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_9.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_10.png" className="flex flex-row justify-between w-full" />
                        <HomeUser1 one="images/img_avatar_11.png" className="flex flex-row justify-between w-full" />
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
