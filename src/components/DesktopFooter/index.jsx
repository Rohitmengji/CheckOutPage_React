import React from "react";
import { Img, Line } from "components";

const DesktopFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900 flex flex-col md:gap-10 gap-10 items-center justify-start pb-8 pt-[120px] w-full">
          <div className="flex flex-col items-baseline justify-start  max-w-[1200px] w-full">
            {/* tickete */}
            <Img
              className="h-12 text-center sm:ml-[80px] md:ml-[230px] lg:ml-[305px] w-[189px]"
              src="images/img_logo_white_a700.svg"
              alt="logo_One"
            />
          </div>
          <Line className="bg-gray-800_01 h-px w-full" />
          <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start max-w-[1200px] w-full ">
              <ul className="flex sm:flex-col flex-row gap-6  items-start justify-start w-auto list-disc">
                <li className="text-blue_gray-400_02 text-sm w-auto list-none">
                  {props?.madewith}
                </li>

                <li className="text-blue_gray-200_01 text-sm w-auto">
                  {props?.privacypolicytext}
                </li>

                <li className="text-blue_gray-200_01 text-sm w-auto">
                  {props?.termsofusagetext}
                </li>

                <li className="text-blue_gray-200_01 text-sm w-auto">
                  {props?.cancellationpolicytext}
                </li>

                <li className="text-blue_gray-200_01 text-sm w-auto">
                  {props?.sitemaptext}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFooter.defaultProps = {
  madewith: "Made with ❤️",
  privacypolicytext: "Privacy policy",
  termsofusagetext: "Terms of usage",
  cancellationpolicytext: "Cancellation policy",
  sitemaptext: "Sitemap",
};

export default DesktopFooter;
