USE friendFinder_db;
create table profiles (
id INTEGER(10) auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
photos VARCHAR(100) NOT NULL,
score1 INTEGER(1) NOT NULL,
score2 INTEGER(1) NOT NULL,
score3 INTEGER(1) NOT NULL,
score4 INTEGER(1) NOT NULL,
score5 INTEGER(1) NOT NULL,
score6 INTEGER(1) NOT NULL,
score7 INTEGER(1) NOT NULL,
score8 INTEGER(1) NOT NULL,
score9 INTEGER(1) NOT NULL,
score10 INTEGER(1) NOT NULL,
primary key(id)
);