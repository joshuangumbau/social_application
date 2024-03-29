import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Heading, Img, Input } from "../../components";
import StoriesCardmobile from "../../components/StoriesCardmobile";
import StoriesNotifications from "../../components/StoriesNotifications";

export default function StoriesPage() {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");

  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5 bg-gray-100">
        <div className="flex flex-col items-center justify-start w-[12%] md:w-full p-[45px] md:p-5">
          <Img
            src="images/img_standard_collection_white_a700.svg"
            alt="standard_one"
            className="h-[48px] w-[48px] mb-[886px]"
          />
        </div>
        <div className="flex flex-row md:flex-col justify-start items-start w-[89%] md:w-full pl-[5px] gap-2.5 md:gap-5">
          <div className="h-[128px] w-[1%] mt-[448px] md:mt-0 bg-white-A700_66 rounded-sm" />
          <div className="flex flex-col items-start justify-start w-[99%] md:w-full pt-10 px-10 sm:pt-5 sm:px-5 rounded-tl-[32px] rounded-bl-[32px] bg-gray-900">
            <header className="flex flex-row md:flex-col justify-between items-center w-[98%] ml-[35px] md:gap-10 md:ml-0 sm:ml-5">
              <div className="flex flex-row md:flex-col justify-start items-center w-[67%] md:w-full gap-[25px] p-[9px] md:gap-5 bg-white-A700_33 rounded-[12px]">
                <Input
                  color="gray_800"
                  size="md"
                  shape="square"
                  name="search"
                  placeholder="Search in social…"
                  value={searchBarValue9}
                  onChange={(e) => setSearchBarValue9(e)}
                  prefix={<Img src="images/img_icon_search.svg" alt="Icon/Search" className="cursor-pointer" />}
                  suffix={
                    searchBarValue9?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue9("")} height={18} width={18} />
                    ) : null
                  }
                  className="w-[87%] md:w-full mt-1 ml-0.5 gap-[15px] md:ml-0 md:mt-0 text-gray-500"
                />
                <Heading size="s" as="p" className="mr-[19px] !text-gray-500 tracking-[1.00px] uppercase">
                  Filters
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-[11%] md:w-full gap-5">
                <StoriesNotifications className="flex flex-col items-center justify-start h-[48px] w-[48px] sm:w-full" />
                <Img
                  src="images/img_avatar_48x48.png"
                  alt="avatar_one"
                  className="w-[48px] md:h-auto object-cover rounded-[12px]"
                />
              </div>
            </header>
            <Heading size="2xl" as="h1" className="mt-[59px] ml-[35px] md:ml-0 sm:ml-5 !text-white-A700">
              Stories
            </Heading>
            <div className="flex flex-row sm:flex-col justify-between items-start w-[45%] md:w-full mt-[39px] ml-[35px] md:ml-0 sm:gap-10 sm:ml-5">
              <div className="flex flex-col items-center justify-start w-[10%] sm:w-full gap-[7px]">
                <Heading as="h2" className="!text-white-A700">
                  For You
                </Heading>
                <div className="h-[2px] w-full bg-white-A700" />
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="h3" className="!text-white-A700_99 text-center">
                  Following
                </Heading>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="h4" className="!text-white-A700_99 text-center">
                  Popular
                </Heading>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="h5" className="!text-white-A700_99 text-center">
                  Featured
                </Heading>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="h6" className="!text-white-A700_99 text-center">
                  Live
                </Heading>
              </div>
              <div className="flex flex-row justify-center">
                <Heading as="p" className="!text-white-A700_99 text-center">
                  Continue Watching
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[98%] md:w-full mt-10 ml-[35px] md:ml-0 sm:ml-5">
              <div className="justify-center w-full gap-10 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                <StoriesCardmobile className="h-[380px] w-full relative" />
                <StoriesCardmobile
                  imageOne="images/img_image_9.png"
                  edwardFordOne="images/img_image_10.png"
                  className="h-[380px] w-full relative"
                />
                <StoriesCardmobile
                  imageOne="images/img_image_11.png"
                  edwardFordOne="images/img_image_12.png"
                  className="h-[380px] w-full relative"
                />
                <StoriesCardmobile
                  imageOne="images/img_image_13.png"
                  edwardFordOne="images/img_image_14.png"
                  className="h-[380px] w-full relative"
                />
                <StoriesCardmobile
                  imageOne="images/img_image_15.png"
                  edwardFordOne="images/img_image_16.png"
                  className="h-[380px] w-full relative"
                />
                <StoriesCardmobile
                  imageOne="images/img_image_17.png"
                  edwardFordOne="images/img_image_18.png"
                  className="h-[380px] w-full relative"
                />
                <StoriesCardmobile
                  imageOne="images/img_image_19.png"
                  edwardFordOne="images/img_image_20.png"
                  className="h-[380px] w-full relative"
                />
                <StoriesCardmobile
                  imageOne="images/img_image_21.png"
                  edwardFordOne="images/img_image_22.png"
                  className="h-[380px] w-full relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
