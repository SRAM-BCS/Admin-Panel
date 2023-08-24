import React from "react";

const CodeTitleRenderer = ({ details }: any) => {
  return (
    <div className="text-left">
      <h5 className="flex mb-1 text-xl font-small text-gray-900 dark:text-white">
        {details?.title}
      </h5>
      <span>{details?.code}</span>
    </div>
  );
};

export default CodeTitleRenderer;
