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
    "id":12
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
    "items":[
      "xiaomi note9s+",
      "smart watch",
      "oculus vr headset"
    ]
  },
  
  "shipping":{
    "town":"sample town",
    "city":"sample city",
    "region":"sample region"
  },

  "customer_info":{
    "id":13
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

// selecting items from objects                                       
orders[0].order_info.price += orders[0].order_info.price * 0.18;    
orders[1].order_info.price += orders[1].order_info.price * 0.18;    

let output = orders[0].order_info.items;
// 

console.log(output);
console.log(typeof(output));
