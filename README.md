# student-api_database

Muokataan edellistä esimerkkiä niin, että data haetaan tietokannasta.

Luodaan tietokanta
<pre>
create database studentdb;
use studentdb;
create table student(
    id_student int primary key,
    firstname varchar(45),
    lastname varchar(45)
);
insert into student values(1,'Teppo','Testi');
insert into student values(2,'Liisa','Joki');

create user studentAdmin@'localhost' identified by 'studentPass';
grant all on studentdb.* to studentAdmin@'localhost';
</pre>

## Login systeemi

Luodaan ensin user-taulu koodilla
<pre>
CREATE TABLE user(
  id_user INT primary key auto_increment,
  username VARCHAR(20),
  password VARCHAR(255),
  UNIQUE (username)
);
</pre>