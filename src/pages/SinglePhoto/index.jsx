import React from "react";
import { Helmet } from "react-helmet";
import { Img, Input, Heading, Button, Slider, Text } from "../../components";
import SinglePostComment from "../../components/SinglePostComment";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function SinglePhotoPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
          <div className="flex flex-col items-center justify-start w-[12%] md:w-full p-[45px] md:p-5 z-[1]">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-[48px] w-[48px] mb-[886px]"
            />
          </div>
          <div className="h-[1024px] w-[89%] md:w-full ml-[-5px] md:ml-0 relative">
            <Img
              src="images/img_modal_desktop_dark_gray_900.svg"
              alt="modaldesktop"
              className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <header className="flex flex-row md:flex-col justify-between items-center w-[90%] top-[4%] right-0 left-0 m-auto md:gap-10 absolute">
              <div className="flex flex-row justify-between items-center w-[59%] md:w-full">
                <Button size="5xl" shape="square" className="w-[16%]">
                  <Img src="images/img_icon_arrowleft.svg" />
                </Button>
                <div className="flex flex-row justify-start items-center gap-2.5">
                  <Text as="p" className="!text-white-A700 text-right">
                    Edward Ford
                  </Text>
                  <Img
                    src="images/img_avatar.png"
                    alt="avatar_one"
                    className="w-[38px] md:h-auto object-cover rounded-[12px]"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-start w-[11%] md:w-full gap-5">
                <StoriesNotifications
                  abOne="1"
                  className="flex flex-col items-center justify-start h-[48px] w-[48px] sm:w-full"
                />
                <Img
                  src="images/img_avatar_48x48.png"
                  alt="avatar_three"
                  className="w-[48px] md:h-auto object-cover rounded-[12px]"
                />
              </div>
            </header>
            <div className="flex flex-row md:flex-col justify-between items-center w-[55%] h-max ml-[85px] left-[7%] bottom-0 top-0 my-auto md:gap-10 md:ml-5 absolute">
              <Button color="white_A700_33" size="3xl" variant="outline" shape="round" className="w-[48px]">
                <Img src="images/img_group_76.svg" />
              </Button>
              <div className="w-full">
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
                        src="images/img_image_380x255.png"
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
            <div className="flex flex-col items-center justify-start w-[36%] h-full right-0 bottom-0 top-0 my-auto absolute">
              <div className="h-[1024px] w-full relative">
                <Img
                  src="images/img_modal_desktop_dark_white_a700.svg"
                  alt="modaldesktop"
                  className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <div className="flex flex-col items-start justify-start w-[76%] bottom-[4%] right-[9%] m-auto absolute">
                  <Heading size="xl" as="h1">
                    Comments (148)
                  </Heading>
                  <div className="flex flex-col w-full mt-[41px] gap-10">
                    <SinglePostComment
                      image="images/img_icon_heart_filled.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_69.png"
                      timezone="Awesome Edward, remeber that five tips for low cost "
                      image="images/img_icon_heart_regular.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_70.png"
                      image="images/img_icon_heart_filled.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_16.png"
                      timezone="Awesome Edward, remeber that five tips for low cost "
                      image="images/img_icon_heart_regular.svg"
                      imageOne="images/img_icon_comment.svg"
                      className="flex flex-row justify-center w-full"
                    />
                    <SinglePostComment
                      billyGreenOne="images/img_avatar_27.png"
                      className="flex flex-row justify-center w-full"
                    />
                  </div>
                  <div className="flex flex-row justify-start mt-[30px] gap-[15px]">
                    <Img src="images/img_icon_heart_filled_red_a200.svg" alt="iconheart_one" className="h-px" />
                    <Img src="images/img_icon_comment_gray_500_1x14.svg" alt="iconcomment_one" className="h-px" />
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-[82px] gap-2.5 p-[5px] bg-gray-100 rounded">
                    <Input
                      color="gray_100"
                      size="md"
                      shape="square"
                      name="comment"
                      placeholder="Write a comment…"
                      suffix={<Img src="images/img_icon_emoji.svg" alt="Icon/Emoji" />}
                      className="w-[87%] sm:w-full gap-3"
                    />
                    <div className="flex flex-col items-center justify-start h-[14px] w-[14px]">
                      <Img src="images/img_icon_send.svg" alt="iconsend_one" className="h-[14px] w-[14px]" />
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
