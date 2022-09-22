const INITIAL_STATE = {
    id: '',
    brand: '',
    model: '',
    price: 0,
    photo: '',
    total: 0
  };
  
  const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
    case 'ADD_PRODUCT':
      return ({  
        total: [...state.total, action.value],
        id: [...state.id, action.value],
        brand: [...state.brand, action.value],
        model: [...state.model, action.value],
        price: [...state.price, action.value],
        photo: [...state.photo, action.value],
     });
  
    case 'DELETE_PRODUCT':
      return ({
        ...state,
        total: state.total.filter((total) => total.id !== action.value),
        id: state.id.filter((id) => id.id !== action.value),
        brand: state.brand.filter((brand) => brand.id !== action.value),
        model: state.model.filter((model) => model.id !== action.value),
        price: state.price.filter((price) => price.id !== action.value),
        photo: state.photo.filter((photo) => photo.id !== action.value),
      });
  
    default: return state;
    }
  };
  
  export default cart;
  