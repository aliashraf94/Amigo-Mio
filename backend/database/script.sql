drop table if exists users;
drop table if exists pages;
drop table if exists languages;


CREATE TABLE users (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(120),
  email     VARCHAR(120),
  password VARCHAR(120),
  is_admin boolean default false
);

CREATE TABLE languages (
  id       SERIAL PRIMARY KEY,
  code     VARCHAR(3),
  eng_name     VARCHAR(30)
);

CREATE TABLE pages (
  id       SERIAL PRIMARY KEY,
  lang_id     INT REFERENCES languages(id),
  page     TEXT
);

INSERT INTO users (name, email, password, is_admin) VALUES ('Artur Goolgle', 'nikitinarthur@gmail.com', 'some_password_token', true);
INSERT INTO users (name, email, password, is_admin) VALUES ('Artur Yandex', 'nikitinarthur@yandex.com', 'some_password_token', false);




