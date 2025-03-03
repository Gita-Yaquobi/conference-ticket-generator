import React, { useRef, useState } from "react";
import styles from "./InputFile.module.css";
import IconUpload from "../../assets/images/icon-upload.svg";
import IconInfo from "../../assets/images/icon-info.svg";

export default function InputFile({ text, textInfo, onSetFile }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleClickDiv = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    e.stopPropagation();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;

      if (fileType !== "image/jpeg" && fileType !== "image/png") {
        setError("Please upload a valid image file (jpg or png).");
      } else if (fileSize > 500 * 1024) {
        setError("File too large.Please upload a photo under 500KB.");
      } else {
        setFile(URL.createObjectURL(selectedFile));
        onSetFile(selectedFile);
        setError("");
      }
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setFile(null);
    onSetFile(null);
    setError("");
    fileInputRef.current.value = null;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const fileSize = selectedFile.size;

      if (fileType !== "image/jpeg" && fileType !== "image/png") {
        setError("Please upload a valid image file (jpg or png).");
      } else if (fileSize > 500 * 1024) {
        setError("File too large. Please upload a photo under 500KB.");
      } else {
        setFile(URL.createObjectURL(selectedFile));
        onSetFile(selectedFile);
        setError("");
      }
    }
  };

  return (
    <div>
      <label className="textSm">{text}</label>
      <div
        className={styles.fileUpload}
        onClick={handleClickDiv}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          className={styles.fileInput}
          ref={fileInputRef}
          onChange={handleChange}
        />
        {!file && (
          <label className={`${styles.fileLabel} borderRadius5 background700`}>
            <img
              src={IconUpload}
              alt="icon-upload"
              className={`${styles.iconUpload} borderRadius5`}
              style={{ padding: "5px" }}
            />
            <span className="textXs">drag and drop or click to upload</span>
          </label>
        )}
      </div>
      {file && (
        <div className={`${styles.fileLabel} borderRadius5 background700`}>
          <img
            src={file}
            alt="preview"
            className={`${styles.iconUpload} borderRadius5 mt5`}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              onClick={handleDelete}
              className={`${styles.deleteButton} textXs`}
            >
              Remove image
            </button>
            <button
              onClick={handleClickDiv}
              className={`${styles.deleteButton} textXs`}
            >
              Change image
            </button>
          </div>
        </div>
      )}
      <label className="textXs" style={{ margin: "10px 0" }}>
        <img
          src={IconInfo}
          alt="info-icon"
          className={error ? "iconError" : ""}
          style={{ display: "inline-block" }}
        />
        {error === "" && (
          <span style={{ verticalAlign: "top" }}> {textInfo}</span>
        )}
        {error !== "" && (
          <span className="textXs textRed" style={{ verticalAlign: "top" }}>
            {" "}
            {error}
          </span>
        )}
      </label>
    </div>
  );
}
