const initialState = {
    openJobDetail: false,
    card: {},
    data: {
        lanes: [
          {
            id: 'maybe',
            title: 'Maybe',
            label: '2/2',
            cards: [
              {id: 'Card1', title: 'DevMountain', description: 'Primary Developer', label: 'A'},
              {id: 'Card2', title: 'Berkadia', description: 'MERN Stack Developer', label: 'A', metadata: {sha: 'be312a1'}}
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
}

const OPEN_JOB_DETAIL = 'OPEN_JOB_DETAIL';
const CLOSE_JOB_DETAIL = 'CLOSE_JOB_DETAIL';

export default function reducer(state = initialState, action ) {

    switch (action.type){

        case OPEN_JOB_DETAIL:
            const lane = state.data.lanes.find( lanes => lanes.id === action.payload.laneId );
            const card = lane.cards.find( cards => cards.id === action.payload.cardId)
            return Object.assign({}, state, { openJobDetail: true, card: card })

        case CLOSE_JOB_DETAIL:
            return Object.assign({}, state, {openJobDetail: false})

        default:
            return state;
    }

}


export function openJobDetail(cardId, metadata, laneId){
    return {
        type: OPEN_JOB_DETAIL,
        payload: {cardId, metadata, laneId}
    }
}

export function closeJobDetail(){
    return {
        type: CLOSE_JOB_DETAIL
    }
}
