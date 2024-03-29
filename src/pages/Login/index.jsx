import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Input, Heading } from "../../components";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>social application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
          <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_image.png"
                alt="image_one"
                className="justify-center h-[1024px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Heading size="2xl" as="h1" className="!text-white-A700 text-center">
                  Hello!
                </Heading>
                <a href="#" className="mt-3">
                  <Text as="p" className="!text-white-A700 text-center">
                    Don’t have an account yer?
                  </Text>
                </a>
                <div className="flex flex-row justify-center w-full mt-[30px]">
                  <Button size="7xl" className="w-full sm:px-5 font-bold rounded-[29px]">
                    Create an account
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[46%] md:w-full ml-[-45px] md:ml-0">
            <div className="h-[1024px] w-full relative">
              <Img
                src="images/img_modal_desktop.svg"
                alt="modaldesktop"
                className="justify-center h-[1024px] left-0 bottom-0 right-0 top-0 m-auto absolute"
              />
              <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img src="images/img_standard_collection.svg" alt="standard_one" className="h-[41px] w-[41px]" />
                <Heading size="xl" as="h2" className="mt-[50px]">
                  Welcome Back!{" "}
                </Heading>
                <Text as="p" className="mt-3.5">
                  Sign in to continue{" "}
                </Text>
                <div className="flex flex-col items-start justify-start w-full mt-[62px] gap-3">
                  <Heading size="s" as="h3" className="tracking-[1.00px] uppercase">
                    Email
                  </Heading>
                  <Input
                    color="gray_500"
                    variant="outline"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="user@mail.com"
                    suffix={<Img src="images/img_icon_checkcircle.svg" alt="Icon/Check-Circle" />}
                    className="w-full sm:w-full gap-[35px]"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-8 gap-3">
                  <Heading size="s" as="h4" className="tracking-[1.00px] uppercase">
                    Password
                  </Heading>
                  <Input
                    color="gray_500"
                    variant="outline"
                    shape="round"
                    type="password"
                    name="password"
                    placeholder="Password@123"
                    suffix={<Img src="images/img_icon_eye.svg" alt="Icon/Eye" />}
                    className="w-full sm:w-full gap-[35px]"
                  />
                </div>
                <a href="#" className="mt-[23px]">
                  <Text as="p" className="!text-indigo-A200 !font-normal">
                    Forgot Password?
                  </Text>
                </a>
                <div className="flex flex-row justify-center w-full mt-[31px]">
                  <Button size="7xl" className="w-full sm:px-5 font-bold rounded-[29px]">
                    Login
                  </Button>
                </div>
                <Text size="s" as="p" className="mt-8">
                  Or connect with socials
                </Text>
                <Button
                  color="indigo_600"
                  size="7xl"
                  leftIcon={<Img src="images/img_icon_facebook.svg" alt="Icon/Facebook" />}
                  className="w-full mt-8 gap-[3px] sm:px-5 font-bold rounded-[29px]"
                >
                  Connect with Facebook
                </Button>
                <div className="flex flex-row justify-center w-full mt-5">
                  <Button
                    color="gray_900"
                    size="7xl"
                    leftIcon={<Img src="images/img_icon_apple.svg" alt="Icon/Apple" />}
                    className="w-full gap-[5px] sm:px-5 font-bold rounded-[29px]"
                  >
                    Connect with Apple
                  </Button>
                </div>
                <Button
                  color="gray_500_66"
                  size="7xl"
                  variant="outline"
                  leftIcon={<Img src="images/img_icon_google.svg" alt="Icon/Google" />}
                  className="w-full mt-5 gap-1 sm:px-5 font-bold rounded-[29px]"
                >
                  Connect with Google+
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
