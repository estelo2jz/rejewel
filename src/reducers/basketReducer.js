import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, REMOVE_PRODUCT_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    // Grillz State
    S505: {
      name: "S505 INVISIBLE SET EMERALD",
      price: 4000.00,
      numbers: 0,
      inCart: false,
    },
    S161506: {
      name: "S161506-3A SKY BLUE",
      price: 24000.00,
      numbers: 0,
      inCart: false
    },
    JDG73: {
      name: "JDG73-ICE SKATE 8 PIECE",
      price: 5262.00,
      numbers: 0,
      inCart: false
    },
    JDG65: {
      name: "JDG65-BLUE MAGIC 4 ROW",
      price: 11200.00,
      numbers: 0,
      inCart: false
    },
    S161507: {
      name: "S161506-1B INVISIBLE",
      price: 6400.00,
      numbers: 0,
      inCart: false
    },
    S2530032: {
      name: "S2530032-A 16 GOLD TEETH",
      price: 6000.00,
      numbers: 0,
      inCart: false
    },
    S105B: {
      name: "S105B 6 PIECE INVISIBLE",
      price: 6050.00,
      numbers: 0,
      inCart: false
    },
    C1532: {
      name: "C1532-1 16 TEETH PRONG",
      price: 4000.00,
      numbers: 0,
      inCart: false
    },
    JDG69: {
      name: "JDG69-4TH 14K PRINCESS CUT",
      price: 2742.00,
      numbers: 0,
      inCart: false
    },
    JDG36: {
      name: "JDG36",
      price: 5600.00,
      numbers: 0,
      inCart: false
    },

    JDG32: {
      name: "JDG32",
      price: 7800.00,
      numbers: 0,
      inCart: false
    },
    JD103: {
      name: "JD103",
      price: 8800.00,
      numbers: 0,
      inCart: false
    },
    JD102: {
      name: "JD102",
      price: 7800.00,
      numbers: 0,
      inCart: false
    },
    JD101: {
      name: "JD101",
      price: 9800.00,
      numbers: 0,
      inCart: false
    },

    // Chainz State
    JDN090517: {
      name: "JDN090517 - DIAMOND STAR CHAIN",
      price: 9128.00,
      numbers: 0,
      inCart: false
    },
    JDN1611291: {
      name: "JDN1611291 - DIAMOND CHAIN",
      price: 12580.00,
      numbers: 0,
      inCart: false
    },
    JDN170119: {
      name: "JDN170119 - DIAMOND CHAIN",
      price: 15027.00,
      numbers: 0,
      inCart: false
    },
    JDN1701148: {
      name: "JDN1701148 - BLACK DIAMOND CHAIN",
      price: 9600.00,
      numbers: 0,
      inCart: false
    },
    JDN40407: {
      name: "JDN40407 - DIAMOND CHAIN",
      price: 4475.00,
      numbers: 0,
      inCart: false
    },
    JDN6897: {
      name: "JDN6897 - BLUE DIAMOND CHAIN",
      price: 14220.00,
      numbers: 0,
      inCart: false
    },
    JDN8721: {
      name: "JDN8721 - DIAMOND CHAIN",
      price: 15725.00,
      numbers: 0,
      inCart: false
    },
    JDN9505: {
      name: "JDN9505 - BLUE DIAMOND CHAIN",
      price: 12920.00,
      numbers: 0,
      inCart: false
    },
    JDN40206: {
      name: "JDN40206 - DIAMOND CHAIN",
      price: 8940.00,
      numbers: 0,
      inCart: false
    },
    N15116: {
      name: "N15116 - DIAMOND CHAIN",
      price: 4750.00,
      numbers: 0,
      inCart: false
    },
    N170530: {
      name: "N170530 - LADY DIAMOND CHAIN",
      price: 8544.00,
      numbers: 0,
      inCart: false
    },
    N170703: {
      name: "N170703 - DIAMOND CHAIN",
      price: 12580.00,
      numbers: 0,
      inCart: false
    },
    
    // Watchz State
    CW0001: {
      name: "CW0001 CUSTOM WATCH",
      price: 38000.00,
      numbers: 0,
      inCart: false
    },
    CW0002: {
      name: "CW0002 CUSTOM WATCH",
      price: 12000.00,
      numbers: 0,
      inCart: false
    },
    CW0003: {
      name: "CW0003 CUSTOM WATCH",
      price: 27000.00,
      numbers: 0,
      inCart: false
    },
    CW0004: {
      name: "CW0004 CUSTOM WATCH",
      price: 24000.00,
      numbers: 0,
      inCart: false
    },
    CW0005: {
      name: "CW0005 CUSTOM WATCH",
      price: 9000.00,
      numbers: 0,
      inCart: false
    },
    CW0006: {
      name: "CW0006 CUSTOM WATCH",
      price: 12000.00,
      numbers: 0,
      inCart: false
    },
    CW0007: {
      name: "CW0007 CUSTOM WATCH",
      price: 15000.00,
      numbers: 0,
      inCart: false
    },
    CW0008: {
      name: "CW0008 CUSTOM WATCH",
      price: 25000.00,
      numbers: 0,
      inCart: false
    },
    CW0009: {
      name: "CW0009 CUSTOM WATCH",
      price: 9000.00,
      numbers: 0,
      inCart: false
    },
    CW00010: {
      name: "CW00010 CUSTOM WATCH",
      price: 22990.00,
      numbers: 0,
      inCart: false
    },
    CW00011: {
      name: "CW00011 CUSTOM WATCH",
      price: 26400.00,
      numbers: 0,
      inCart: false
    },
    CW00012: {
      name: "CW00012 CUSTOM WATCH",
      price: 22900.00,
      numbers: 0,
      inCart: false
    },
    CW00013: {
      name: "CW00013 CUSTOM WATCH",
      price: 21990.00,
      numbers: 0,
      inCart: false
    },
    CW00014: {
      name: "CW00014 CUSTOM WATCH",
      price: 29990.00,
      numbers: 0,
      inCart: false
    },
    CW00015: {
      name: "CW00015 CUSTOM WATCH",
      price: 16940.00,
      numbers: 0,
      inCart: false
    },

    CW00016: {
      name: "CW00016 CUSTOM WATCH",
      price: 16940.00,
      numbers: 0,
      inCart: false
    },
    CW00017: {
      name: "CW00017 CUSTOM WATCH",
      price: 18000.00,
      numbers: 0,
      inCart: false
    },
    CW00018: {
      name: "CW00018 CUSTOM WATCH",
      price: 19000.00,
      numbers: 0,
      inCart: false
    },
    CW00019: {
      name: "CW00019 CUSTOM WATCH",
      price: 20000.00,
      numbers: 0,
      inCart: false
    },

    // Pendant State
    Nazareth: {
      name: "Jesus Of Nazareth Pendant 14k Yellow Gold",
      price: 25000.00,
      numbers: 0,
      inCart: false
    },
    Lion: {
      name: "Striped Mane Lion Pendant - 14k Yellow Gold",
      price: 20000.00,
      numbers: 0,
      inCart: false
    },
    JesusYellow: {
      name: "Jesus Piece Pendant 14k Yellow Gold",
      price: 16000.00,
      numbers: 0,
      inCart: false
    },
    JesusRose: {
      name: "Jesus Piece Pendant 14k Rose Gold",
      price: 16000.00,
      numbers: 0,
      inCart: false
    },
    JesusYellowTwo: {
      name: "Jesus Piece Lg Pendant 14k Yellow Gold",
      price: 16000.00,
      numbers: 0,
      inCart: false
    },
    Ghost: {
      name: "Ghost Pendant 14k White Gold",
      price: 15000.00,
      numbers: 0,
      inCart: false
    },
    Hamsa: {
      name: "Hamsa Pendant 14k Yellow Gold",
      price: 15000.00,
      numbers: 0,
      inCart: false
    },
    Panther: {
      name: "Full Body Black Panther Pendant 14k White Gold",
      price: 12500.00,
      numbers: 0,
      inCart: false
    },
    Hands: {
      name: "Prayer Hands Pendant 14k Yellow Gold",
      price: 12000.00,
      numbers: 0,
      inCart: false
    },
    Snowboarder: {
      name: "Snowboarder Pendant 14k White Gold",
      price: 14000.00,
      numbers: 0,
      inCart: false
    },
    Evil: {
      name: "Diamond Evil Cat Pendant - 14k White Gold",
      price: 12000.00,
      numbers: 0,
      inCart: false
    },

    Bear: {
      name: "Grizzly Bear Pendant 14k White Gold",
      price: 15000.00,
      numbers: 0,
      inCart: false
    },
    Africa: {
      name: "Africa Pendant 14k Yellow Gold",
      price: 11000.00,
      numbers: 0,
      inCart: false
    },
    Crown: {
      name: "King Crown Lion Pendant 14k White Gold",
      price: 13000.00,
      numbers: 0,
      inCart: false
    },
    Bubbly: {
      name: "Bubbly 3 Row Cross Pendant 14k Yellow Gold",
      price: 17000.00,
      numbers: 0,
      inCart: false
    },
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] }
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity
        }
      }
    case GET_NUMBERS_BASKET:
      return {
        ...state
      }
    case REMOVE_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers - 1
      }
    default: 
      return state;
  }
}