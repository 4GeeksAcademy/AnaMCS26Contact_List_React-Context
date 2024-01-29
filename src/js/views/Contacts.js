import React, { useContext } from "react";
import "../../styles/home.css";
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
									className="d-flex justify-content-between align-items-start"
									style={{ height: '100px' }}
								>
									<img src=".." style={{ width: '40px' }} />
									<div className="ms-2 me-auto">

										<div className="fw-bold">{element.full_name}  </div>
										{element.phone}
									</div>
									<div >
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