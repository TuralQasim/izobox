const initalState = {
  loading: false,
  mainPrice: 150.0,
  additionalArr: [],
  infoImage: false,
  infoImageActive: 0,
  infoTitle: 1,
  boxType: "Basic",
  colorModal: false,
  window: true,
  front: 1,
  back: 1,
  steps: 2,
};
export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "INCPRICE":
      return { ...state, mainPrice: state.mainPrice + action.payload };
    case "DECPRICE":
      return { ...state, mainPrice: state.mainPrice - action.payload };
    case "WINDOW":
      return { ...state, window: action.payload };
    case "BOXTYPE":
      return { ...state, boxType: action.payload };
    case "STEPS":
      return { ...state, steps: action.payload };
    case "FRONT":
      return { ...state, front: action.payload };
    case "BACK":
      return { ...state, back: action.payload };
    case "INFOIMAGE":
      return { ...state, infoImage: action.payload };
    case "INFOIMAGEACTIVE":
      return { ...state, infoImageActive: action.payload };
    case "INFOTITLE":
      return { ...state, infoTitle: action.payload };
    case "COLORMODAL":
      return { ...state, colorModal: action.payload };
    case "INCADDITIONAL":
      return {
        ...state,
        additionalArr: [...state.additionalArr, action.payload],
      };
    case "DECADDITIONAL":
      return {
        ...state,
        additionalArr: state.additionalArr.filter((a) => a != action.payload),
      };
    default:
      return state;
  }
}
