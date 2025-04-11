db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE || "auction_db");

db.createCollection("users");
db.createCollection("auctions");
db.createCollection("bids");

db.auctions.createIndex({ status: 1, category: 1 });
db.auctions.createIndex({ product_name: "text" });

db.bids.createIndex({ auction_id: 1, amount: -1 });

db.users.insertMany([
  {
    _id: "4c30ae95-53a3-4087-90bf-2087d07c8e35",
    name: "Admin",
  },
  {
    _id: "b786839b-bb6c-4ded-8d22-4b877b7ce196",
    name: "User",
  },
]);
