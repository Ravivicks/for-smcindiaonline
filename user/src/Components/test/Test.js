import React from 'react';
import { Formik, Field, Form } from 'formik';
import { addTest } from '../../services/api';
import { Box, Button, Card, Dialog, DialogActions, DialogContent, Divider, styled, useMediaQuery} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";




const AnswerField = styled(Box)`
 padding: 15px;
 margin: 10px;
 `;

 const CardWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
`;

const Test = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const auth = localStorage.getItem("user");
  const handleClose = () => {
    setOpen(false);
    navigate("/addtest");
  };
  return (
  <div>
    
    <Formik
      initialValues={{
        pickedOne: '',
        pickedTwo: '',
        pickedThree: '',
        pickedFour: '',
        pickedFive: '',
        currentusername: JSON.parse(auth).data.username,
      }}
      onSubmit={async (values, { resetForm }) => {
        await addTest(values);
        setOpen(true);
        resetForm({ values: "" });
      }}
    >
      
        <Form >
        <CardWrapper>
          <Card variant='outline'>
          <h1 style={{textAlign: 'center'}}>Test</h1>
          <Divider />
           <Box p={7}>
          <div id="my-radio-group">
            <h5>Question no. 1 - What do you understand by HTML?</h5>
            </div>
           <div role="group" aria-labelledby="my-radio-group">
             <AnswerField>
            <Field type="radio" name="pickedOne" value="One" required />HTML describes the structure of a webpage
            </AnswerField>
             <AnswerField>
             <Field type="radio" name="pickedOne" value="Two" />HTML is the standard markup language mainly used to create web pages
            </AnswerField>
             <AnswerField>
             <Field type="radio" name="pickedOne" value="Three" />HTML consists of a set of elements that helps the browser how to view the content
            </AnswerField>
             <AnswerField>
             <Field type="radio" name="pickedOne" value="Four" />All of the above
             </AnswerField>
           </div>

           <div id="my-radio-group">
            <h5>Question no. 2 - Who is the father of HTML?</h5>
            </div>
          <div role="group" aria-labelledby="my-radio-group">
            <AnswerField>
            <Field type="radio" name="pickedTwo" value="One" required />Rasmus Lerdorf
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedTwo" value="Two" />Tim Berners-Lee
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedTwo" value="Three" />Brendan Eich
            </AnswerField>
            <AnswerField>
           <Field type="radio" name="pickedTwo" value="Four" />Sergey Brin
            </AnswerField>
          </div>

          <div id="my-radio-group">
            <h5>Question no. 3 - HTML stands for ___</h5>
            </div>
          <div role="group" aria-labelledby="my-radio-group">
            <AnswerField>
            <Field type="radio" name="pickedThree" value="One" required />HyperText Markup Language
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedThree" value="Two" />HyperText Machine Language
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedThree" value="Three" />HyperText Marking Language
            </AnswerField>
            <AnswerField>
           <Field type="radio" name="pickedThree" value="Four" />HighText Marking Language
            </AnswerField>
          </div>

          <div id="my-radio-group">
            <h5>Question no. 4 - Which is used to read an HTML page and render it?</h5>
            </div>
          <div role="group" aria-labelledby="my-radio-group">
            <AnswerField>
            <Field type="radio" name="pickedFour" value="One" required />Web server
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedFour" value="Two" />Web network
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedFour" value="Three" />Web browser
            </AnswerField>
            <AnswerField>
            <Field type="radio" name="pickedFour" value="Four" />Web matrix
            </AnswerField>
          </div>

          <div id="my-radio-group">
            <h5>Question no. 5 - Inside which HTML element do we put the JavaScript?</h5>
            </div>
          <div role="group" aria-labelledby="my-radio-group">
            <AnswerField>
            <pre><Field type="radio" name="pickedFive" value="One" required />{`<javascript>`}</pre>
            </AnswerField>
            <AnswerField>
            <pre><Field type="radio" name="pickedFive" value="Two" />{`<script>`}</pre>
            </AnswerField>
            <AnswerField>
            <pre><Field type="radio" name="pickedFive" value="Three" />{`<js>`}</pre>
            </AnswerField>
            <AnswerField>
            <pre><Field type="radio" name="pickedFive" value="Four" />{`<scripting>`}</pre>
            </AnswerField>
            
          </div>


             <Button variant="contained" type="submit">Submit</Button>
          </Box>
          </Card>
          </CardWrapper>
        </Form>
    </Formik>
    <Dialog
            style={{ textAlign: "center" }}
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
              <CheckCircleIcon
                style={{ fontSize: 60, color: "var(--green-500)" }}
              />
              <h3>Congratulation</h3>
              <h4>You are succesfully completed your test</h4>
              <h5>Your Result will send on your email {JSON.parse(auth).data.email}</h5>
            </DialogContent>
            <DialogActions>
              <Button
                style={{ display: "flex", alignItems: "center" }}
                autoFocus
                onClick={handleClose}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
  </div>
)};

export default Test;