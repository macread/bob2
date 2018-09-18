import React, {Component} from 'react';
import Board from 'react-trello';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JobDetail from './JobDetail';

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

const data = {
  lanes: [
    {
      id: 'maybe',
      title: 'Maybe',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'DevMountain', description: 'Primary Developer', label: 'A'},
        {id: 'Card2', title: 'Berkadia', description: 'MERN Stack Developer', label: 'A'}
      ]
    },
    {
      id: 'applied',
      title: 'Applied',
      label: '0/0',
      cards: []
    },
    {
      id: 'phone',
      title: 'Phone',
      label: '0/0',
      cards: []
    },
    {
      id: 'challenge',
      title: 'Code Challenge',
      label: '0/0',
      cards: []
    },
    {
      id: 'onsite',
      title: 'On Site',
      label: '0/0',
      cards: []
    },
    {
      id: 'offers',
      title: 'Offers',
      label: '0/0',
      cards: []
    },
    {
      id: 'rejected',
      title: 'Rejected',
      label: '0/0',
      cards: []
    }
  ]
}


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

  handleCardClick(cardId, metadata, laneId){
    // this.setState({ openJobDetail: true })
    alert(`Card: ${cardId} was clicked on lane: ${laneId}`)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className='Track'>
        <Button variant="contained" color="primary" className={classes.button}>
          New Track
        </Button>
        <Board data={data} 
          draggable
          editable
          onCardAdd={this.handleNewCard}
          onCardClick={this.handleCardClick}
        />
        <JobDetail open={this.state.openJobDetail} />
      </div>
    )
  }
}


  Track.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Track);
