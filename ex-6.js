const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (carCollection.indexOf(carBrand) === -1) {
    return `New car collection is: ${carCollection},${carBrand} `
  } if (carCollection.indexOf(carBrand) !== -1) {
    return `${carBrand} already exists in position ${carCollection.indexOf(carBrand)+1} of the car collection.`
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi"));
//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota"));