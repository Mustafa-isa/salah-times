import Box from "@mui/material/Box";
import { ThreeCircles } from "react-loader-spinner";

function Lodaer() {
  return (
    <Box
      display="block"
      sx={{
        position: "absolute",
        top: "0",
        bottom: "0",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display:"flex",
        background: "rgba(100, 152, 189, 0.8)",
        zIndex: "10",
        opacity: 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <ThreeCircles
        height="150"
        width="150"
        color="#6009b8"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Box>
  );
}

export default Lodaer;
