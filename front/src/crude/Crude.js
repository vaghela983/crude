import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddBoxSharp';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer'   ;
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar'
import Moment from 'moment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';




export default class Crude extends React.Component{
    constructor()
    {
        super()
        this.state={
          data:[],
          dataCat:[],
          AddPK:false,
          EditPK:false,
          file:null,
          UpdateFile:null,
          ViewPK:false,
          addtr:false,
          Eror:false,
          qtyError:false,
          priceError:false,
          disError :false,
          flError:false
        }
    }
    componentDidMount()
   {
       fetch('http://localhost:5000/ViewProduct')
       .then(res=>res.json())
       .then(res=>this.setState({data:res}))

       fetch('http://localhost:5000/ViewCategory')
       .then(res=>res.json())
       .then(res=>this.setState({dataCat:res}))

   }
  
  componentWillUpdate()
  {
    fetch('http://localhost:5000/ViewProduct')
    .then(res=>res.json())
    .then(res=>this.setState({data:res}))
  }   
  addProduct=()=>
{
    var productData=new FormData()
    var name=document.getElementById('name').value
    var Quentity=document.getElementById('Quentity').value
    var Price=document.getElementById('Price').value
    var Discount=document.getElementById('Discount').value
    
  if(name==='') 
  {
      this.setState({errorMsgName:'Plese Fill The Blank Field'})
      this.setState({Eror:true})
  }
  else if(Quentity==='')
  {
         this.setState({errorMsgQty:'Plese Fill The Blank Field'})
         this.setState({qtyError:true})
  }
   
    else if(Price==='')
  {
      this.setState({errorMsgPrice:'Plese Fill The Blank Field'})
      this.setState({priceError:true})
  }
  else if(Discount==='')
  {
      this.setState({errorMsgDis:'Plese Fill The Blank Field'})
      this.setState({disError:true})
  }
  
  else
  {

  
        
        productData.append('file',this.state.file)
        productData.append('name',name)
        productData.append('Qty',Quentity)
        productData.append('Category',this.state.Category)
        productData.append('Price',Price)
        productData.append('Discount',Discount)
        
       
   fetch('http://localhost:5000/AddProduct',{
       method:'POST',
       body:productData
   })
  
   this.setState({AddPK:false})
  }
   
}

updateProduct=()=>
{
        
        var data=new FormData()
        data.append('file',this.state.UpdateFile)
        data.append('id',this.state.PK_id)
        data.append('name',this.state.PK_name)
        data.append('Qty',this.state.PK_qty)
        data.append('price',this.state.PK_price)
        data.append('Discount',this.state.PK_discount)
        
        fetch('http://localhost:5000/UpdateProduct',{
            method:'POST',
            body:data
        })
        this.setState({EditPK:false})
}
deleteProduct=()=>
{
    fetch('http://localhost:5000/DeleteProduct?id='+this.state.P_id+'')
}
fileChange=(e)=>
    {
      
     this.setState({file:e.target.files[0]})
     
    }
    UpdateFileChange=(e)=>
   {
        this.setState({UpdateFile:e.target.files[0]})
   }
handleSelect=(e)=>
  {
      this.setState({Category:e.target.value})   
  }

