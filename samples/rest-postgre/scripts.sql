CREATE DATABASE shop_db;

\c shop_db

CREATE TABLE shops (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255)
);

CREATE TABLE shop_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL,
    shop_id INTEGER REFERENCES shops(id) ON DELETE CASCADE
);
