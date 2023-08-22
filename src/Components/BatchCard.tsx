import React from "react";
import { DefaultBatchCardItems } from "./DefaultCardItems";
import { Card } from "flowbite-react";

const BatchCard = ({ details = DefaultBatchCardItems[0] }) => {
  return (
    <Card>
      <div className="text-left">
        {" "}
        <h5 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Batch Title- {details?.title}
        </h5>
        <span>Batch Code- {details?.code}</span>
      </div>
    </Card>
  );
};

export default BatchCard;
