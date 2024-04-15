import { APIEndpoints, NavigateAttributes } from "common/src/APICommon.ts";
import axios from "axios";
import { GraphNode } from "common/src/GraphNode.ts";
import React, { FormEventHandler, useEffect, useState } from "react";
import { createNodes } from "common/src/GraphCommon.ts";
import NavigateButton from "./NavigateButton.tsx";
import NodeDropdown from "./NodeDropdown.tsx";
import { PathAlgorithm, PathNodesObject } from "common/src/Path.ts";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import IconButton from "@mui/material/IconButton";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaceIcon from "@mui/icons-material/Place";
import PathAlgorithmDropdown from "./PathAlgorithmDropdown.tsx";
import NavigationClearButton from "./NavigationClearButton.tsx";

const initialState: PathNodesObject = {
  startNode: "",
  endNode: "",
};

const textFieldStyles = {
  width: "17vw",
};

const defaultPathAlgorithm: PathAlgorithm = "A-Star";

function NavigateCard(props: {
  onSubmit: FormEventHandler;
  onReset: FormEventHandler;
}) {
  // Populates selection menu from database
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [pathNodeObject, setPathNodeObject] =
    useState<PathNodesObject>(initialState);
  const [pathAlgorithm, setPathAlgorithm] =
    useState<string>(defaultPathAlgorithm);

  function getNodeID(value: string): string {
    const foundNode = nodes.find((node) => node.longName === value);
    return foundNode ? foundNode.nodeID : "";
  }

  useEffect(() => {
    //get the nodes from the db
    async function getNodesFromDb() {
      const rawNodes = await axios.get(APIEndpoints.mapGetNodes);
      let graphNodes = createNodes(rawNodes.data);
      graphNodes = graphNodes.filter((node) => node.nodeType != "HALL");
      graphNodes = graphNodes.sort((a, b) =>
        a.longName.localeCompare(b.longName),
      );
      setNodes(graphNodes);
      return graphNodes;
    }
    getNodesFromDb().then();
  }, []);

  function swapLocations() {
    const start = pathNodeObject.startNode;
    setPathNodeObject({ startNode: pathNodeObject.endNode, endNode: start });
  }

  function reset() {
    setPathNodeObject(initialState);
    setPathAlgorithm(defaultPathAlgorithm);
  }

  return (
    <div>
      <div className="border-5 flex p-4 bg-white rounded-2xl shadow-xl">
        <form
          className="flex flex-col"
          noValidate
          onSubmit={props.onSubmit}
          onReset={props.onReset}
        >
          <div className="flex flex-row gap-40">
            <h2 className="text-2xl font-extralight text-secondary">
              Navigate
            </h2>
            <NavigationClearButton onClick={reset} type="reset" />
          </div>

          <div className="flex flex-row gap-1 items-center mt-[1rem]">
            <MyLocationIcon style={{ color: "#012D5A", marginRight: "5" }} />
            <NodeDropdown
              value={pathNodeObject.startNode}
              sx={textFieldStyles}
              label="Start Location"
              onChange={(newValue: string) =>
                setPathNodeObject((currentPathNode) => ({
                  ...currentPathNode,
                  startNode: newValue,
                }))
              }
            />
            <input
              type="hidden"
              name={`${NavigateAttributes.startLocationKey}`}
              value={getNodeID(pathNodeObject.startNode)}
            />
          </div>
          <MoreVertIcon style={{ color: "#012D5A" }} />
          <div className="flex flex-row gap-1 items-center">
            <PlaceIcon style={{ color: "#012D5A", marginRight: "5" }} />
            <NodeDropdown
              value={pathNodeObject.endNode}
              sx={textFieldStyles}
              label="End Location"
              onChange={(newValue: string) =>
                setPathNodeObject((currentPathNode) => ({
                  ...currentPathNode,
                  endNode: newValue,
                }))
              }
            />
            <input
              type="hidden"
              name={`${NavigateAttributes.endLocationKey}`}
              value={getNodeID(pathNodeObject.endNode)}
            />
          </div>
          <div className="ml-[2rem] flex flex-row mt-4 justify-between">
            <PathAlgorithmDropdown
              value={pathAlgorithm}
              sx={{ width: "9vw" }}
              label="Algorithm"
              onChange={setPathAlgorithm}
            ></PathAlgorithmDropdown>
            <input
              type="hidden"
              name={`${NavigateAttributes.algorithmKey}`}
              value={pathAlgorithm}
            />
            <NavigateButton type="submit" className={"flex"} />
          </div>
        </form>
        <div className="min-h-full flex flex-col justify-center align-start">
          <IconButton onClick={swapLocations}>
            <SwapVertIcon style={{ alignSelf: "left" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default NavigateCard;
