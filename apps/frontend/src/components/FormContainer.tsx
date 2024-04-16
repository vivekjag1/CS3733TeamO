import { Card, CardContent, styled } from "@mui/material";
import { ReactNode } from "react";

const CustomCardContent = styled(CardContent)({
  "&:last-child": {
    padding: 0,
    paddingBottom: 0,
  },
});

interface FormContainerProps {
  children: ReactNode;
}

export function FormContainer({ children }: FormContainerProps) {
  return (
    <div className=" h-screen overflow-auto">
      <div className="w-full justify-items-center">
        <div className="flex flex-col items-center gap-2 mx-5">
          <Card className="drop-shadow-2xl w-full max-w-4xl rounded-lg my-8">
            <CustomCardContent>{children}</CustomCardContent>
            {/*  <CardContent>{children}</CardContent>*/}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
