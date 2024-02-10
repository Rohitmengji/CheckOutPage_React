import { Text } from "components";
import React, { useState } from "react";

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "",
    phoneNumber: "",
    email: "",
    confirmEmail: "",
    inputLabel: "",
    selectOption: "",
    multiSelectOption: "",
  });

  const [emailMatchError, setEmailMatchError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is email or confirmEmail
    if (name === "email" || name === "confirmEmail") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      // Check if email and confirmEmail match
      if (name === "confirmEmail" && value !== formData.email) {
        console.log(
          "Email and confirm email do not match. Please check and try again."
        );
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex flex-col items-start justify-start max-w-[792px] w-full">
      <div
        key="1"
        className=" flex flex-col gap-3  justify-start w-full  mx-auto  "
        // items-start
      >
        <div className="flex flex-col items-start justify-start pb-4 w-full">
          <Text
            className="text-3xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.14px] w-auto"
            size="txtOpenSansSemiBold24"
          >
            Enter your details
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start pb-4 w-full">
          <Text
            className="text-base text-gray-700_01 w-auto"
            size="txtOpenSans16"
          >
            <>
              We&#39;ll be sending your tickets to the details below. Booking
              for a friend? Add their details.
            </>
          </Text>
        </div>
        <div className="space-y-4">
          <input
            name="fullName"
            className=" text-gray-800  border border-gray-300 px-3 py-2 rounded-md w-full"
            placeholder="Full name *"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <div className="grid sm:grid-cols-1 grid-cols-2  gap-4">
            <select
              name="countryCode"
              className=" border-gray-300 px-3 py-2 rounded-md"
              value={formData.countryCode}
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Select Country Code *
              </option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              <option value="+91">+92</option>
              <option value="+91">+93</option>
            </select>
            <input
              name="phoneNumber"
              className="text-gray-800 border  border-gray-300 px-3 py-2 rounded-md"
              placeholder="Phone number *"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid sm:grid-cols-1 grid-cols-2 gap-4">
            <input
              className=" text-gray-800 border  border-gray-300 px-3 py-2 rounded-md"
              placeholder="Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              name="confirmEmail"
              className="border text-gray-800 border-gray-300 px-3 py-2 rounded-md"
              placeholder="Confirm email *"
              type="email"
              value={formData.confirmEmail}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <hr className="my-6" />
        <h2 className="text-2xl font-semibold mb-4">Additional information</h2>
        <div className="flex flex-col items-start justify-start pb-4 w-full">
          <Text
            className="text-base text-gray-700_01 w-auto"
            size="txtOpenSans16"
          >
            We need a few more details to complete your reservation.
          </Text>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              name="inputLabel"
              className="text-gray-800 border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Input label *"
              value={formData.inputLabel}
              onChange={handleInputChange}
              required
            />
            <select
              name="selectOption"
              className=" border border-gray-300 px-3 py-2 rounded-md w-full"
              value={formData.selectOption}
              onChange={handleInputChange}
            >
              <option value="" disabled defaultValue>
                Select *
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <select
            name="multiSelectOption"
            className=" border border-gray-300 px-3 py-2 rounded-md w-full"
            value={formData.multiSelectOption}
            onChange={handleInputChange}
          >
            <option value="" disabled selected>
              Mutli Select *
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;
