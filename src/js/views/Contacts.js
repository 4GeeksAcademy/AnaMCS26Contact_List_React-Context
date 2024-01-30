import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";



export const Contacts = () => {

	const { store, actions } = useContext(Context);
       
	const { deleteContact } = actions;
	const navigate = useNavigate();



	return (

		<div className="text-center mt-2">


			<div className="m-5">
				<h1>Lista de contactos:</h1>
			</div>
			< div className="p-5">
				<ul>
					{
						store.contacts.map((element) => {
							return (
								<ListGroup.Item
									as="li"
									key={element.id}
									className="d-flex"
									style={{ height: '100px' }}
								>
									
									<div className="content">

										<div className="fw-bold">{element.full_name}  </div>
										<div className="phone">{element.phone} </div>
										<div className="email">{element.email}  </div>
										<div className="address">{element.address}  </div>
									</div>
									<div  className="buttons">
										<Button bg="primary" onClick={() => {navigate(`/EditContactForm/${element.id}`)}} className="m-2">
											Edit
										</Button>
										<Button onClick={() => {deleteContact(element.id); 
											}}bg="primary" className="m-2">
											Trash
										</Button>
									</div>
								</ListGroup.Item>
							)
						})}
				</ul>

				<div>
					<Button onClick={() => {navigate("/ContactForm")}}>
						Add Contact
					</Button>
				</div>
			</div>
		</div>

	)
};