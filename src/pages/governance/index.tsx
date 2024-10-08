import React from "react";
import Subscribe from "../../Components/HomePage/Subscribe";
import Definition from "../../Components/Definition&importance";
import { DefinitionImportanceData } from "../../json";

const Governance = () => {
  return (
    <>
      <Definition data={DefinitionImportanceData} />
      <Subscribe />
    </>
  );
};

export default Governance;
