import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, course:{ } };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleChange = (event) => {
      this.setState({course:{course_id: event.target.value}});
    }

  // Save course and close modal form
    handleAdd = () => {
       this.props.addCourse(this.state.course);
       this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" id="addstudentbtn" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
            Add New Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add New Student</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Student Name" name="Student Name" onChange={this.handleChange}  /> 
                </DialogContent>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Email" name="Email" onChange={this.handleChange}  /> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button color="primary" id="addstudentsubmit" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
AddStudent.propTypes = {
  AddStudent : PropTypes.func.isRequired
}

export default AddStudent;
