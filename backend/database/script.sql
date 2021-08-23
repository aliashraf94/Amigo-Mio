drop table if exists comments;
drop table if exists favorites;
drop table if exists books;
--drop table if exists users;

--CREATE TABLE users (
--  id       SERIAL PRIMARY KEY,
--  name     VARCHAR(120),
--  email     VARCHAR(120),
--  password VARCHAR(120),
--  is_admin boolean default false
--);

CREATE TABLE books (
  id			SERIAL PRIMARY KEY,
  title			VARCHAR(120),
  descriptoin	TEXT,
  views			INT,
  image_url		VARCHAR(255),
  format		VARCHAR(120),
  user_id		INT REFERENCES users(id),
  approved		BOOLEAN default false,
  likes			INT,
  suggest_age	INT,
  store_url		VARCHAR(255),
  store_url_dig	VARCHAR(255)
 );

CREATE TABLE comments (
  id			SERIAL PRIMARY KEY,
  user_id		INT REFERENCES users(id),
  book_id		INT REFERENCES books(id),
  comment		TEXT
);

CREATE TABLE favorites (
  id			SERIAL PRIMARY KEY,
  user_id		INT REFERENCES users(id),
  book_id		INT REFERENCES books(id)
);

INSERT INTO users (name, email, password, is_admin) VALUES ('Admin AmigoMio', 'admin1@amigomio.org', null, true);

INSERT INTO users (name, email, password, is_admin) VALUES ('Larry Butcher', 'larry.butcher@fakeyahoo.com', null, false);
INSERT INTO users (name, email, password, is_admin) VALUES ('Thelma Harris', 'thelma.harris@fakegmail.com', null, false);
INSERT INTO users (name, email, password, is_admin) VALUES ('Terry Smith', 'terry.smith@fakemail.org', null, false);
INSERT INTO books (title, descriptoin, views,image_url, format, user_id, approved, likes, suggest_age, store_url, store_url_dig) 
VALUES ('City of Thorns: Nine Lives in the World’s Largest Refugee Camp by Ben Rawlence (2016)', 
'As the title summarizes it, the book is a collection of real stories of 9 refugees and their families in Dadaab Camp in Kenya, which was until 2017 the biggest refugee camp in the world until the Rohingya refugee crisis in Myanmar changed this fact.
The major topic tackled in the book is resettlement as one of the 3 durable solutions for refugees around the world. It is the process of transferring recognized refugees from the country where they first sought asylum to a third country (mostly in Europe) which accepts to receive them according to bilateral agreements and to integrate them in the local society, eventually granting them permanent residency and prospects of a better future.
Thus, the non-fiction work depicts the atrociously long waiting periods for refugees at Dadaab Camp, loyal to the hope of one day realizing their dreams of reaching a foreign land as a new home.
Unlike a lot of other books, City of Thorns does not merely depict refugees’ journey, everyday struggle and experiences. It actually goes beyond that to prove a different point, that refugees’ lives are not always “a journey” like it is usually believed. They are actually most of the time a constant state of limbo, a period of life where time stops and waiting becomes the core activity of one’s day, month and even years. In fact, one of my favorite quotes that actually summarizes this idea is the following:
“Caught between the ongoing war in Somalia and a world unwilling to welcome them, the refugees can only survive in the camp by imagining a life elsewhere. It is unsettling: neither the past, nor the present, nor the future is a safe place for a mind to linger for long.”
Through the book, you are immersed in the lives of different categories of people including children and families, and you are exposed to the diversity of their lives and journeys, although they are in the same place and are exposed to the same things.',
34, 'https://images-production.bookshop.org/spree/images/attachments/6232123/original/9781250118738.jpg',
'EPUB', 1, true, 12, 18,'https://www.amazon.es/City-thorns-Ben-Rawlence/dp/1250118735','https://www.ebooks.com/en-es/book/2507341');
INSERT INTO comments (user_id, book_id, comment) VALUES (2, 1, 
'[A] remarkable book...Like Dadaab itself, the story has no conclusion. It is a portrait, beautifully and movingly painted. And it is more than that. At a time when newspapers are filled with daily images of refugees arriving in boats on Europe`s shores, when politicians and governments grapple with solutions to migration and erect ever larger walls and fences, it is an important reminder that a vast majority of the world`s refugees never get as far as a boat or a border of the developed world.'
);
INSERT INTO comments (user_id, book_id, comment) VALUES (3, 1, 
'The most absorbing book in recent memory about life in a refugee camp....Mr. Rawlence`s major feat is stripping away the anonymity....He transforms its denizens from faceless victims into three-dimensional human beings. Along the way, Dadaab emerges from the ever-present heat and dust to become much more than a refugee camp.'
);
INSERT INTO comments (user_id, book_id, comment) VALUES (4, 1, 
'City of Thorns is a powerful and timely reminder of how unresolved conflicts, from Somalia to Syria, have contributed to the unprecedented global refugee crisis. Ben Rawlence`s intimate, vivid portrait of the forgotten refugees in Dadaab is a much needed effort to close the humanity gap between the West and the rest. A must-read.'
);


