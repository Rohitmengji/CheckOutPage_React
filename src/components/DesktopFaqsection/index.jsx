import React from "react";

import { Line } from "components";
import Faqsidebar from "./faqsidebar";
import Faqaccordion from "./faqaccordion";

const DesktopFaqsection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col  gap-12 items-start justify-start w-auto md:w-full">
          <Faqsidebar />
          {/*  Accordion  */}
          <Faqaccordion />
        </div>
        <Line className="bg-gray-300_01 h-px  w-full" />
      </div>
    </>
  );
};

export default DesktopFaqsection;
