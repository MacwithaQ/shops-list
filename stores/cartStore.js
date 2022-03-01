import { makeAutoObservable } from "mobx";

class CartStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Thiccy Chiccy",
        price: 5,
        image:
          "https://www.simplyrecipes.com/thmb/F35HzR-D4g8nl9NKk6lNevsmebY=/2000x1334/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__03__HT-Make-Roast-Chicken-LEAD-5v2-51de85b6d52a4691885f9d6680d958b1.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Chicken Yumm",
        price: 15,
        image:
          "https://iamhomesteader.com/wp-content/uploads/2020/10/buffalo-tenders.jpg",
      },
      quantity: 3,
    },
  ];
}

const cartStore = new CartStore();

export default cartStore;
