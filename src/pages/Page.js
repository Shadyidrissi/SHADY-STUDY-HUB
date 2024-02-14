import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cours_Name_Data from "../Data/Cours_name_data";
import Cours_Data from "../Data/Cours_data";
import Nav from "../Component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import ReactImageZoom from "react-image-zoom";


const Page = () => {
  // const  {id}  = useParams();
  const [cours, setCours] = useState("");
  const [isData, setData] = useState([]);
  // const [show, setShow] = useState(false);
  const [traduction, setTraduction] = useState(true);

  const handelTraduction = () => {
    setTraduction(!traduction);
  };

  const handleClick = (title) => {
    setCours(title);
    const filteredData = Cours_Data.filter((item) => item.title == title);
    setData(filteredData)
  };

  // useEffect(() => {
  //   if (id < 4) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //     setData([]); // Reset isData when show is false
  //   }
  // }, [id]);

  return (
    <>
       {/* {!show ? (
        <div
          style={{
            color: "red",
            fontSize: "52px",
            fontWeight: 600,
            textAlign: "center",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            display: "flex",
          }}
        >
          This Id Not Defined 🚩
        </div>
      ) : ( */}
        <>
          <Nav ul="no" />
          <p className="paragraph">
            {/* {console.log(isId)} */}
            This page Will find all the cours we have it on the exam FF 
            and you will find the 
            exempls

          </p>
          <div className="button">
            {cours=='' ? (
              ""
            ) : (
              <button
                onClick={() => handelTraduction()}
                className="button-TR"
              >
                <FontAwesomeIcon style={{color:'white'}} id="icon"  icon={faLanguage} />
              </button>
            )}
          </div>
          <div className="titles-cours">
            {Cours_Name_Data.map((i) => (
              <ul key={i.id}>
                <li key={i.id} onClick={() => handleClick(i.cours)}>
                  {i.cours}
                </li>
              </ul>
            ))}
          </div>
          <div className="iteams">
            {isData ?(
              isData.map((data) => (
                <div key={data.id} className="iteam">
                  <h3>{data.title}</h3>
                  {!data.image == "" ? (
                    <img src={data.image} id="image-iteam" alt="" />
                  ) : (
                    <div style={{ position: "absolute" }}></div>
                  )}
                  <div className="princip">
                    <p>{traduction ? data.Freanch : data.Arabic}</p>
                  </div>
                </div>
              ))
            ):('WAIT')}
          </div>
        </>
      {/* )} */}
    </>
  );
};

export default Page;
