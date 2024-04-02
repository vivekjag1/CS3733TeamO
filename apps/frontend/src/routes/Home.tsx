import Map from "../components/Map.tsx";
import LocationSelector from "../components/LocationSelector.tsx";
import { IconButton } from "@mui/material";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import { useState } from "react";

const nodes = [
  { xCoordinate: 1980, yCoordinate: 844 },
  { xCoordinate: 1845, yCoordinate: 844 },
  { xCoordinate: 1845, yCoordinate: 924 },
  { xCoordinate: 1732, yCoordinate: 924 },
];

function Home() {
  const [panelToggled, setPanelToggled] = useState(false);
  function clickHandler() {
    setPanelToggled(!panelToggled);
  }

  return (
    <div>
      <div className="relative">
        <Map nodes={nodes} />
        <div className="absolute top-4 left-4">
          <IconButton
            onClick={clickHandler}
            size="large"
            sx={{
              backgroundColor: "#f6f8fa",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#a1a1a1",
              },
              width: "50px",
              height: "50px",
              marginBottom: "10px",
            }}
          >
            <EditLocationIcon
              sx={{
                width: "35px",
                height: "35px",
                color: "#3b4146",
              }}
            />
          </IconButton>
          {panelToggled && <LocationSelector />}
        </div>
      </div>
    </div>
  );
}

export default Home;
