import React from "react";

export type CardProperties = {
  properties: { label?: string; value?: any }[];
  profileImage?: any;
  idImage?: any;
};

export const DefaultCardItems: CardProperties = {
  properties: [
    {
      label: "Name",
      value: "John Doe",
    },
    {
      label: "Email",
      value: "bcs_2021001@iiitm.ac.in",
    },
    {
      label: "Roll No.",
      value: "2021001",
    },
    {
      label: "Branch",
      value: "B.Tech CSE",
    },
  ],
  profileImage: "https://i.pravatar.cc/150?img=3",
  idImage: "https://i.pravatar.cc/150?img=3",
};
