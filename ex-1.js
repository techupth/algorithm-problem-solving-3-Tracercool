function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      console.log(i, j);
      if (customers[j] > customers[j + 1]) {
        let arrangeCustomers = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = arrangeCustomers;
      }
    }
  }
  return customers;
}

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า
// เนื่องจากใช้ loop ซ้อนกัน 2 loop