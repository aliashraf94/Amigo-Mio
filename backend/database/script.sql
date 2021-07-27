drop table if exists languages;


CREATE TABLE languages (
  id       SERIAL PRIMARY KEY,
  code     VARCHAR(3),
  eng_name     VARCHAR(30)
);

CREATE TABLE pages (
  id       SERIAL PRIMARY KEY,
  lang_id     INT REFERENCES languages(id)
  page     TEXT
);




