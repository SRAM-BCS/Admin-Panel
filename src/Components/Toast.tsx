// CustomToast.tsx

import React from "react";

interface CustomToastProps {
  text: string;
  onYesClick: () => void;
  onNoClick: () => void;
}

const CustomToast: React.FC<CustomToastProps> = ({
  text,
  onYesClick,
  onNoClick,
}) => {
  return (
    <div>
      {text}
      <div className="flex flex-row justify-content items-center content-center text-center gap-6">
        <button
          className="inline py-3 px-6 bg-blue-500 m-auto"
          onClick={onYesClick}
        >
          Yes
        </button>
        <button
          className="inline py-3 px-6 bg-red-500 m-auto"
          onClick={onNoClick}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default CustomToast;
