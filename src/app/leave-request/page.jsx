"use client";

import { useState } from "react";
import { Image, Container, Badge, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import Userfooter from "../components/Userfooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEye, faTrash, faCirclePlus, faTimes, faCopy } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BookMarkCircleIcon, RecieveIcon, SendIcon, SwapIcon, TransReportIcon, DiscountIcon, ScannerIcon, AccountCircleIcon } from "../components/Icons";


const merchantPage = () => {
  const [value, setValue] = useState(1.6);
const [projectType, setProjectType] = useState("website");

  return (
    <div className="merchant-settings-page mertn">
      <Container>
        <span className="heading">Merchants Settings</span>
        <div className="mert-sett">
          <form action="" className='siteformbg '>
            <Form.Group className="form-group">
              <Form.Label>Merchant ID</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="merchantid" placeholder="TXf8aUAZqRUwT6M2zk75kVgtfRK7yRaDby..." />
                <div className="input-group-append">
                  <InputGroup.Text id="copybtn"> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                </div>
              </InputGroup>
            </Form.Group>
          </form>
          <div className="mert-sett-steps mt-3">
            <div className="mert-sett-step">
              <div className="mert-sett-step-number mert-sett-step-active">
                1
              </div>
              <div className="mert-sett-step-content">
                <span className="sub-head">Choose type and add project URL</span>
                <p>
                  Link to your website or Telegram bot
                </p>
                <div className="merchant-settings-page mertn-project-type">
                  <Form.Group className="mertn-project-type-group">

                   <h6 className="sub-head mt-2">Type</h6>
                    <p className="mt-2">Once you've selected the type of project you want to submit, enter the correct project URL and name. Please note that it will not be possible to change the information you have entered.</p>

                    <div className="mertn-project-type-options mt-2">
                      <Form.Check
                        type="radio"
                        id="mertn-telegram-bot"
                        name="projectType"
                        value="telegram"
                        label="Telegram Bot"
                        checked={projectType === "telegram"}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="mertn-project-type-radio"
                      />

                      <Form.Check
                        type="radio"
                        id="mertn-website"
                        name="projectType"
                        value="website"
                        label="Website"
                        checked={projectType === "website"}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="mertn-project-type-radio mt-2"
                      />

                    </div>

                  </Form.Group>
                </div>
                <Form className="siteformbg" mt-3>
                  <Form.Group className="form-group mt-3">
                    <Form.Label>Project URL</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="Enter your project url" id='amount' />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="form-group mt-3">
                    <Form.Label>Project Name</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="Enter your project Name" id='amount' />
                    </InputGroup>
                  </Form.Group>
                </Form>
                <Button type="button" className="sitebtn btn-block mt-3 mb-3">Submit</Button>
              </div>
            </div>
            <div className="mert-sett-step-line"></div>
            <div className="mert-sett-step">
              <div className="mert-sett-step-number mert-sett-step-inactive">
                2
              </div>

              <div className="mert-sett-step-content">
                <span className="sub-head">Confirm domain</span>
                <p>
                  Confirm your domain
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>

      <Userfooter />
    </div>
  );
};

export default merchantPage;