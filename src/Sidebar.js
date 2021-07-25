import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import HelpIcon from '@material-ui/icons/Help';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';



import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }));
  


function Sidebar() {
    const classes = useStyles();
    return (

        

        <div className="sideBar">

          <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Home</h1>} aria-label="add" placement="right">
          <IconButton aria-label="home">
                <SidebarRow selected Icon={HomeIcon} />
            </IconButton>
         </Tooltip>

         <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Help</h1>} aria-label="add" placement="right">
         <IconButton aria-label="help">
                <SidebarRow Icon={HelpIcon} />
            
            </IconButton>
         </Tooltip>

         <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Projects</h1>} aria-label="add" placement="right">
         <IconButton aria-label="projects">
                 <SidebarRow Icon={AccountTreeIcon}/>
            </IconButton>
         </Tooltip>

         <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Help</h1>} aria-label="add" placement="right">
         <IconButton aria-label="help">
                <SidebarRow Icon={InfoIcon} />
            </IconButton>
         </Tooltip>

         <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Inbox</h1>} aria-label="add" placement="right">
         <IconButton aria-label="Inbox">
                <SidebarRow Icon={InboxIcon} />
            </IconButton>
         </Tooltip>

         <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Mail</h1>} aria-label="add" placement="right">
         <IconButton aria-label="mail">
                <SidebarRow Icon={MailIcon} />  
            </IconButton>
         </Tooltip>

         <Tooltip title={<h1 style={{ fontSize: "1.7em",fontWeight:"bold" }}>Trash</h1>} aria-label="add" placement="right">
         <IconButton aria-label="trash">
                 <SidebarRow Icon={InboxIcon} />
           </IconButton>
         </Tooltip>


        
        
        
        
        
        

         
    </div>
    )
}

export default Sidebar
