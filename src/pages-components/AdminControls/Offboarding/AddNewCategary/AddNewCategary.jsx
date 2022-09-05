import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Label } from "reactstrap";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import CardDrag from "./Card";
import "./AddNewCategary.scss";

const AddNewCategary = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Human Resources",
    },
    {
      id: 2,
      text: "Manager",
    },
    {
      id: 3,
      text: "IT",
    },
  ]);

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };
  console.log("carddataaaaaaaaaaaa", cards);
  return (
    <div id="addNewCategary">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["far", "user"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Add New Categary</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Reorder Categories</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Col md="4" className="p-5">
            <Label for="">Drag Categories to Reorder: </Label>
            <DndProvider backend={Backend}>
              {cards.map((card, i) => (
                <CardDrag
                  key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={moveCard}
                  style={{ marginLeft: "0" }}
                />
              ))}
            </DndProvider>
          </Col>
          <div className="divider my-5" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button className="btn btn-secondary">Cancel</Button>
            <Button color="primary1" type="submit" className="ml-auto">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNewCategary;
