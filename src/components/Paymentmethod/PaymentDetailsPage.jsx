import { Img } from "components";
import React, { useState } from "react";

const PaymentDetailsPage = () => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleNameOnCardChange = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  return (
    <form>
      <div className=" grid  md:grid-cols-2 sm:grid-cols-1  grid-cols-2 gap-6 items-start min-h-[auto] w-full">
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start p-4 rounded-[16px] w-full">
            <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
              <input
                type="text"
                placeholder="Name on Card"
                value={nameOnCard}
                onChange={handleNameOnCardChange}
                className="text-base text-blue_gray-400 w-auto border-none focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row  h-14 md:h-auto items-center justify-start p-4 rounded-[16px] w-full">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start px-[7px] rounded-[3px] w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_creditcard.svg"
                  alt="creditcard"
                />
              </div>
            </div>
            <div className="flex flex-1  flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
              <input
                className="text-base text-blue_gray-400 w-auto border-none focus:outline-none"
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start p-4 rounded-[16px] w-full">
            <div className="flex flex-row gap-1 h-[25px] md:h-auto items-center justify-start w-full">
              <input
                type="text"
                maxLength={5}
                placeholder="Expiry Date"
                className="text-base text-blue_gray-400 w-auto border-none focus:outline-none"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start p-4 rounded-[16px] w-full">
            <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                className="text-base text-blue_gray-400 w-auto border-none focus:outline-none"
                onChange={handleCVVChange}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentDetailsPage;
