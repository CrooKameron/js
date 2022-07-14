let order1 = {
  "order_info":{
    "id":101,
    "date":"30.12.2022",
    "payout":"credit card",
    "items":[
      {
        "item_id":"723",
        "item_name":"xiaomi note9s+",
        "item_link":"https://www.sample.com/item-xiaominote9s+",
        "item_price":6300
      },
      {
        "item_id":"724",
        "item_name":"apple watch series7",
        "item_link":"https://www.sample.com/item-applewatchseries7",
        "item_price":2750
      },
      {
        "item_id":"725",
        "item_name":"oculus headset",
        "item_link":"https://www.sample.com/item-oculusheadset",
        "item_price":9420
      }
    ]
    
  },
  
  "shipping":{
    "town":"sample town",
    "city":"sample city",
    "region":"sample region"
  },

  "customer_info":{
    "id":12,
    "namesurname":"joe mama",
    "mail":"themagickitten@gmail.com"
  },

  "seller_info":{
    "id":34,
    "seller_name":"Apple france",
    "seller_adress":{
      "country":"turkey",
      "city":"izmir",
      "district":"karşıyaka",
      "street":"9422"
    }
  }

  
}

let order2 = {
  "order_info":{
    "id":102,
    "date":"30.12.2018",
    "payout":"cash",
    "items":[
      {
        "item_id":"723",
        "item_name":"xiaomi note6s pro",
        "item_link":"https://www.sample.com/item-xiaominote96spro",
        "item_price":4300
      },
      {
        "item_id":"724",
        "item_name":"xiaomi smart band2",
        "item_link":"https://www.sample.com/item-xiaomismartband2",
        "item_price":4500
      },
      {
        "item_id":"725",
        "item_name":"google virutal reality glasses",
        "item_link":"https://www.sample.com/item-googlevirutalrealityglasses",
        "item_price":1725
      }
    ]
  },
  
  "shipping":{
    "town":"sample town",
    "city":"sample city",
    "region":"sample region"
  },

  "customer_info":{
    "id":825,
    "namesurname":"mkatat",
    "mail":"examplemail@tutamail.com"
  },

  "seller_info":{
    "id":35,
    "seller_name":"Huawei",
    "seller_adress":{
      "country":"turkey",
      "city":"izmir",
      "district":"karşıyaka",
      "street":"9422"
    }
  }
  
}

let orders = [
  order1,
  order2
];

let money_unit = "$";


console.log("order id:"+ orders[0].order_info.id);
console.log("order date:"+ orders[0].order_info.date);
console.log("payment type:"+ orders[0].order_info.payout);
console.log("total items ordered: "+ orders[0].order_info.items.length);



//// shopping card overwiew 
console.log("")
console.log("")
console.log("Shopping Cart")
console.log("")
for (let i = 0; i < orders[0].order_info.items.length; i++) {
  console.log("* item "+(i+1));
  console.log("product name: "+orders[0].order_info.items[i].item_name );
  console.log("product price: "+orders[0].order_info.items[i].item_price );
  console.log("product link: "+orders[0].order_info.items[i].item_link );
  console.log("product id: "+orders[0].order_info.items[i].item_id );
  console.log("");
}
console.log("");
//




// total price
let totalprice = 0;
for (let j = 0; j < orders[0].order_info.items.length; j++) {
  totalprice += orders[0].order_info.items[j].item_price
}
totalprice += (totalprice * 18 / 100) // taxes :D (18%)
totalprice = totalprice.toFixed(2); // making the money 2 digits after the dot
console.log("Total Price: "+totalprice+money_unit) 
//

console.log("");
console.log("");
console.log("");

// shipping information
console.log("Shipping Information");
console.log("town: "+ orders[0].shipping.town);
console.log("city: "+ orders[0].shipping.city);
console.log("region: "+ orders[0].shipping.region);
//

console.log("");
console.log("");


// customer information
console.log("Customer Information");
console.log("name & surname: "+ orders[0].customer_info.namesurname);
console.log("mail adress: "+ orders[0].customer_info.mail);
console.log("Id: "+ orders[0].customer_info.id);
//


console.log("");
console.log("");


// seller information
console.log("Seller Information");
console.log("seller: "+ orders[0].seller_info.id);
console.log("seller: "+ orders[0].seller_info.seller_name);
console.log("");
console.log("Seller Adress");
console.log("country: "+ orders[0].seller_info.seller_adress.country);
console.log("city: "+ orders[0].seller_info.seller_adress.city);
console.log("district: "+ orders[0].seller_info.seller_adress.district);
console.log("street: "+ orders[0].seller_info.seller_adress.street);
//