INSERT INTO users (name, email, password, is_admin) VALUES ('Bobby Clauson', 'bobby.clauson@fakemail.org', null, false);
INSERT INTO users (name, email, password, is_admin) VALUES ('Rogelia Corona Macías', 'rogelia.macías@fakegmail.com', null, false);
INSERT INTO users (name, email, password, is_admin) VALUES ('Stanisław Zając', 'stanislaw.zajac@fakeyahoo.com', null, false);
INSERT INTO books (title, descriptoin, views,image_url, format, user_id, approved, likes, suggest_age, store_url, store_url_dig) 
VALUES ('The New Odyssey: The Story of Europes Refugee Crisis by Patrick Kingsley (2015)', 
'Written by The Guardian’s migration correspondent Patrick Kingsley, The New Odyssey is the result of a one-year travel journey in 17 different countries around the world to record in words the diverse journeys of asylum seekers and refugees reaching Europe.
Kingsley cleverly described journeys through different migration routes and means, including sea routes in the Mediterranean, the Sahara desert, mountains… He brings into life and in accurate details the journeys we once solely heard about in the news or by chance through a social media post, and goes beyond that to explain why this happens:
“Why do we keep going by sea?’ Abu Jana asks me. ‘Because we trust god’s mercy more than the mercy of people here.” 
During these journeys, Kingsley does not only focus on refugees themselves, but also on other “protagonists” in his interviewees’ stories along the way. Among these characters, you will encounter smuggles, those who facilitate (or not) human movements from continent to another, often not in the safest or most traditional ways. You will encounter volunteers and organizations staff and will be immersed in their lives as well, in the way they perform humanitarian work and their personal dilemmas. You will also be encountered with some “antagonists” at some point too, predominantly the border guards and police force, instructed to not be as welcoming to refugees as the volunteers or other characters.
Overall, it is a powerful and highly informative work of non-fiction which gives you insight on the history and background of today’s refugee issues, immerses you into real people’s long journeys to safety and reports real and genuine information collected from real individuals.',
27, 'https://images-production.bookshop.org/spree/images/attachments/10728803/original/9781631492556.jpg',
'EPUB', 1, true, 18, 16,'https://www.amazon.es/new-Odyssey-patrick-Kingsley/dp/1783351063','https://www.ebooks.com/en-es/book/96389831');
INSERT INTO comments (user_id, book_id, comment) VALUES (5, 2, 
'[A] a deeply reported account... Kingsley gives a sympathetic and often damning portrayal of the extraordinary risks and efforts that so many refugees have taken to find a new life. He puts a human face on the hyper-politicized refugee crisis while conveying the magnitude of the crisis.
Tremendously impressive...The details are vivid, sometimes shocking, always telling; and the desperation and courage of those such as Hashem al-Souki are profoundly moving. The story of what lies behind the continuing and appalling news from the Mediterranean has rarely been told so strongly.
');
INSERT INTO comments (user_id, book_id, comment) VALUES (6, 2, 
'[An] an urgent appeal to humanity and reason...a compelling read.
Kingsley is doing the world an invaluable service by showing that migrants are particular and human, not collective and a group, and that each of them--just like us--has a story of their own.
');
INSERT INTO comments (user_id, book_id, comment) VALUES (7, 2, 
'[One of] the most important books you will read this year...[Kingsley`s] experience reporting from the front lines of the crisis gives an unrivaled perspective...powerful.
');

INSERT INTO users (name, email, password, is_admin) VALUES ('Gáspár Blanka', 'gaspar.blanka@fakemail.org', null, false);
INSERT INTO users (name, email, password, is_admin) VALUES ('Yrjö Kemppi', 'yrjo.kemppi@fakegmail.com', null, false);
INSERT INTO books (title, descriptoin, views,image_url, format, user_id, approved, likes, suggest_age, store_url, store_url_dig) 
VALUES ('The Crossing: My Journey to the Shattered Heart of Syria by Samar Yazbek (2016)', 
'In this book, Yazbek gives insight on the diverse political issues in Syria starting from the regime, to the rise of democratic movements and the start of the conflict in the country. It is a non-fiction work where you can have an accurate understanding of the situation in Syria and why Syrians have been fleeing and seeking asylum all around the world.
The writer cleverly collects images of the conflict by reporting people’s experiences living in an unsafe place, children’s fears, life in bunkers and in shattered buildings, fear of snipers… It is by far the most captivating account of Syria today.',
27, 'https://images-production.bookshop.org/spree/images/attachments/5936432/original/9781846044885.jpg',
'EPUB', 2, true, 7, 16,'https://www.amazon.es/Crossing-Journey-Shattered-Heart-Syria/dp/184604488X','https://www.ebooks.com/en-es/book/1986141');
INSERT INTO comments (user_id, book_id, comment) VALUES (8, 3, 
'Powerful and moving... bears comparison with George Orwell`s Homage To Catalonia as a work of literature, Yazbek is a superb narrator... it may be that [she] has written one of the first political classics of the 21st century.
');
INSERT INTO comments (user_id, book_id, comment) VALUES (9, 3, 
'An eloquent, gripping and harrowing account of the country`s decline into barbarism by an incredibly brave Syrian.
');

INSERT INTO users (name, email, password, is_admin) VALUES ('Sjef Wijnings', 'sjef.wijnings@fakeyahoo.com', null, false);
INSERT INTO books (title, descriptoin, views,image_url, format, user_id, approved, likes, suggest_age, store_url, store_url_dig) 
VALUES ('We are Displaced by Malala Yousafzai (2019)', 
'Malala’s work is divided into two parts. In the first part, she focuses on her own journey as a forcibly displaced girl because of the rise of Taliban in Pakistan. She highlights the issue of internal displacement or what is referred to as “being a refugee in one’s own country” and then proceeds to retell her journey as a refugee outside Pakistan.
The second part is a collection of stories of 9 girls from different countries including Syria, Yemen and the Democratic Republic of the Congo, showing the effects of forced displacement on girls and their development and celebrating their success stories in their new homes.',
27, 'https://images-production.bookshop.org/spree/images/attachments/4172558/original/9780316523646.jpg',
'EPUB', 1, true, 22, 16,'https://www.amazon.es/We-Are-Displaced-Journey-Stories/dp/031652364X','https://www.ebooks.com/en-es/book/96034462');
INSERT INTO comments (user_id, book_id, comment) VALUES (10, 4, 
'Nobel Peace Prize winner Yousafzai, who famously survived being shot by Taliban soldiers as a teen in 2012, is a passionate activist for girls` right to education. Yet, in this profound volume, she sidesteps those aspects of her life to illuminate another experience: displacement - beginning with her family`s forced 2009 evacuation of their Pakistani hometown in response to escalating Taliban violence. Comprising the bulk of the book are urgent, articulate first-person stories from displaced or refugee young women whom Yousafzai has encountered in her travels, whose birthplaces include Colombia, Guatemala, Syria and Yemen. ... The contributors` strength, resilience, and hope in the face of trauma is astounding, and their stories` underlying message about the heartbreaking loss of their former lives and homelands (and the resulting "tangle of emotions that comes with leaving behind everything you know") is profoundly moving.
');


INSERT INTO books (title, descriptoin, views,image_url, format, user_id, approved, likes, suggest_age, store_url, store_url_dig) 
VALUES ('The Lightless Sky by Gulwali Passarlay (2016)', 
'More on children, The Lightless Sky is an auto-memoir of a 12-year-old Afghan boy who was forced to flee Afghanistan, only accompanied by his 13-year-old brother to seek safety in another country. The book highlights the topic of children’s trauma in the context of forced migration, especially in armed conflict situations. Gulwali, in fact, sheds light in the book on his trauma as result of the horrific events he had lived because of the Taliban, the fact that both his father and grandfather were killed and the emotional and psychological state of his mother in the midst of all these incidents. Added to that, he is eventually separated from his brother, the closest person he still had at the time.
Before he finally finds refuge in the UK, the book takes us through the very difficult journey from Afghanistan to Bulgaria, Turkey, Greece, Calais…with a detailed description of the emotional experiences of an unaccompanied minor seeking asylum.',
27, 'https://images-production.bookshop.org/spree/images/attachments/4325825/original/9780062443892.jpg',
'EPUB', 2, false, 15, 12,'https://www.amazon.es/Lightless-Sky-Gulwali-Passarlay/dp/1782398473','https://www.ebooks.com/en-es/book/96386687');

INSERT INTO favorites (user_id, book_id) values (2, 1);
INSERT INTO favorites (user_id, book_id) values (2, 3);
INSERT INTO favorites (user_id, book_id) values (3, 4);
INSERT INTO favorites (user_id, book_id) values (4, 2);
INSERT INTO favorites (user_id, book_id) values (4, 4);
INSERT INTO favorites (user_id, book_id) values (5, 1);
INSERT INTO favorites (user_id, book_id) values (7, 2);
INSERT INTO favorites (user_id, book_id) values (7, 3);
INSERT INTO favorites (user_id, book_id) values (9, 1);
INSERT INTO favorites (user_id, book_id) values (10, 2);