  CategoryNavigate=()=>
  {
    this.props.history.push('/Category')
  }
    render()
    {
        return(  
        <div >
            <h1 align="center">Product Table</h1>
            <Button 
                        
                        variant="contained" 
                        color="primary" 
                  
                        onClick={()=>{this.setState({AddPK:true})}}
                       style={{  
                           marginLeft:'90%',
                           marginTop:-30
                    }}
                  
                    
                     >
                         
                      <AddIcon  className='icone'   style={{marginRight:5}}/>Add New
                    </Button>
            
                    <Button 
                        
                        variant="contained" 
                        color="primary" 
                  
                        onClick={this.CategoryNavigate}
                       style={{  
                           marginLeft:'77%',
                           marginTop:-70
                    }}
                  
                    
                     >
                         
                    Category Table
                    </Button>

        <TableContainer style={{width:'100%'}}>
        <Table >
            <TableHead style={{backgroundColor:'#283744'}} >
                <TableRow >
                   
                    <TableCell style={{color:'white'}} >No</TableCell>
                    <TableCell style={{color:'white'}}></TableCell>
                    <TableCell style={{color:'white'}}>name</TableCell>
                    <TableCell style={{color:'white'}}>Qty</TableCell>
                    <TableCell style={{color:'white'}}>Category</TableCell>
                    <TableCell style={{color:'white'}}>Price</TableCell>
                    <TableCell style={{color:'white'}}>Discount</TableCell>
                    <TableCell style={{color:'white'}}>Total</TableCell>
                    <TableCell style={{color:'white'}}>Add_on</TableCell>
                    <TableCell style={{color:'white'}}>Modified_on</TableCell>
                    <TableCell colSpan='3' style={{color:'white'}}>Action</TableCell>
                </TableRow>
                
            </TableHead>
            <TableBody style={{backgroundColor:'white'}}>
            {
             this.state.data.map((pk,index)=>
             <TableRow className="tablecell"  >
                          
             <TableCell className="tablecell" size='small'>{index+1}</TableCell>
             <TableCell ><Avatar src={pk.P_Image}/></TableCell>
             <TableCell  >{pk.P_name}</TableCell>
             <TableCell  >{pk.P_Qty}</TableCell>
             <TableCell  >{pk.Category_name}</TableCell>
             <TableCell  >{pk.P_Price}</TableCell>
             <TableCell  >{pk.P_Discount}</TableCell>
             <TableCell  >{pk.P_Total}</TableCell>
            <TableCell >{Moment(pk.Add_on).format('DD/MM/YYYY hh:mm:ssa')}</TableCell>
            <TableCell >{Moment(pk.Modified_on).format('DD/MM/YYYY hh:mm:ssa')}</TableCell>
            <TableCell ><IconButton className='icone'><EditIcon style={{color:'darkblue'}} onClick={()=>this.setState({PK_id:pk.P_id,EditPK:true,PK_name:pk.P_name,PK_qty:pk.P_Qty,PK_category:pk.Category_name,PK_image:pk.P_Image,PK_price:pk.P_Price,PK_discount:pk.P_Discount})}></EditIcon></IconButton></TableCell>
            <TableCell><IconButton className='icone' style={{marginLeft:-60}}><DeleteIcon style={{color:'red'}} onClick={()=>this.setState({P_id:pk.P_id},this.deleteProduct)} /></IconButton></TableCell>
            <TableCell><IconButton className='icone' style={{marginLeft:-60}}><VisibilityIcon style={{color:'green'}} onClick={()=>this.setState({PK1_id:pk.P_id,ViewPK:true,PK1_name:pk.P_name,PK1_qty:pk.P_Qty,PK1_category:pk.Category_name,PK1_image:pk.P_Image,PK1_price:pk.P_Price,PK1_discount:pk.P_Discount,PK1_total:pk.P_Total})}/></IconButton></TableCell>
                      
             </TableRow>
         )
     }
            </TableBody>
      
          
       </Table>
            </TableContainer>


            {/* Add Product Diloag */}
           <Dialog open={this.state.AddPK} fullWidth>
             <DialogTitle id="form-dialog-title" style={{backgroundColor:'#283744',color:'white'}}>Add Product</DialogTitle>
        <DialogContent>
     <form>
            <TextField
            error={this.state.Eror}
            id="name"
            label="Enter Product Name"
            onChange={()=>{this.setState({Eror:false,errorMsgName:false})}}
            helperText={this.state.errorMsgName}
            fullWidth
          /><br/>
          <TextField
          error={this.state.qtyError}
            margin="dense"
            id="Quentity"
            onChange={()=>{this.setState({qtyError:false,errorMsgQty:false})}}
            label="Enter Product Quentity"
            helperText={this.state.errorMsgQty}
            fullWidth
          /><br/>
          {/* <TextField
            margin="dense"
            id="Category"
            label="Enter Product Cetegory"
            type="email"
            fullWidth
          /><br/> */}
          <FormControl  fullWidth>
                        <InputLabel >Select Category</InputLabel>
                         <Select
                         labelId="Age"
                         id="Age"
                         label="Select Your State"
                         
                        style={{height:40,textAlign:'left'}}
                        onChange={this.handleSelect}
                          >
                        <MenuItem >
                        <em><b>State</b></em>
                        </MenuItem>
                        {
                        this.state.dataCat.map((dc)=>
                        <MenuItem  value={dc.Category_name} >{dc.Category_name}</MenuItem>)
                        }
                      </Select>
                      </FormControl>
          <TextField
        error={this.state.priceError}
            margin="dense"
            onChange={()=>{this.setState({priceError:false,errorMsgPrice:false})}}
            id="Price"
            label="Enter Product Price"
           helperText={this.state.errorMsgPrice}
            fullWidth
          /><br/>
          <TextField
           error={this.state.disError}
            margin="dense"
            id="Discount"
            onChange={()=>{this.setState({disError:false,errorMsgDis:false})}}
            label="Enter Product Discount"
            helperText={this.state.errorMsgDis}
            fullWidth
          /><br/>
          <TextField
           error={this.state.flError}
            margin="dense"
            id="fl"
            variant="outlined"
            helperText={this.state.errorMsgFl}
            style={{width:'15%'}}
            InputProps={{
              startAdornment:
              (<InputAdornment 
                       position="right"
                  >
                <Tooltip 
                     title="Upload Your Product Picture" 
                     aria-label="Upload Your Product Picture" 
                     placement="left" 
               arrow>
              <IconButton 
                    style={{
                            color:'black',
                            marginLeft:-11}} 
                          onClick={() => this.fileUpload.click()}>
                  <CloudUploadIcon style={{fontSize:50}}/>
              </IconButton>
           </Tooltip>
           </InputAdornment>),}} 
             
          />
           {/* File type Call by upload icon */}
             <input type="file" 
             multiple
             onChange={this.fileChange}
            
            ref={(fileUpload)=>{
                                 this.fileUpload=fileUpload }}
                              
            style={{ 
                     visibility: 'hidden'
                  }} />
  
            
          <br/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={()=>{this.setState({AddPK:false})}}style={{backgroundColor:'red',color:'white'}}>
            Cancel
          </Button>
          <Button  variant="contained" color="primary" onClick={this.addProduct}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    
 

      {/* Edit Product Diloag */}

      
      <Dialog open={this.state.EditPK} fullWidth>
             <DialogTitle id="form-dialog-title" style={{backgroundColor:'#283744',color:'white'}}>Edit Product</DialogTitle>
        <DialogContent>
          
          <TextField
           id="name"
            label="Product Name"
            type="email"
            value={this.state.PK_name}
            onChange={(e)=>{this.setState({PK_name:e.target.value})}}
            fullWidth
          /><br/>
          <TextField
            margin="dense"
            id="Quentity"
            label="Product Quentity"
            type="email"
            value={this.state.PK_qty}
            onChange={(e)=>{this.setState({PK_qty:e.target.value})}}
            fullWidth
          /><br/>
          <TextField
            margin="dense"
            id="Category"
            label="Product Cetegory"
            type="email"
            value={this.state.PK_category}
            
            fullWidth
          disabled/><br/>
          <TextField
          
            margin="dense"
            id="name"
            label="Product Price"
            type="email"
            value={this.state.PK_price}
            onChange={(e)=>{this.setState({PK_price:e.target.value})}}
            fullWidth
          /><br/>
          <TextField
            margin="dense"
            id="name"
            label="Product Discount"
            type="email"
            value={this.state.PK_discount}
            onChange={(e)=>{this.setState({PK_discount:e.target.value})}}
            fullWidth
          /><br/>
          <div>
             <Avatar style={{marginTop:22,width:55,height:51}} src={this.state.PK_image}/>
                  <TextField
                      id="mobile"
                  //placeholder="Select Profile Picture"
                      variant="outlined"
                      color="primary"
                      style={{width:90,marginLeft:70,marginTop:-53}}
                      size="large"
                      InputProps={{
                       startAdornment:
                           (<InputAdornment 
                             position="right"
                            >
                          <Tooltip 
                             title={<h3>Update Your Product Picture </h3>}
                             aria-label="Update Your Product Picture" 
                            placement="right" 
                         arrow>
                     <IconButton 
                          style={{
                                  color:'black',
                                  marginLeft:-11}} 
                                onClick={() => this.fileUpload.click()}>
                        <CloudUploadIcon style={{fontSize:60}}/>
                    </IconButton>
                 </Tooltip>
                 </InputAdornment>),}} 
                   
                />
                 
                 
                 {/* File type Call by upload icon */}
                   <input type="file" 
                     onChange={this.UpdateFileChange}
                     ref={(fileUpload)=>{
                                       this.fileUpload=fileUpload }}
                  style={{ 
                           visibility: 'hidden'
                        }} />
        </div>
             
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={()=>{this.setState({EditPK:false})}}style={{backgroundColor:'red',color:'white'}}>
            Cancel
          </Button>
          <Button  variant="contained" color="primary" onClick={this.updateProduct}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
  

  {/* View Dialog Box */}
      <Dialog open={this.state.ViewPK} fullWidth>
             <DialogTitle id="form-dialog-title" style={{backgroundColor:'#283744',color:'white'}}>View Product</DialogTitle>
        <DialogContent>
        <img src={this.state.PK1_image} style={{width:'100%'}}/> 
        <br/><br/>
        <Divider style={{backgroundColor:'Black'}}/>
        <br/>
        <table  align="center" style={{width:'100%',height:'50%'}}>
          <tr>
            <th>Product_name</th>
              <td>{this.state.PK1_name}</td>
           </tr>
           <tr>
            <th>Product_Category</th>
              <td>{this.state.PK1_category}</td>
           </tr>
           <tr>
            <th>Product_Price</th>
              <td>{this.state.PK1_price}</td>
           </tr>
           <tr>
            <th>Product_Discount</th>
              <td>{this.state.PK1_discount}</td>
           </tr>
           <tr>
            <th>Product_Total</th>
              <td>{this.state.PK1_total}</td>
           </tr>
           

        </table>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color='primary' onClick={()=>{this.setState({ViewPK:false})}}>
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
  
  

  
            </div>
        )
      
    }
}