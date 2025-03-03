import { React, useState } from "react";
import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/global.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import InputFile from "./components/InputFile/InputFile";
import Ticket from "./components/Ticket/Ticket";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  const validateName = (name) => {
    if (!name) return "Name is required";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email address";
    return "";
  };

  const validateGithub = (github) => {
    if (!github) return "Github username is required";
    return "";
  };

  const validationFile = (file) => {
    if (!file) return "please choose your picture";
    return;
  };

  const handleBlur = (field, value) => {
    let error = "";
    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "github":
        error = validateGithub(value);
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const githubError = validateGithub(github);
    const fileError = validationFile(file);

    if (nameError || emailError || githubError || fileError) {
      setErrors({
        name: nameError,
        email: emailError,
        github: githubError,
        file: fileError,
      });
      return;
    }

    setSubmitForm(true);
  };

  return (
    <div className="app">
      <Container>
        {submitForm ? (
          <>
            <Header
              title={
                <>
                  congrats, <span className="textRed">{name}</span>! <br /> your
                  ticket is ready.
                </>
              }
              text={
                <>
                  we've emailed your ticket to
                  <br />
                  <span className="textRed">{email}</span> and will send updates
                  in
                  <br /> the run up to the event.
                </>
              }
            />
            <Ticket name={name} github={github} img={file} />
          </>
        ) : (
          <>
            <Header
              text={"secure your spot at next year's biggest coding conference"}
              title={"your journey to coding conf 2025 starts here!"}
            />
            <Form onSubmit={handleSubmit}>
              <InputFile
                text="Upload Avatar"
                textInfo="upload your photo(jpg or png , max size: 500KB)."
                onSetFile={setFile}
              />
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => handleBlur("name", e.target.value)}
                id="fullName"
                autoComplete="name"
                value={name}
                error={errors.name}
              >
                Full name
              </Input>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                id="email"
                autoComplete="email"
                value={email}
                error={errors.email}
              >
                Email Address
              </Input>
              <Input
                type="text"
                onChange={(e) => setGithub(e.target.value)}
                onBlur={(e) => handleBlur("github", e.target.value)}
                id="github"
                autoComplete="username"
                value={github}
                error={errors.github}
              >
                Github username
              </Input>
              <Button>generate my ticket</Button>
            </Form>
          </>
        )}
      </Container>
    </div>
  );
}
