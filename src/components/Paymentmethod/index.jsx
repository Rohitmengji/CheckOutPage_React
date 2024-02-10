import React, { useState } from "react";

import { Button, Img, Text } from "components";
import PaymentDetailsPage from "./PaymentDetailsPage";

const Paymentmethod = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start px-[7px]  rounded-[3px] w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_creditcard.svg"
                  alt="creditcard"
                />
              </div>
            </div>
            <span
              className="text-base text-black font-bold w-auto"
              size="txtOpenSansSemiBold16Gray90001"
            >
              Credit & debit card
            </span>
          </div>
          <div className="bg-gray-900_01 flex flex-col h-6 items-center justify-start p-2 rounded-[50%] w-6"></div>
        </div>
        <div className="gap-2 grid sm:grid-cols-7 md:grid-cols-8 grid-cols-10 items-start justify-start w-full">
          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-1 rounded w-full">
            <Img
              className="h-2"
              src="images/img_settings_light_blue_900.svg"
              alt="settings_One"
            />
          </div>
          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-end p-1 rounded w-full">
            <Img
              className="h-[11px]"
              src="images/img_user_red_a700.svg"
              alt="user_One"
            />
          </div>
          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-start p-[3px] rounded w-full">
            <Img className="h-3" src="images/img_contrast.svg" alt="contrast" />
          </div>
        </div>
        {/* ---------------  Form for card Details  -------------- */}
        <PaymentDetailsPage />

        <div className="border-gray-300_01 border-solid border-t flex flex-col gap-8 items-start justify-start pb-8 pt-4 w-full">
          <div className="flex flex-col gap-0.5 items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start  justify-start w-full">
              <div className="flex flex-1 flex-row gap-1.5 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start pb-2 w-auto">
                  <span
                    className="text-gray-900_01 text-lg w-auto font-bold"
                    size="txtOpenSansSemiBold18"
                  >
                    Total payable : $XXX
                  </span>
                </div>
              </div>
              <Button
                className="cursor-pointer sm:order-first md:-order-1 flex items-center justify-center min-w-[132px]"
                leftIcon={
                  <Img
                    className="h-3.5 mb-[3px] mr-1"
                    src="images/img_thumbsup.svg"
                    alt="thumbs_up"
                  />
                }
                shape="round"
                color="green_600"
                size="xs"
                variant="fill"
              >
                <div className="!text-green-50 font-opensans font-semibold text-left text-xs">
                  <>You save &lt;price&gt;</>
                </div>
              </Button>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-gray-700_01 text-xs underline w-auto"
                size="txtOpenSansRomanSemiBold12"
              >
                You will be charged in AED
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_inbox_blue_gray_400.svg"
                alt="inbox_One"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div>
              <Text
                className="text-gray-700_01 text-xs w-full"
                size="txtOpenSans12"
              >
                <span className="text-gray-700_01 font-opensans text-left font-normal">
                  By clicking “confirm & pay”, you agree to{" "}
                </span>
                <a
                  href="/desktop"
                  className="text-indigo-500 font-opensans text-left font-normal underline"
                >
                  Tickete’s general terms and conditions
                </a>
                <span className="text-gray-700_01 font-opensans text-left font-normal">
                  {" "}
                  and{" "}
                </span>
                <a
                  href="/desktop"
                  className="text-indigo-500 font-opensans text-left font-normal underline"
                >
                  cancellation policy
                </a>
                <span className="text-gray-700_01 font-opensans text-left font-normal">
                  .
                </span>
              </Text>
            </div>

            <Button
              className="cursor-pointer flex items-center justify-center min-w-[220px] rounded-[15px] "
              leftIcon={
                <Img
                  className="h-[22px] mb-[3px] mr-3"
                  src="images/img_location.svg"
                  alt="location"
                />
              }
              shape="square"
              color="black_900"
              size="md"
              variant="fill"
            >
              <div
                onClick={() =>
                  console.log("confirmed button from payment method")
                }
                className="!text-blue_gray-50 font-opensans font-semibold text-center text-lg"
              >
                Confirm & pay
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentmethod;
