import React from "react";

import { Img, Text } from "components";
import DesktopBookingsummary from "components/DesktopBookingsummary";
import DesktopFaqsection from "components/DesktopFaqsection";
import DesktopFooter from "components/DesktopFooter";
import DesktopHeader from "components/DesktopHeader";
import CancellationMessage from "components/CancellationMessage";
import DesktopSectionmessage from "components/DesktopSectionmessage";
import CreditCardPage from "components/Paymentmethod/CreditCardPage";
import UserDetailsForm from "components/Paymentmethod/UserDetailsForm";
import CountDownMessage from "components/DesktopHeader/CountDownMessage";

const DesktopPage = () => {
  return (
    <>
      <DesktopHeader />
      <CountDownMessage />
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full overflow-hidden">
        <div className="flex flex-col font-opensans md:gap-10 gap-20 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full"></div>

          <div className="flex flex-col font-robotoserif  items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col items-start justify-start pb-6 ">
              <Text
                className="sm:text-[35px]  md:text-[49px] text-[57px] text-gray-900_01 tracking-[0.34px] w-auto"
                size="txtRobotoSerifNormalRomanMedium57"
              >
                Confirm & pay
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start max-w-[792px] w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full  ">
                  {/* free cancellation  */}
                  <CancellationMessage className="bg-gray-50 border border-blue_gray-100 border-solid flex flex-col font-opensans items-start justify-start rounded-[16px] w-full" />
                  <UserDetailsForm />

                  <Img
                    className="h-px w-full"
                    src="images/img_divider.svg"
                    alt="divider"
                  />
                </div>
                {/* payment Details Page  */}
                <CreditCardPage />

                <div className="flex flex-col font-opensans items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start pb-4 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.14px] w-auto"
                      size="txtOpenSansSemiBold24"
                    >
                      Total Payable: $XXX
                    </Text>
                  </div>
                  <DesktopSectionmessage className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start rounded-[16px] w-full" />
                </div>
              </div>

              <DesktopBookingsummary className=" sm:-order-last bg-white-A700 border border-gray-300_01 border-solid flex sm:flex-1 flex-col font-opensans items-start justify-start rounded-[24px] w-96 sm:w-full" />
            </div>
            <Img
              className="w-full mt-6"
              src="images/img_divider.svg"
              alt="divider_Four"
            />
          </div>
          <DesktopFaqsection className="flex flex-col font-opensans gap-8 items-start justify-start md:px-10 sm:px-5 px-[120px] w-auto md:w-full" />
        </div>
      </div>
      <DesktopFooter className=" font-opensans " />
    </>
  );
};

export default DesktopPage;
