// CustomToast.tsx

import React from "react";

interface CustomToastProps {
  text: string;
  onYesClick: (data:any) => void;
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
      <div>
        <button onClick={onYesClick}>Yes</button>
        <button onClick={onNoClick}>No</button>
      </div>
    </div>
  );
};

export default CustomToast;
