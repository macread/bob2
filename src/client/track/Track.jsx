import React, {Component} from 'react';
import Board from 'react-trello';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'applied',
      title: 'Applied',
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

function handleNewCard(card, laneId){
  alert(`Card: ${card} was added to lane: ${laneId}`)
}

class Track extends Component {
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
            onCardAdd={handleNewCard}
            onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
          />
        </div>
      )
    }
  }


  Track.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Track);
