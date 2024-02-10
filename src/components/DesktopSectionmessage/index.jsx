import React from "react";

import { Img, Text } from "components";

const DesktopSectionmessage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-3 items-start justify-start pl-5 pr-4 py-4 rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-center pt-1.5 w-auto">
            <Img
              className="h-4 w-4"
              src="images/img_inbox_black_900.svg"
              alt="inbox_Two"
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start py-[3px] w-full">
              <Text
                className="text-gray-900_01 text-sm w-full"
                size="txtOpenSansSemiBold14"
              >
                You will be charged in AED
              </Text>
              <Text
                className="leading-[20.00px] max-w-[728px] md:max-w-full text-gray-700_01 text-sm"
                size="txtOpenSans14"
              >
                The price shown here is in US Dollar (USD) as per the current
                conversion rate. You will be charged in United Arab Emirates
                Dirham (AED).
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSectionmessage;
