import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { getToken } from "../Services/GetToken";
import CodeTitleRenderer from "./CodeTitleRenderer";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "300px",
  },
};

const FacultySubject = ({ setIsOpen, isOpen, faculty }: any) => {
  const [data, setData] = React.useState<any>([]);
  const closeModal = () => {
    setIsOpen(false);
  };

  const afterOpenModal = async () => {
    // you modal open logic here
    console.log(faculty);
    const url = `${process.env.REACT_APP_BACKEND_URL}/faculty/batch/course?email=${faculty}`;
    try {
      const token = getToken();
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
      setData(response?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        preventScroll={false}
      >
        {data?.map((item: any, ind: any) => {
          return (
            <div>
              <h4 className="flex mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Item:{ind + 1}
              </h4>
              <CodeTitleRenderer
                details={{ title: item?.batch?.title, code: item?.batch?.code }}
              />
              <CodeTitleRenderer
                details={{
                  title: item?.course?.name,
                  code: item?.course?.code,
                }}
              />
            </div>
          );
        })}
        <button
          onClick={closeModal}
          className="bg-red-500 px-6 py-3 my-3 text-white font-bold"
        >
          CLOSE
        </button>
      </Modal>
    </div>
  );
};

export default FacultySubject;
