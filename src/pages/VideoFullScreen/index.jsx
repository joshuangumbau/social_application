import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";
import VideoFullScreenModaldesktop from "../../components/VideoFullScreenModaldesktop";

export default function VideoFullScreenPage() {
  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-start w-full gap-[5px] md:gap-5 bg-gray-100">
        <div className="flex flex-col items-center justify-start w-[12%] md:w-full p-[45px] md:p-5">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-[48px] w-[48px] mb-[886px]"
          />
        </div>
        <VideoFullScreenModaldesktop
          threehundredtwe="Share"
          onehundredforty="Share"
          share="Share"
          className="flex flex-row justify-start w-[89%] md:w-full"
        />
      </div>
    </>
  );
}
