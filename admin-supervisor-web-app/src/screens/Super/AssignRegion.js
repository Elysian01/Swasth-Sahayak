import React, { useEffect, useState } from "react";
import { getRequest, postRequest } from "../../components/Api/api";
import SuperNavbar from "./components/SuperNavbar";
import { useSelector } from "react-redux";
import PageHeading from "../../components/headers/PageHeading";

const AssignRegion = () => {
  const token = useSelector((state) => state.auth.token);
  const [options, setOptions] = useState([]);
  const [personData, setPersonData] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState({});
  const [buttonClicked, setButtonClicked] = useState({});

  const fetchDetails = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(
        "/supervisor/getblockcodewithname",
        headers
      );
      const formattedOptions = response.map(({ blockcode, blockname }) => ({
        value: `${blockcode}`,
        label: `${blockcode}-${blockname}`,
      }));

      setOptions(formattedOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFieldDetails = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const response = await getRequest(
        "/supervisor/fieldworkerdetails",
        headers
      );
      setPersonData(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBlockSelect = (personIndex, blockCode) => {
    setSelectedBlock((prevState) => ({
      ...prevState,
      [personIndex]: blockCode,
    }));
  };

  const handleButtonClick = async (personIndex) => {
    setButtonClicked((prevState) => ({
      ...prevState,
      [personIndex]: true,
    }));

    // Handle submission for the selected block code
    const selectedBlockCode = parseInt(selectedBlock[personIndex]);
    const data = {
      blockcode: selectedBlockCode,
    };
    try {
      const headers = { Authorization: `Bearer ${token}` };
      await postRequest(
        `/supervisor/assign-locality/${personData[personIndex]?.fieldworkerid}`,
        data,
        headers
      );
      window.alert("Assignment successful!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchFieldDetails();
  }, []);

  return (
    <div>
      <SuperNavbar />
      <PageHeading title="Assign Region" />
      {personData.map((person, index) => (
        <div className="display-card" key={index}>
          <div className="person-details">
            <div className="person-name">Name: {person.name} </div>
            <div className="person-region">
              FieldworkerID: {person.fieldworkerid}
            </div>
            <div className="person-specialisation">
              Previous Block Assigned: {person.blockassign}
            </div>
          </div>
          <div className="button-alignment">
            <select
              className="form__field"
              onChange={(e) => handleBlockSelect(index, e.target.value)}
            >
              <option>Select BlockCode</option>
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {/* Render submit button if block code is selected and button is not clicked */}
            {selectedBlock[index] && !buttonClicked[index] && (
              <button
                className="small-primary-btn"
                onClick={() => handleButtonClick(index)}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignRegion;
