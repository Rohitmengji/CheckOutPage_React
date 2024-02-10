import React from "react";

import { Img, Text } from "components";

const DesktopHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[100%] md:w-full">
          <div className="flex flex-row md:gap-10 items-center md:justify-around justify-between max-w-[1199px] w-full">
            <a target="_blank" href="https://www.tickete.co/">
              <Img
                className="h-8 w-[126px]"
                src="images/img_logo.svg"
                alt="logo"
              />
            </a>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_trophy.svg"
                alt="trophy"
              />
              <Text
                className="flex-1 text-base text-gray-700_01 w-auto"
                size="txtOpenSansSemiBold16"
              >
                {props?.linktext}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-end w-auto">
              <div className="flex flex-row gap-1 items-center justify-end px-4 py-3 rounded-[12px] w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_profile.svg"
                  alt="profile"
                />
                <Text
                  className="text-base text-gray-900_01 text-right w-auto"
                  size="txtOpenSans16Gray90001"
                >
                  {props?.helptext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopHeader.defaultProps = { linktext: "Checkout", helptext: "Help" };

export default DesktopHeader;
