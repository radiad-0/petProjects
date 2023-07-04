CREATE TABLE telegram_subscribers (
    id SERIAL PRIMARY KEY,
    nick TEXT,
    chat_id TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    password TEXT,
    phone TEXT NOT NULL,
    email TEXT,
    telegram TEXT,
    birthdate DATE,
    gender TEXT
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

CREATE TABLE sizes (
    id SERIAL PRIMARY KEY,
    size TEXT NOT NULL
);

CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    color TEXT NOT NULL
);

CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    region TEXT NOT NULL
);

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    city TEXT NOT NULL,
    region_id INTEGER REFERENCES regions(id)
);

CREATE TABLE delivery_addresses (
    id SERIAL PRIMARY KEY,
    city_id INTEGER REFERENCES cities(id),
    cdek_address TEXT NOT NULL
);

CREATE TABLE statuses (
    id SERIAL PRIMARY KEY,
    status TEXT NOT NULL
);

CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    status_id INTEGER REFERENCES statuses(id)
);

CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    track TEXT NOT NULL,
    flight_id INTEGER REFERENCES flights(id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    size_id INTEGER REFERENCES sizes(id),
    color_id INTEGER REFERENCES colors(id),
    delivery_address_id INTEGER REFERENCES delivery_addresses(id),
    track_id INTEGER UNIQUE REFERENCES tracks(id),
    insurance_price NUMERIC(10,2),
    total_price NUMERIC(10,2) NOT NULL,
    status TEXT
);