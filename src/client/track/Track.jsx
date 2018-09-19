import React, {Component} from 'react';
import Board from 'react-trello';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobDetail from './JobDetail';

import { openJobDetail } from '../../dux/reducer'
import { connect } from 'react-redux';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class Track extends Component {

  constructor() {
    super()
    
    this.state = {
      openJobDetail: false,
    }
  }

  handleNewCard(card, laneId){
    alert(`Card: ${card} was added to lane: ${laneId}`)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className='Track'>
        <Button variant="contained" color="primary" className={classes.button}>
          New Track
        </Button>
        <Board data={this.props.data} 
          draggable
          editable
          onCardAdd={this.handleNewCard}
          onCardClick={(cardId, metadata, laneId) => this.props.openJobDetail(cardId, metadata, laneId)}
        />
        <JobDetail />
      </div>
    )
  }
}


  Track.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  function mapStateToProps(state){
    return{
        data: state.data
    }
}

export default withStyles(styles)(connect(mapStateToProps, { openJobDetail })(Track));
