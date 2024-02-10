import React, { useState } from "react";

import { Button, Img, List, PagerIndicator, Text } from "components";

const DesktopBookingsummary = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of image URLs
  const imageUrls = [
    "images/img_rectangle65.png",
    "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201170w",
    "https://images.unsplash.com/photo-1659801393807-6c6f99b9f925?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more image URLs as needed
  ];

  const handleArrowLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleArrowRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start pt-4 px-4 w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="h-[198px] relative rounded-[16px] w-full">
                <Img
                  className="h-[198px] m-auto object-cover rounded-[16px] w-full"
                  src="images/img_rectangle66.png"
                  alt="rectangleSixtySix"
                />
                <div className="absolute inset-[0] justify-center m-auto rounded-[16px] w-full">
                  <Img
                    className="h-[198px] m-auto object-cover rounded-[16px] w-full"
                    src={imageUrls[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                  />
                  <div className="absolute bottom-[0] flex flex-col h-6 md:h-auto inset-x-[0] items-center justify-between mx-auto pb-4 px-3 ">
                    <PagerIndicator
                      handleNext={handleArrowRightClick}
                      className="flex gap-1.5 h-2 items-center justify-start w-[108px]"
                      count={7}
                      activeCss="inline-block cursor-pointer h-2 bg-gray-50 w-7 rounded"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-gray-50_8c w-1.5"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                  <div
                    className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto px-3
                   lg:w-[352px]"
                  >
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="circle"
                      color="gray_50_bf"
                      size="sm"
                      variant="fill"
                      onClick={handleArrowLeftClick}
                    >
                      <Img
                        className="h-4"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="circle"
                      color="gray_50_bf"
                      size="sm"
                      variant="fill"
                      onClick={handleArrowRightClick}
                    >
                      <Img
                        className="h-4"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                  <div className="absolute flex flex-col items-center justify-start left-[3%] top-[6%] w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[91px] rounded"
                      leftIcon={
                        <Img
                          className="h-3.5 mr-1 my-px"
                          src="images/img_ticket.svg"
                          alt="ticket"
                        />
                      }
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    >
                      <div className="!text-gray-900_01 font-opensans font-semibold text-left text-xs">
                        {props?.bestseller}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_airplane.svg"
                      alt="stars"
                    />
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-right text-sm"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.fortynine}
                      </Text>
                      <Text
                        className="text-gray-700_01 text-right text-sm w-auto"
                        size="txtOpenSans14"
                      >
                        {props?.p45k}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-gray-700_01 text-right text-sm w-auto"
                    size="txtOpenSans14"
                  >
                    •
                  </Text>
                  <Text
                    className="flex-1 text-gray-700_01 text-sm w-auto"
                    size="txtOpenSans14"
                  >
                    {props?.category}
                  </Text>
                </div>
                <Text
                  className="leading-[22.00px] max-w-[352px] md:max-w-full text-base text-gray-900_01"
                  size="txtOpenSansSemiBold16Gray90001"
                >
                  {props?.experiencename}
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-full">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.textThirteen}
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[7px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtOpenSansSemiBold14"
                        >
                          {props?.text}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-700_01 text-xs w-auto"
                          size="txtOpenSans12"
                        >
                          {props?.hinttext}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtOpenSansSemiBold14"
                        >
                          {props?.text1}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-700_01 text-xs w-auto"
                          size="txtOpenSans12"
                        >
                          {props?.hinttext1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_users.svg"
                      alt="users"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-full">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.guestscounter}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start pb-5 w-full">
            <Img
              className="h-px w-full"
              src="images/img_divider_gray_300_01.svg"
              alt="divider_Three"
            />
            <div className="flex flex-row items-center justify-between px-4 w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-700_01 text-sm underline w-auto"
                  size="txtOpenSansSemiBold14Gray70001"
                >
                  {props?.textFourteen}
                </Text>
              </div>
              <Img
                className="h-4 w-4"
                src="images/img_plus_blue_gray_400.svg"
                alt="plus_One"
              />
            </div>
          </div>
        </div>
        <div className="border-gray-300_01 border-solid border-t flex flex-col gap-8 items-start justify-start pb-8 pt-4 px-4 w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start pb-2 w-auto">
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    Total payable
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end pb-2 w-auto">
                  <Text
                    className="text-gray-900_01 text-lg text-right w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.priceFour}
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[135px] rounded-[11px]"
                leftIcon={
                  <Img
                    className="h-3.5 mb-[3px] mr-1"
                    src="images/img_user_green_600.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="green_50"
                size="xs"
                variant="fill"
              >
                <div className="!text-green-600 font-opensans font-semibold text-left text-xs">
                  {props?.youSavedPrice}
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
                alt="inbox_Three"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <>
              <Text
                className="leading-[20.00px] max-w-[352px] md:max-w-full text-gray-700_01 text-xs"
                size="txtOpenSans12"
              >
                <span className="text-gray-700_01 font-opensans text-left font-normal">
                  By clicking “confirm & pay”, you agree to{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-indigo-500 font-opensans text-left font-normal underline"
                >
                  Tickete’s general terms and conditions
                </a>
                <span className="text-gray-700_01 font-opensans text-left font-normal">
                  {" "}
                  and{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-indigo-500 font-opensans text-left font-normal underline"
                >
                  cancellation policy
                </a>
                <span className="text-gray-700_01 font-opensans text-left font-normal">
                  .
                </span>
              </Text>
            </>
            {/* button for confirm and pay */}

            <Button
              className="flex cursor-pointer items-center justify-center lg:min-w-[352px] rounded-[20px]"
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
              <div className="!text-blue_gray-50 font-opensans font-semibold text-left text-lg">
                Confirm & pay
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopBookingsummary.defaultProps = {
  bestseller: "Bestseller",
  fortynine: "4.9",
  p45k: "(4.5k)",
  category: <>&lt;category&gt;</>,
  experiencename:
    "Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef",
  textThirteen: <>&lt;ticket type - variant&gt;</>,
  text: <>&lt;day&gt;, &lt;month&gt; &lt;date&gt;</>,
  hinttext: <>Duration: &lt;duration&gt;</>,
  text1: <>&lt;time&gt;</>,
  hinttext1: <>Operating hours: &lt;time&gt; to &lt;time&gt;</>,
  guestscounter: "5 guests",
  textFourteen: "View payment summary",
  priceFour: "$XXX",
  youSavedPrice: <>You saved &lt;price&gt;</>,
};

export default DesktopBookingsummary;
