DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    age integer,
    company varchar(255),
    country varchar(255),
    photo text,
    about text,
    latitude integer,
    longitude integer
);