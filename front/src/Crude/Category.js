import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer'   ;
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default class Category extends React.Component{
    constructor(props)
    {
        super()
        this.state={
            dataCat:[]
        }
    }
    componentDidMount()
    {
        
        fetch('http://localhost:5000/ViewCategory')
        .then(res=>res.json())
        .then(res=>this.setState({dataCat:res}))
 
    }
    back=()=>
    {
        this.props.history.push('/')
    }
    render()
    {
        return(
            <div>

                 <h1 align="center">Category Table</h1>
                 <IconButton onClick={this.back}>
                 <KeyboardBackspaceIcon style={{fontSize:40,color:'black'}}/>
                 </IconButton>
                 <TableContainer style={{width:'100%'}}>
        <Table >
            <TableHead style={{backgroundColor:'#283744'}} >
                <TableRow >
                   
                    <TableCell style={{color:'white'}} >No</TableCell>
                    <TableCell style={{color:'white'}}>Category name</TableCell>
                    <TableCell style={{color:'white'}}>Add_on</TableCell>
                    <TableCell style={{color:'white'}}>Modified_on</TableCell>
                   
                </TableRow>
                
            </TableHead>
            <TableBody style={{backgroundColor:'white'}}>
            {
             this.state.dataCat.map((dc,index)=>
             <TableRow className="tablecell"  >
                          
             <TableCell className="tablecell" size='small'>{index+1}</TableCell>
             <TableCell  >{dc.Category_name}</TableCell>
             <TableCell >{Moment(dc.Add_on).format('DD/MM/YYYY hh:mm:ss')}</TableCell>
            <TableCell >{Moment(dc.Modified_on).format('DD/MM/YYYY hh:mm:ss')}</TableCell>
                     
             </TableRow>
         )
     }
            </TableBody>
      
          
       </Table>
            </TableContainer>


                }
               

            </div>
        )
    }
}