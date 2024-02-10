import ComingSoonPayment from "components/ComingSoonPayment";
import React from "react";
import Paymentmethod from ".";
import { Img, List, Text } from "components";

const CreditCardPage = () => {
  return (
    <div className="flex flex-col font-opensans gap-8 items-start justify-start w-[101%]">
      <div className="flex flex-col items-start justify-start max-w-[792px] w-[101%]">
        <div className="flex flex-col items-start justify-start pb-4 w-[101%]">
          <Text
            className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.14px] w-auto"
            size="txtOpenSansSemiBold24"
          >
            Select your mode of payment
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start pb-4 w-full">
          <Text
            className="text-base text-gray-700_01 w-auto"
            size="txtOpenSans16"
          >
            Payments with Tickete are secure and encrypted.
          </Text>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-start justify-start w-full">
        <Paymentmethod className="bg-white-A700 border border-gray-900_01 border-solid flex flex-col gap-8 items-start justify-start pt-7 sm:px-5 px-5 rounded-[16px] w-full" />
        <List
          className="flex flex-col gap-5 items-center w-full"
          orientation="vertical"
        >
          <ComingSoonPayment className="bg-gray-50_01 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full" />
        </List>
      </div>

      <Img
        className="h-px w-full"
        src="images/img_divider.svg"
        alt="divider_Two"
      />
    </div>
  );
};

export default CreditCardPage;
