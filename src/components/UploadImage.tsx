import "./UploadImage.css";
import Grid from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
function UploadImage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState(""); //store file
  const [alert, setAlert] = useState(""); //alert

  const selectFiles = (event: any) => {
    setFiles(event.target.files);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        let currentFile = files[0];
        console.log("yoo" + currentFile);

        let formData = new FormData();
        formData.append("file", currentFile);

        axios
          .post("http://127.0.0.1:8080/image/details", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            navigate("/profile", {
              state: {
                result: response.data,
              },
            });
          })
          .catch(function (error) {
            setAlert(error.response.data);
          });
      }}
    >
      <Grid spacing={0} className="Grid">
        <Box className="Box">
          <h2 className="InputLabel">DigiBoard</h2>
        </Box>
        <h4 className="InputLabel">Upload Passport Photo</h4>
        <input
          type="file"
          name="image"
          placeholder="Image"
          onChange={selectFiles}
        />
        <Box className="Box">
          <Button type="submit" variant="contained" className="Button">
            Submit
          </Button>
        </Box>
        {alert ? <Alert severity="error">{alert}</Alert> : <></>}{" "}
      </Grid>
    </form>
  );
}

export default UploadImage;
