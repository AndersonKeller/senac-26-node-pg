CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(52),
    password VARCHAR(52),
    email VARCHAR(52)
);
drop table "user";

insert into "user" ("username","password","email") 
values('teste2','1234','email@email.com') returning *;


select * from "user" u;
select * from "user" u where u.id  = '3';
delete from "user" u where u.id = '3';

create table "posts" (
	id SERIAL PRIMARY KEY,
	title VARCHAR(52) not null,
	content VARCHAR(255) not null,
	user_id integer,
	constraint fk_user
     foreign key (user_id) 
     REFERENCES "user" (id)
);
drop table posts ;




insert into posts values(1,'post title','qualquer coisa',1);
SELECT * 
FROM posts p
JOIN "user" u ON p.user_id = u.id;
