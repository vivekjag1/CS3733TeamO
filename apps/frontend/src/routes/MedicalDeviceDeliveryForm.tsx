import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import NodeDropdown from "../components/NodeDropdown.tsx";
import CustomTextField from "../components/CustomTextField.tsx";
import CustomDatePicker from "../components/CustomDatePicker.tsx";
import FormContainer from "../components/FormContainer.tsx";
import CustomStatusDropdown from "../components/CustomStatusDropdown.tsx";
import CustomPrioritySelector from "../components/CustomPrioritySelector.tsx";
import CustomClearButton from "../components/CustomClearButton.tsx";
import CustomSubmitButton from "../components/CustomSubmitButton.tsx";
import { MedicalDeviceDelivery } from "common/src/MedicalDeviceDelivery.ts";
import dayjs, { Dayjs } from "dayjs";
import { APIEndpoints } from "common/src/APICommon.ts";
import { useToast } from "../components/useToast.tsx";
import { MakeProtectedPostRequest } from "../MakeProtectedPostRequest.ts";
import { useAuth0 } from "@auth0/auth0-react";
import ServiceImages from "../components/ServiceImages.tsx";
import giftPlaceholder from "../../assets/gift-placeholder.jpg";

const initialState: MedicalDeviceDelivery = {
  deviceType: "",
  quantity: 0,
  serviceRequest: {
    requestingUsername: "",
    location: "",
    priority: "",
    status: "Unassigned",
    description: "",
    requestedTime: dayjs().toISOString(),
    assignedTo: "",
  },
};

