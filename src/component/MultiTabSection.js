import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Card, Chip, Divider, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThiredTab from './ThiredTab';
import FourthTab from './FourthTab';

export default function BasicButtons() {
   const [activeTab, setActiveTab] = React.useState("tab1");

    const handleTab1 = () => {
      setActiveTab("tab1");
    };
    const handleTab2 = () => {
      setActiveTab("tab2");
    };
    const handleTab3 = () => {
      setActiveTab("tab3");
    };
    const handleTab4 = () => {
      setActiveTab("tab4");
    };
    

    const tab_container=(tab)=>{
       switch (tab){
         case 'tab1':
            return ( <FirstTab/>);
          case 'tab2':
            return ( <SecondTab/>);
          case 'tab3':
            return ( <ThiredTab/>);
          case 'tab4':
            return ( <FourthTab />);

          default:
            return (<FirstTab/>);
       }
    }
  return (

<>
<div className='mt-5 mx-auto'>
<div class="divider mb-5"><span class="mt-2" style={{fontWeight:"400",fontSize:"30px",color:"#644F9C"}}>Divider Title</span></div>
<Stack     direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2} >

<Button onClick={handleTab1} className={activeTab === "tab1" ? "tabs-button-active" : "tabs-button"} sx={ { borderRadius: 10 } } >Pop Under</Button>
      <Button onClick={handleTab2} className={activeTab === "tab2" ? "tabs-button-active" : "tabs-button"} sx={ { borderRadius: 10 } } >Banner Ads</Button>
      <Button onClick={handleTab3} className={activeTab === "tab3" ? "tabs-button-active" : "tabs-button"} sx={ { borderRadius: 10 } } >Native</Button>
      <Button onClick={handleTab4} className={activeTab === "tab4" ? "tabs-button-active" : "tabs-button"} sx={ { borderRadius: 10 } } >Skim</Button>


    </Stack>
</div>
<div>
<Container className='mt-5'>

{tab_container(activeTab)}

</Container>

</div>
</>
  );
}

