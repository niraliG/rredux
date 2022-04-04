const counter = (state = 1, action) => {
  switch(action.type) {
    case "incr":
      return state + 1;
    case "decr" :
      return state -1 ;
    case "reset" :
      return (state = 0);
    default :
      return state;
  }
};

export default counter