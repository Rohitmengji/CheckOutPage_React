import React, { useState } from "react";
import { Img, List, Text } from "components";

const Faqaccordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false); // Close other accordions
  };

  const handleToggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); // Close other accordions
  };

  const handleToggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen3(false); // Close other accordions
  };
  const handleToggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen4(false); // Close other accordions
  };
  const handleToggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen(false); // Close other accordions
  };
  return (
    <div>
      <div className="flex flex-col gap-6 items-start justify-start max-w-[690px] w-full">
        <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
          {/* Toggle 1 */}
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-row gap-6 items-center justify-start w-full">
              <Img
                className="h-6 w-6 cursor-pointer"
                src={
                  isOpen
                    ? "images/img_close_gray_700_01.svg"
                    : "images/img_plus_gray_700_01.svg"
                }
                alt={isOpen ? "close_One" : "plus_One"}
                onClick={handleToggleAccordion}
              />
              <Text
                className="flex-1 text-gray-900_01 text-lg w-auto cursor-pointer"
                size="txtOpenSansSemiBold18"
                onClick={handleToggleAccordion}
              >
                {props?.herearesomeOne}
              </Text>
            </div>
            {isOpen && (
              <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
                <Text
                  className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
                  size="txtOpenSans16"
                >
                  {props?.descriptionOne}
                </Text>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
          {/* toggled 2 */}
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-row gap-6 items-center justify-start w-full">
              <Img
                className="h-6 w-6 cursor-pointer"
                src={
                  isOpen1
                    ? "images/img_close_gray_700_01.svg"
                    : "images/img_plus_gray_700_01.svg"
                }
                alt={isOpen1 ? "close_One" : "plus_One"}
                onClick={handleToggleAccordion1}
              />
              <Text
                className="flex-1 text-gray-900_01 text-lg w-auto cursor-pointer"
                size="txtOpenSansSemiBold18"
                onClick={handleToggleAccordion1}
              >
                {props?.herearesomeTwo}
              </Text>
            </div>
            {isOpen1 && (
              <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
                <Text
                  className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
                  size="txtOpenSans16"
                >
                  {props?.descriptionTwo}
                </Text>
              </div>
            )}
          </div>
        </div>
        <List
          className="flex flex-col gap-6 items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
            {/* Toggle 3 */}
            <div className="flex flex-col  gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-6 items-center justify-start w-full">
                <Img
                  className="h-6 w-6 cursor-pointer"
                  src={
                    isOpen2
                      ? "images/img_close_gray_700_01.svg"
                      : "images/img_plus_gray_700_01.svg"
                  }
                  alt={isOpen2 ? "close_One" : "plus_One"}
                  onClick={handleToggleAccordion2}
                />
                <Text
                  className="flex-1 text-gray-900_01 text-lg w-auto cursor-pointer"
                  size="txtOpenSansSemiBold18"
                  onClick={handleToggleAccordion2}
                >
                  {props?.herearesomeThree}
                </Text>
              </div>
              {isOpen2 && (
                <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
                  <Text
                    className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
                    size="txtOpenSans16"
                  >
                    {props?.descriptionThree}
                  </Text>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
            {/* Toggle 4 */}
            <div className="flex flex-col  gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-6 items-center justify-start w-full">
                <Img
                  className="h-6 w-6 cursor-pointer"
                  src={
                    isOpen3
                      ? "images/img_close_gray_700_01.svg"
                      : "images/img_plus_gray_700_01.svg"
                  }
                  alt={isOpen3 ? "close_One" : "plus_One"}
                  onClick={handleToggleAccordion3}
                />
                <Text
                  className="flex-1 text-gray-900_01 text-lg w-auto cursor-pointer"
                  size="txtOpenSansSemiBold18"
                  onClick={handleToggleAccordion3}
                >
                  {props?.herearesomeFour}
                </Text>
              </div>
              {isOpen3 && (
                <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
                  <Text
                    className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
                    size="txtOpenSans16"
                  >
                    {props?.descriptionFour}
                  </Text>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full">
            {/* toggle 5 */}
            <div className="flex flex-col  gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-6 items-center justify-start w-full">
                <Img
                  className="h-6 w-6 cursor-pointer"
                  src={
                    isOpen4
                      ? "images/img_close_gray_700_01.svg"
                      : "images/img_plus_gray_700_01.svg"
                  }
                  alt={isOpen4 ? "close_One" : "plus_One"}
                  onClick={handleToggleAccordion4}
                />
                <Text
                  className="flex-1 text-gray-900_01 text-lg w-auto cursor-pointer"
                  size="txtOpenSansSemiBold18"
                  onClick={handleToggleAccordion4}
                >
                  {props?.herearesomeFive}
                </Text>
              </div>
              {isOpen4 && (
                <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
                  <Text
                    className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
                    size="txtOpenSans16"
                  >
                    {props?.descriptionFive}
                  </Text>
                </div>
              )}
            </div>
          </div>
        </List>
      </div>
    </div>
  );
};

Faqaccordion.defaultProps = {
  chatbuttontext: "Chat with us",
  herearesomeOne: "What should I do on my first trip to Rome?",
  descriptionOne: (
    <>
      The Museo Barracco is a free, museum and well worth a quick visit. If you
      love the ancient stuff, don&#39;t miss the Domus Romana at Palazzo
      Valentini, the Domus Aurea, and the Baths of Caracalla. For even more
      hidden gems, take a tour of Trastevere, a fascinating neighborhood full of
      history and ambiance. Rome is packed with hidden gems. If you love art,
      don&#39;t miss the Galleria Doria Pamphilj or Palazzo Barberini.
    </>
  ),
  herearesomeTwo: "What are some hidden gems to see in Rome?",
  descriptionTwo: (
    <>
      Rome is packed with hidden gems. If you love art, don&#39;t miss the
      Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free
      museum and well worth a quick visit. If you love the ancient stuff,
      don&#39;t miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and
      the Baths of Caracalla. For even more hidden gems, take a tour of
      Trastevere, a fascinating neighborhood full of history and ambiance.
    </>
  ),
  herearesomeThree: "How much time should I spend in Rome?",
  descriptionThree: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      laudantium reiciendis dolores repudiandae eos obcaecati, ea illo.
      Eligendi, possimus? Soluta odit excepturi distinctio asperiores obcaecati
      est aut, laborum error at! Quas qui ipsa commodi minus fugit iusto
      laborum. Dolores minima ipsa excepturi? Doloribus commodi dolores
      voluptatibus! Placeat tempora ex quisquam.
    </>
  ),
  herearesomeFour: "What food is Rome known for?",
  descriptionFour: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
      consequatur dolores dignissimos veritatis? Ratione similique, ipsum ex
      nesciunt necessitatibus temporibus harum illo nemo sapiente non vero
      blanditiis laboriosam facilis ipsam quia debitis eos maxime. Et iure
      dolorum aliquid, magnam repudiandae, dolore ullam magni quo eum nulla, ad
      maxime labore?
    </>
  ),
  herearesomeFive: "What is the best way to get around Rome?",
  descriptionFive: (
    <>
      blanditiis laboriosam facilis ipsam quia debitis eos maxime. Et iure
      dolorum aliquid, magnam repudiandae,Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Molestias consequatur dolores dignissimos
      veritatis? Ratione similique, ipsum ex nesciunt necessitatibus temporibus
      harum illo nemo sapiente non vero dolore ullam magni quo eum nulla, ad
      maxime labore?
    </>
  ),
};

export default Faqaccordion;
