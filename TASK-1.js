data=[{
    id:101,
    name:"hari",
    active:false,
    department:["d1","d2"],
    address:{
        permanent:"a1",
        temporary:"b1"
    }
},
{
    id:102,
    name:"harold",
    active:false,
    department:["d1","d2"],
    address:{
        permanent:"a1",
        temporary:"b1"
    }
},
{
    id:103,
    name:"george",
    active:false,
    department:["d1","d2"],
    address:{
        permanent:"a1",
        temporary:"b1"
    }
}
]
for (const obj of data) {
    console.log('Object:');
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${obj[key]}, Type: ${typeof obj[key]}`);
      }
    }
  }
  
  // Using forEach method
  data.forEach((obj) => {
    console.log('Object:');
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${obj[key]}, Type: ${typeof obj[key]}`);
      }
    }
  });
