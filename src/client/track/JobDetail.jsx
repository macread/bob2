import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { closeJobDetail } from '../../dux/reducer'
import { connect } from 'react-redux';


class FormDialog extends React.Component {

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openJobDetail}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Job Application</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>id: {this.props.card.id}</p>
              <p>title: {this.props.card.title}</p>
              <p>description: {this.props.card.description}</p>
              <p>label: {this.props.card.label}</p>
              <p>metadata: {JSON.stringify(this.props.metadata)}</p>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeJobDetail} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.closeJobDetail} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        openJobDetail: state.openJobDetail,
        card: state.card
    }
}

export default (connect(mapStateToProps, { closeJobDetail })(FormDialog));