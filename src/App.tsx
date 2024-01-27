import "./App.css";
import { X } from "@mui/icons-material";

export default () => {
  return (
    <>
      <div
        style={{
          height: "96vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <X style={{ fontSize: "20rem" }} />
      </div>
    </>
  );
};
