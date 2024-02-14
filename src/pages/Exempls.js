import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cours_Name_Data from "../Data/Cours_name_data";
import Data_Exempls from "../Data/Data_exempls";
import Nav from "../Component/Nav";
import { ConstantColorFactor } from "three";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Exempls = () => {
  const { id } = useParams();
  // const [answer,setAnswer]=useState('')
  const [cours, setCours] = useState("");
  const [select, setSelect] = useState("");
  const [isData, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [traduction, setTraduction] = useState(true);

  const handelTraduction = () => {
    setTraduction(!traduction);
  };
  const handelAnsowerShow = (data, id) => {
    //   console.log(answer)
    // setAnswer(data)
    setSelect(id);
    setShow(true);
  };
  const handelAnsowerDispir=(e,i)=>{
    setSelect('')
    setShow(false)
  }
  const handleClick = (title) => {
    setCours(title);
    const filteredData = Data_Exempls.filter((item) => item.title === title);
    setData(filteredData);
  };

  //   useEffect(() => {
  //     if (id < 4) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   }, [id]);

  return (
    <>
      <>
        <Nav />
        <div className="button">
          {!cours ? (
            ""
          ) : (
            <>
              <button
                onClick={() => handelTraduction()}
                className="button-trans"
              >
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  id="icon"
                  icon={faLanguage}
                />
              </button>
            </>
          )}
        </div>
        {/* LIST OF THE ITEMS */}
        <div className="titles-cours">
          {Cours_Name_Data.map((i) => (
            <ul key={i.id}>
              <li key={i.id} onClick={() => handleClick(i.cours, i.id)}>
                {i.cours}
              </li>
            </ul>
          ))}
        </div>
        {/* END LIST OF THE ITEMS */}
        <div className="iteams-answer">
          {isData.map((data) => (
            <div key={data.id} className="iteam-answer">
              {!data.imageQuestion == "" ? (
                <div className="image-div-answer">
                  <img src={data.imageQuestion} id="image-question" alt="" />
                </div>
              ) : (
                <div className="image-div-answer"
                // style={{ position: "absolute" }}
                ></div>
              )}

                <div id='paragraph-answer'>
                <p id="title-question">{data.title}</p>
                <p id="title-p">{traduction ? data.quetionFR : data.questionAR}</p>
                </div>
                {select == data.id ? 
                (<div className="answer">
                  <p>{data.Answer}</p>
                  {data.imageAnswer ?(
                    <img src={data.imageAnswer} id="image-answer" alt="" />
                  ):(<div style={{ position: "absolute" }}></div>)}
                  </div>) : ("")}
                <div className="button-iteam">
                {show != true && data.id != select ? (
                  <button
                      onClick={() => handelAnsowerShow(data, data.id)}
                      className="button-item"
                    >
                      <FontAwesomeIcon className="button-answer" icon={faCheck} />
                    </button>
                  ):('')}
                
                {show == true && data.id == select ? (
                  <>
                    <button
                      onClick={() => handelAnsowerDispir(data, data.id)}
                      className="button-item">
                      <FontAwesomeIcon
                        className="button-disper"
                        icon={faXmark}/>
                    </button>
                  </>
                ) : ("")}
              </div>
              </div>
            
          ))}
        </div>
      </>
    </>
  );
};

export default Exempls;