export function MedicalDeviceDeliveryForm() {
  const { getAccessTokenSilently } = useAuth0();

  const [medicalDeviceDelivery, setMedicalDeviceDelivery] =
    useState<MedicalDeviceDelivery>(initialState);
  const [date, setDate] = useState<Dayjs>(dayjs());
  const { showToast } = useToast();

  function clear() {
    setDate(dayjs());
    setMedicalDeviceDelivery(initialState);
  }

  const validateForm = () => {
    return (
      medicalDeviceDelivery.deviceType &&
      medicalDeviceDelivery.quantity &&
      medicalDeviceDelivery.serviceRequest.requestingUsername &&
      medicalDeviceDelivery.serviceRequest.location &&
      medicalDeviceDelivery.serviceRequest.priority
    );
  };

  async function submit() {
    const token = await getAccessTokenSilently();

    console.log(validateForm());
    if (validateForm()) {
      try {
        const response = await MakeProtectedPostRequest(
          APIEndpoints.medicalDeviceDelivery,
          medicalDeviceDelivery,
          token,
        );

        if (response.status === 200) {
          console.log("Submission successful", response.data);
          showToast("Medical Device Request sent!", "success");
          clear();
        } else {
          console.error("Submission failed with status: ", response.status);
          showToast("Medical Device Request failed!", "error");
        }
      } catch (error) {
        console.error("Error submitting the form: ", error);
        showToast("Medical Device Request failed!", "error");
      }
    } else {
      showToast("Fill out all the required information!", "warning");
    }
  }

  return (
    <FormContainer>
      <div>
        <h1 className="text-center font-bold text-3xl text-secondary pt-4 pb-4">
          Medicine Device Request
        </h1>
        <div className="h-auto flex justify-center items-center w-[30rem]">
          <form
            noValidate
            autoComplete="off"
            className="space-y-4 flex flex-col justify-center items-center"
          >
            <CustomTextField
              label="Requesting Username"
              value={medicalDeviceDelivery.serviceRequest.requestingUsername}
              onChange={(e) =>
                setMedicalDeviceDelivery({
                  ...medicalDeviceDelivery,
                  serviceRequest: {
                    ...medicalDeviceDelivery.serviceRequest,
                    requestingUsername: e.target.value,
                  },
                })
              }
              required
            />

            <NodeDropdown
              value={medicalDeviceDelivery.serviceRequest.location}
              sx={{ width: "25rem", padding: 0 }}
              label="Location *"
              onChange={(newValue: string) => {
                setMedicalDeviceDelivery(
                  (currentMedicalDeviceDelivery: MedicalDeviceDelivery) => ({
                    ...currentMedicalDeviceDelivery,
                    serviceRequest: {
                      ...currentMedicalDeviceDelivery.serviceRequest,
                      location: newValue,
                    },
                  }),
                );
              }}
            />

            <CustomDatePicker
              value={date}
              onChange={(newValue) => {
                const isValid = newValue && dayjs(newValue).isValid();
                setMedicalDeviceDelivery(
                  (currentMedicalDeviceDelivery: MedicalDeviceDelivery) => ({
                    ...currentMedicalDeviceDelivery,
                    serviceRequest: {
                      ...currentMedicalDeviceDelivery.serviceRequest,
                      requestedTime: isValid ? newValue.toISOString() : "",
                    },
                  }),
                );
              }}
            />

            <FormControl
              sx={{ width: "25rem", fontFamily: "Poppins, sans-serif" }}
              size="small"
            >
              <InputLabel
                sx={{
                  color: "#a4aab5",
                  fontSize: ".9rem",
                  "& .MuiInputLabel-root.Mui-focused": {
                    fontFamily: "Poppins, sans-serif",
                  },
                }}
              >
                Device Type *
              </InputLabel>
              <Select
                name="device-type"
                className="bg-gray-50"
                label="Device Type *"
                sx={{ fontSize: ".9rem" }}
                value={medicalDeviceDelivery.deviceType}
                onChange={(e) =>
                  setMedicalDeviceDelivery({
                    ...medicalDeviceDelivery,
                    deviceType: e.target.value,
                  })
                }
                required
              >
                <MenuItem
                  value="stretcher"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Stretcher
                </MenuItem>
                <MenuItem
                  value="wheelchair"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Wheelchair
                </MenuItem>
                <MenuItem
                  value="crutches"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Crutches
                </MenuItem>
                <MenuItem
                  value="hospital bed"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Hospital Bed
                </MenuItem>
                <MenuItem
                  value="iv pump"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  IV Pump
                </MenuItem>
                <MenuItem
                  value="patient monitor"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Patient Monitor
                </MenuItem>
                <MenuItem
                  value="defibrillator"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Defibrillator
                </MenuItem>
                <MenuItem
                  value="anesthesia machine"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Anesthesia Machine
                </MenuItem>
                <MenuItem
                  value="ventilator"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ventilator
                </MenuItem>
                <MenuItem
                  value="catheter"
                  sx={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Catheter
                </MenuItem>
              </Select>
            </FormControl>

            <CustomTextField
              label="Quantity"
              type="number"
              InputProps={{
                inputProps: { min: 0 },
              }}
              onChange={(e) =>
                setMedicalDeviceDelivery({
                  ...medicalDeviceDelivery,
                  quantity: parseInt(e.target.value),
                })
              }
              required
            />

            <CustomTextField
              label="Description (optional)"
              multiline
              rows={3}
              size="small"
              onChange={(e) =>
                setMedicalDeviceDelivery({
                  ...medicalDeviceDelivery,
                  serviceRequest: {
                    ...medicalDeviceDelivery.serviceRequest,
                    description: e.target.value,
                  },
                })
              }
            />

            <FormControl sx={{ width: "25rem" }} size="small">
              <CustomStatusDropdown
                value={medicalDeviceDelivery.serviceRequest.status}
                onChange={(e) =>
                  setMedicalDeviceDelivery({
                    ...medicalDeviceDelivery,
                    serviceRequest: {
                      ...medicalDeviceDelivery.serviceRequest,
                      status: e.target.value ? e.target.value.toString() : "",
                    },
                  })
                }
              />
            </FormControl>

            <FormControl
              component="fieldset"
              margin="normal"
              sx={{ width: "25rem" }}
            >
              <CustomPrioritySelector
                value={medicalDeviceDelivery.serviceRequest.priority}
                onChange={(e) =>
                  setMedicalDeviceDelivery({
                    ...medicalDeviceDelivery,
                    serviceRequest: {
                      ...medicalDeviceDelivery.serviceRequest,
                      priority: e.target.value,
                    },
                  })
                }
              />
            </FormControl>
            <div className="flex justify-between w-full mt-4">
              <CustomClearButton onClick={clear}>Clear</CustomClearButton>
              <CustomSubmitButton onClick={submit}>Submit</CustomSubmitButton>
            </div>
            <div className="text-center mt-4">
              <p>Made by Andy Truong and Francesco Di Mise</p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[40rem]">
        <ServiceImages imgPath={giftPlaceholder} alt="present picture" />
      </div>
    </FormContainer>
  );
}

export default MedicalDeviceDeliveryForm;
