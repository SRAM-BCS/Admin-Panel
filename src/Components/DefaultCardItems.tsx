import React from "react";

export type CardProperties = {
  name: string;
  email: string;
  roll: string;
  branch: string;
  profileImage?: any;
  idImage?: any;
};

export type FacultyCardProperties = {
  name: string;
  email: string;
  code: string;
};

export type AdminCardProperties = {
  email: string;
};

export type ClassroomCardProperties = {
  classRoom: string;
  qrCode: string;
};

export type BatchCardProperties = {
  title: string;
  code: string;
};

export type CourseCardProperties = {
  name: string;
  code: string;
};

export type FCBCardProperties = {
  faculty: string;
  batch: string;
  course: string;
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

export const DefaultFacultyCardItems: FacultyCardProperties[] = [
  {
    name: "Aaroh Srivastava",
    email: "bcs_2021022@iiitm.ac.in",
    code: "AS",
  },
];

export const DefaultAdminCardItems: AdminCardProperties[] = [
  {
    email: "bcs_2021001@iiitm.ac.in",
  },
];

export const DefaultClassroomCardItems: ClassroomCardProperties[] = [
  {
    classRoom: "B-205",
    qrCode:
      "https://res.cloudinary.com/dbuut0gfp/image/upload/v1690187566/gii16sepleuvslnnwv50.jpg",
  },
];

export const DefaultBatchCardItems: BatchCardProperties[] = [
  {
    title: "2021BCS",
    code: "2021",
  },
];

export const DefaultCourseCardItems: CourseCardProperties[] = [
  {
    name: "2021BCS",
    code: "2021",
  },
];

export const DefaultFCBCardItems: FCBCardProperties[] = [
  {
    faculty: "AS",
    course: "Discrete Maths",
    batch: "2021BCS",
  },
];
