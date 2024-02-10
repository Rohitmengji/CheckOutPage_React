import React from "react";
import { Button, Img, Text } from "components";

function Faqsidebar() {
  return (
    <div className="flex flex-col gap-8 items-start justify-start w-[486px] sm:w-full">
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-col items-start justify-start pb-4 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.14px] w-auto"
            size="txtOpenSansSemiBold24"
          >
            Frequently asked questions
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start pb-4 w-[446px] sm:w-full">
          <Text
            className="text-base text-gray-700_01 w-auto"
            size="txtOpenSans16"
          >
            Here are some of our most asked questions.
          </Text>
        </div>
      </div>
      <div className="bg-gray-50_01 flex sm:flex-col-2  flex-row gap-1 items-start justify-between p-6 sm:px-5 rounded-[16px] w-[446px] sm:w-full">
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <Text
            className="leading-[26.00px] max-w-[240px] md:max-w-full text-gray-900_01 sm:text-sm text-lg"
            size="txtOpenSansSemiBold18"
          >
            <>
              Still need help? <br />
              We’re here for you.
            </>
          </Text>
          <Button
            className="!text-blue_gray-50 cursor-pointer font-opensans font-semibold min-w-[129px] rounded-[12px] text-base text-center"
            shape="round"
            color="black_900"
            size="md"
            variant="fill"
            onClick={() => console.log("chat with us")}
          >
            Chat with us
          </Button>
        </div>
        <Img
          className="h-[100px] w-[157px]"
          src="images/img_aboutillustrations.svg"
          alt="aboutillustrati"
        />
      </div>
    </div>
  );
}

export default Faqsidebar;
