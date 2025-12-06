use('warehouse');

db.Products.drop()
db.Inventory.drop()
db.Orders.drop()

db.Products.insertMany([
    { _id: 1, product_name: "Laptop", category: "Elektronik", price: 999.99 },
    { _id: 2, product_name: "Meja Kursi", category: "Perabot", price: 199.99 },
    { _id: 3, product_name: "Printer", category: 'Elektronik', price: 299.99 },
    { _id: 4, product_name: "Rak Buku", category: "Perabot", price: 149.99 }
]);

db.Inventory.insertMany([
    { _id: 1, product_id: 1, quantity: 50, location: "Gudang A" },
    { _id: 2, product_id: 2, quantity: 30, location: "Gudang B" },
    { _id: 3, product_id: 3, quantity: 20, location: "Gudang A" },
    { _id: 4, product_id: 4, quantity: 40, location: "Gudang B" }
]);

db.Products.updateOne(
    { _id: 1 },
    { $set: { price: 1099.99 } }
);

db.Orders.insertMany([
    {
        _id: 1,
        customer_id: 101,
        order_date: ISODate("2024-08-12"),
        order_details: [
            { product_id: 1, quantity: 2 },
            { product_id: 3, quantity: 1 }
        ]
    },
    {
        _id: 2,
        customer_id: 102,
        order_date: ISODate("2024-08-13"),
        order_details: [
            { product_id: 2, quantity: 1 },
            { product_id: 4, quantity: 2 }
        ]
    }
]);

print("MongoDB Warehouse Seed Completed!");