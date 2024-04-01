    var product = {
        Name: "Samsung TV",
        Mfd: new Date("2023-04-20 18:30:21.64")
    }
    product.Mfd.setMonth(2);
    product.Mfd.setDate(24);
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Staturday"];
    var months = ["January", "Feb", "March","April","May","June","July","August"];
    document.write(`
       Manufactured Year:  ${product.Mfd.getFullYear()} <br>
       Manufactured Month: ${months[product.Mfd.getMonth()]} <br>
       Manufactured Weekday: ${weekdays[product.Mfd.getDay()]} <br>
       Manufactured Date : ${product.Mfd.getDate()}
    `);
