import { FETCH_HOTELS_SUCCESS, FETCH_HOTELS, FETCH_HOTELS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  info:{
    data:{},
  },
  list:{
    loading: false,
    error: false,
    data:[],
    filters:{

    },
    paginator:{
      current:0,
      total: 0,
    }
  }

};

const ListingPageReducer=(state = initialState, action)=> {
  switch (action.type) {
    case FETCH_HOTELS: {
      console.log(action)
      const newState = {
        ...state,
        list:{
          ...state.list,
          loading: true,
          error: false,
          filters:action.filters,
          paginator:action.paginator
        }

      };

      return newState;
    }
    case FETCH_HOTELS_SUCCESS: {
      console.log(action)
      const newState = {
        ...state,
        info:{...state.info, ...action.hotels.info},
        list:{
          ...state.list,
          loading: false,
          data: action.hotels.listings.data,
          paginator:{
            ...state.list.paginator,
            total: action.hotels.listings.totalPages
          }
        }
      };
      return newState;
    }

    case FETCH_HOTELS_ERROR: {
      return { ...state,
        list:{
        ...state.list,
        error: action.error,
         loading: false,
         paginator:{
           current: state.current-1,
           total: state.total
         }

        } };
    }
    default:
      return state;
  }
}

export default ListingPageReducer;
