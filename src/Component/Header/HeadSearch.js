import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
const HeadSearch = () => {
  const [destination, setdestination] = useState("");
  const [open, setopen] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setopenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleroption = (name, operation) => {
    setOption((pev) => {
      return {
        ...pev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const navigation = useNavigate();
  const handlerclick = () => {
    
    navigation("/hotels", { state: { destination, date, option } });
  };
  return (
    <div className="raw_css_Search">
      <Container>
        <Form className="d-flex active">
          <Form.Control
            type="text"
            placeholder="Where are you going?"
            className="me-1"
            aria-label="Search"
            onBlur={(e) => setdestination(e.target.value)}
          />

          <div>
            <div className="calendercss">
              <span
                className="spandesgin"
                onClick={() => setopen(!open)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>
            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div>
            <div>
              <div className="calendercss">
                <span
                  className="spandesgin"
                  onClick={() => setopenOption(!openOption)}
                >{`${option.adult} adult .  ${option.children} children .  ${option.room} room `}</span>
              </div>
            </div>
            <div>
              {openOption && (
                <div className="countercss">
                  <Container>
                    <Row>
                      <Col sm={8}>Adult</Col>
                      <Col sm={4} className="coldesgin">
                        <span
                          className="inputdesign"
                          onClick={() => {
                            handleroption("adult", "d");
                          }}
                        >
                          -
                        </span>
                        <span className="inputnumberdesign">
                          {option.adult}
                        </span>
                        <span
                          className="inputdesign"
                          onClick={() => {
                            handleroption("adult", "i");
                          }}
                        >
                          +
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={8}>Children</Col>
                      <Col sm={4} className="coldesgin">
                        <span
                          className="inputdesign"
                          onClick={() => {
                            handleroption("children", "d");
                          }}
                        >
                          -
                        </span>
                        <span className="inputnumberdesign">
                          {option.children}
                        </span>
                        <span
                          className="inputdesign"
                          onClick={() => {
                            handleroption("children", "i");
                          }}
                        >
                          +
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={8}>Room</Col>
                      <Col sm={4} className="coldesgin">
                        <span
                          className="inputdesign"
                          onClick={() => {
                            handleroption("room", "d");
                          }}
                        >
                          -
                        </span>
                        <span className="inputnumberdesign">{option.room}</span>
                        <span
                          className="inputdesign"
                          onClick={() => {
                            handleroption("room", "i");
                          }}
                        >
                          +
                        </span>
                      </Col>
                    </Row>
                  </Container>
                </div>
              )}
            </div>
          </div>

          <Button variant="primary" onClick={() => handlerclick()}>
            Search
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default HeadSearch;
