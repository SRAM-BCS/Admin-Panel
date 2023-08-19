import React from "react";

export type CardProperties = {
  name: string;
  email: string;
  roll: string;
  branch: string;
  profileImage?: any;
  idImage?: any;
};

export const DefaultCardItems: CardProperties[] = [
  {
    name: "Deepak Rai",
    email: "bcs_2021022@iiitm.ac.in",
    roll: "2021BCS-022",
    branch: "BTech Computer Science",
    profileImage:
      "https://res.cloudinary.com/dbuut0gfp/image/upload/v1690187566/gii16sepleuvslnnwv50.jpg",
    idImage:
      "https://res.cloudinary.com/dbuut0gfp/image/upload/v1689365241/yulckyhpyojfumymzvln.jpg",
  },
];
