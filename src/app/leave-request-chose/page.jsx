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
const [currentStep, setCurrentStep] = useState(1);
const handleStepOne = (e) => {
  e.preventDefault();

  setCurrentStep(2);
};
  return (
    <div className="merchant-settings-page leave-request-chose">
      <Container>
        <span className="heading">Merchants Settings</span>
        <div className="mert-sett">
          <form action="" className='siteformbg '>
            <Form.Group className="form-group">
              <Form.Label>Merchant ID</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="merchantid" placeholder="9e9b985e3bf9a2ee1a023ededaecfa9e..." />
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
                <span className="sub-head mb-2">Choose type and add project URL</span>
                <p className="mb-2">
                  Link to your website or Telegram bot
                </p>
              </div>
            </div>
            <div
              className={`mert-sett-step-line ${currentStep > 1 ? "mert-sett-step-line-active" : ""
                }`}
            ></div>            <div className="mert-sett-step">
              <div className="mert-sett-step-number mert-sett-step-inactive">
                2
              </div>

              <div className="mert-sett-step-content mb-2">
                <span className="sub-head">Confirm Telegram Bot</span>
                <p className="mb-2">
                  Verify your Telegram bot
                </p>
                <span className="sub-head mt-2 mb-2">Step 1</span>
                <p>
                  Add this code to your Telegram bot description
                </p>
                <form action="" className='siteformbg mt-1'>
                  <Form.Group className="form-group">
                    <InputGroup>
                      <Form.Control type="text" id="merchantid" placeholder="c3c7f7..." />
                    </InputGroup>
                  </Form.Group>
                </form>
                <span className="sub-head mt-2">Project Name</span>
                <div className="clickcheck">
                  <p>
                    Click ‘Check’ after adding description
                  </p>

                  <button
                    type="button"
                    className="borderbtn btn-sm"
                  >
                    check
                  </button>
                </div>
                <div className="w-20 mt-2">
                  <button type="button" className="sitebtn btn-sm sbt">
                    Submit
                  </button>
                </div>
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