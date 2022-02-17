-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE list (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL(3,1),
	"unit" VARCHAR(20),
	"purchased" BOOLEAN DEFAULT FALSE
	);

