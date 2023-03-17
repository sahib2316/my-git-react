import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Alert(props) {
  const [isOpen, setIsOpen] = useState(
    props.alert ? props.alert.isVisible : false
  );
  // const closeAlert = function () {};
  useEffect(() => {
    if (props.alert) {
      setIsOpen(props.alert.isVisible);
    }
  }, [props.alert]);
  return (
    isOpen && (
      <div>
        {props.alert && (
          <div className="container-fluid">
            <div className="row alert alert-info" role="alert">
              <div className="col-md-11">
                <strong>{props.alert.type}</strong>: {props.alert.msg}
              </div>
              <div className="col-md-1" onClick={() => setIsOpen(false)}>
                <a href="#">
                  <i
                    className="fa fa-xmark pl-5"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
}
