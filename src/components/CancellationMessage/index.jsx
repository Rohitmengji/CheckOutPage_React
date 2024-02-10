import React from "react";

import { Img, Text } from "components";

const CancellationMessage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-3 items-start justify-start pl-5 pr-4 py-4 rounded-[16px] w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start py-[3px] w-full">
              <Text
                className="text-gray-900_01 text-sm w-full"
                size="txtOpenSansSemiBold14"
              >
                {props?.titleone}
              </Text>
              <Text
                className="text-gray-700_01 text-sm w-full"
                size="txtOpenSans14"
              >
                {props?.description}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-1 w-6">
            <Img className="h-4 w-4" src="images/img_inbox.svg" alt="inbox" />
          </div>
        </div>
      </div>
    </>
  );
};

CancellationMessage.defaultProps = {
  titleone: "Free cancellation",
  description: "Tickets can be cancelled by 13th December, 2022.",
};

export default CancellationMessage;
