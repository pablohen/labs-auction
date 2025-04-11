# Labs Auction

### Running the server:

1. Clone the repository:

```zsh
git clone https://github.com/pablohen/labs-auction.git
```

2. Create the containers:

```zsh
docker compose up --build
```

### Testing the api:

You can use the `api.http` file in the root of the project as a basis to test the api. It contains the main endpoints. Change the `auction_id` and `user_id` as needed. You can also use Postman, Insomnia or any other tool to test the api.
