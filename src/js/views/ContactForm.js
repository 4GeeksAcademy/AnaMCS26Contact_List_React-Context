import React, { useContext, useState } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {
  const {actions } = useContext(Context);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone]= useState("");
  const [address,setAddress] = useState("");

  const navigate = useNavigate();


  const createContact = () => {
   
    actions.addContact(
      {
        "full_name": name,
        "email": email,
        "agenda_slug": "Ana_agenda",
        "address": address,
        "phone": phone,
      })
 
      navigate("/")

  }

  return (
    <div className="p-5">
      <div className="mb-3 formImput container row"> 
        <label for="exampleformControlInput" className="form-label col-auto">Full Name</label>
        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control col-auto" id="exampleformControlInput" placeholder="Lus Cuesta Mogollón" />
      </div>
      <div className="mb-3 formImput container row ">
        <label for="exampleformControlInput2" className="form-label">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control col-auto" id="exampleformControlInput2" placeholder="luzcuestamogollon@nosecomopagar.com" />
      </div>
      <div className="mb-3 formImput container row">
        <label for="exampleFormControlInput3" className="form-label">Adress</label>
        <input value={address} onChange={e => setAddress(e.target.value)} type="text" className="form-control" id="formGroupExampleInput3" placeholder="Calle Leia, 25" />
      </div>
      <div className="mb-3 formImput container row">
        <label for="formGroupExampleInput4" className="form-label">Phone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} type="number" className="form-control" id="formGroupExampleInput4" placeholder="000-000-000" />
      </div>
      <div class="d-grid" >
        <button onClick={createContact} class="btn btn-primary" type="button" >Button</button>
      </div>
    </div>)

}