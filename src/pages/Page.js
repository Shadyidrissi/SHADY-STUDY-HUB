import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cours_Name_Data from "../Data/Cours_name_data";
import Nav from "../Component/Nav";







const Page=() =>{
  const { id } = useParams();
  const [cours, setCours] = useState('Regulation');
  const [show, setShow] = useState(null);
  const handleClick =(e)=>{
    setCours(e)
    console.log(cours)
  }
  useEffect(() => {
    if (id < 4) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [id]);

  return (
    <>
      {!show ? (
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
          This Id Not Defind 🚩
        </div>
      ) : (
        <>
          <Nav title="" />
          <p className="paragraph">
            {/* {console.log(isId)} */}
            mammamamamamamamamamamamamamamammaammaammamamaamammaamam
            mammamamamamamamamamamamamamamammaammaammamamaamammaamam
            mammamamamamamamamamamamamamamammaammaammamamaamammaamam
          </p>
          <div className="titles-cours">
            
            {Cours_Name_Data.map((i) => (
              <ul key={i.id}>
                <li  onClick={() => handleClick(i.cours)}>{i.cours}</li>
              </ul>
            ))}
            
          </div>
          <div className="iteams">
            {/* start*/}
            <div className="iteam">
              <img src="" id="image-iteam" alt="" />
              <div className="princip">
                <p>hello world</p>
                <p>on here descr</p>
              </div>
              <button className="button-trans">tratuction</button>
            </div>
            {/* end */}
           
          </div>
        </>
      )}
    </>
  );
}

export default Page;
