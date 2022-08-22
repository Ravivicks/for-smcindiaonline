import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styled from "@emotion/styled";


const CardWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

const card = (
  <>
    <CardContent style={{ textAlign: "center" }}>
      <h2>Welcome To User Login Panel</h2>
      
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--qw4uLpNW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/4g7s2e22uuvyagvbdhcl.jpg"
        alt="crud"
        width='600px'  
      />
    </CardContent>
  </>
);

export default function Welcome() {
  return (
    <CardWrapper>
      <Card variant="outlined">{card}</Card>
    </CardWrapper>
  );
}
