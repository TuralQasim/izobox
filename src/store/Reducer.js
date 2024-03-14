const initalState = {
  loading: false,
  mainPrice: "150.000",
  additionalArr: [],
  infoImage: false,
  infoImageActive: 0,
  infoTitle: 1,
  boxType: "Basic",
  colorModal: false,
  window: true,
  front: 4,
  back: 3,
  bigImg: false,
  bigImgSrc: "./custom1.webp",
  success: false,
  time: "",
  orderNumber: "",
};

export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "INCPRICE":
      return {
        ...state,
        mainPrice: Number(state.mainPrice) + Number(action.payload),
      };
    case "DECPRICE":
      return { ...state, mainPrice: +state.mainPrice - +action.payload };
    case "PRICE":
      return { ...state, mainPrice: action.payload };
    case "WINDOW":
      return { ...state, window: action.payload };
    case "TIME":
      return { ...state, time: action.payload };
    case "SUCCESS":
      return { ...state, success: action.payload };
    case "ORDERNUMBER":
      return { ...state, orderNumber: action.payload };
    case "BIGIMGSRC":
      return { ...state, bigImgSrc: action.payload };
    case "BIGIMG":
      return { ...state, bigImg: action.payload };
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
    case "RESETADDITIONAL":
      return {
        ...state,
        additionalArr: action.payload,
      };
    default:
      return state;
  }
}
