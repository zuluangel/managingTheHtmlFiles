const jsonData = [
        {
          "id_no_hab": "1",
          "edad": "14",
          "porcentaje": "5.5168"
        },
        {
          "id_no_hab": "2",
          "edad": "15",
          "porcentaje": "5.5168"
        },
        {
          "id_no_hab": "3",
          "edad": "16",
          "porcentaje": "5.5168"
        }
]
;

for (const obj of jsonData) {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
            obj[prop] = +obj[prop]; // Convert to a number
        }
    }
}

console.log(JSON.stringify(jsonData, null, 2));
