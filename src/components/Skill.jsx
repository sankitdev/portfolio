import { useState } from "react";
import { FrontEnd, BackEnd, Technology } from "../Images";
const Skill = () => {
  const [activeTab, setActiveTab] = useState("FrontEnd");
  const handleToggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="text-center my-20" id="skills">
      <h1 className="text-4xl font-bold text-primary">Skills</h1>
      <div
        role="tablist"
        className="tabs tabs-boxed mt-10 w-full sm:w-1/2 mx-auto "
      >
        <a
          role="tab"
          className={`tab ${activeTab === "FrontEnd" ? "tab-active" : ""}`}
          onClick={() => handleToggle("FrontEnd")}
        >
          FrontEnd
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "BackEnd" ? "tab-active" : ""}`}
          onClick={() => handleToggle("BackEnd")}
        >
          BackEnd
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "Technologies" ? "tab-active" : ""}`}
          onClick={() => handleToggle("Technologies")}
        >
          Technologies
        </a>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10">
        {activeTab === "FrontEnd" &&
          FrontEnd.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn w-24 h-24 object-contain"
            />
          ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {activeTab === "BackEnd" &&
          BackEnd.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn object-contain w-24 h-24"
            />
          ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {activeTab === "Technologies" &&
          Technology.map((items, index) => (
            <img
              key={index}
              src={items}
              alt=""
              className="hover:scale-95 btn object-contain w-24 h-24"
            />
          ))}
      </div>
    </div>
  );
};
export default Skill;
