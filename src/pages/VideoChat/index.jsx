import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img } from "../../components";
import DirectMessageMessage07 from "../../components/DirectMessageMessage07";
import DirectMessageMessage08 from "../../components/DirectMessageMessage08";
import VideoFullScreenModaldesktop from "../../components/VideoFullScreenModaldesktop";

export default function VideoChatPage() {
  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row md:flex-col justify-start w-full gap-[5px] md:gap-5">
          <div className="flex flex-col items-center justify-start w-[12%] md:w-full p-[45px] md:p-5">
            <Img
              src="images/img_standard_collection_white_a700.svg"
              alt="standard_one"
              className="h-[48px] w-[48px] mb-[886px]"
            />
          </div>
          <div className="flex flex-row justify-start w-[89%] md:w-full">
            <div className="flex flex-row md:flex-col justify-start w-full md:gap-5">
              <VideoFullScreenModaldesktop
                modalOne="images/img_modal_background_1024x900.png"
                className="flex flex-col items-center justify-start w-[73%] md:w-full"
              />
              <div className="flex flex-col items-center justify-start w-[34%] md:w-full ml-[-75px] md:ml-0">
                <div className="flex flex-col items-start justify-start w-full gap-[55px] p-10 sm:p-5 rounded-tl-[32px] rounded-bl-[32px] bg-white-A700">
                  <div className="flex flex-col items-start justify-start w-[85%] md:w-full mt-[231px] ml-2.5 gap-[37px] md:ml-0">
                    <DirectMessageMessage07 className="flex flex-row justify-start sm:w-full pb-[9px]" />
                    <div className="flex flex-col w-[84%] gap-10">
                      <DirectMessageMessage08 className="flex flex-row justify-start w-full pb-[3px] gap-[15px]" />
                      <DirectMessageMessage08
                        avatarSeven="images/img_avatar_48x48.png"
                        className="flex flex-row justify-start w-full pb-[3px] gap-[15px]"
                      />
                    </div>
                    <DirectMessageMessage07
                      avatarFive="images/img_avatar.png"
                      className="flex flex-row justify-start sm:w-full pb-[9px]"
                    />
                    <DirectMessageMessage08
                      avatarSeven="images/img_avatar_48x48.png"
                      className="flex flex-row justify-start sm:w-full pb-[3px] gap-[15px]"
                    />
                    <div className="flex flex-row justify-start items-center w-[29%] md:w-full">
                      <Img
                        src="images/img_avatar.png"
                        alt="avatar_seven"
                        className="w-[38px] md:h-auto object-cover rounded-[12px]"
                      />
                      <div className="h-[7px] w-[7px] ml-[15px] bg-gray-500_cc rounded-[3px]" />
                      <div className="h-[7px] w-[7px] ml-[5px] bg-gray-500_99 rounded-[3px]" />
                      <div className="h-[7px] w-[7px] ml-[5px] bg-gray-500_33 rounded-[3px]" />
                    </div>
                  </div>
                  <Input
                    color="gray_100"
                    size="xl"
                    name="iconplus"
                    placeholder="Start typing…"
                    prefix={
                      <div className="flex justify-center items-center w-[38px] h-[38px] bg-gray-500_33 rounded-[50%]">
                        <Img src="images/img_plus.svg" alt="Icon/Plus" />
                      </div>
                    }
                    suffix={<Img src="images/img_icon_emoji.svg" alt="Icon/Emoji" />}
                    className="w-[98%] sm:w-full ml-2.5 gap-2.5 md:ml-0 rounded-[12px]"
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
