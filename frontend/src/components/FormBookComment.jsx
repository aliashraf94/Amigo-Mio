import React, { Fragment, useState } from "react";

const FormBookComment = props => {
  const [datos, setDatos] = useState({
    comment: ""
  });

  const handleInputChange = event => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const enviarDatos = event => {
    event.preventDefault();
    props.sendFuntion([
      datos.comment
    ]);
    console.log(
      "enviando datos..." +
        [
          datos.comment
        ]
    );
  };

  return (
    <Fragment>
      <div className="container">
        <h2 className="display-6">Insert comment here</h2>
        <form className="row" onSubmit={enviarDatos}>
          <div className="row">
              <div className="col-sm">
                <input
                  type="text"
                  placeholder="comment"
                  className="form-control"
                  onChange={handleInputChange}
                  name="comment"
                  required
                />
              </div>
          </div>
          <div className="row  col-sm-3 container mt-2 mb-2">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default FormBookComment;
