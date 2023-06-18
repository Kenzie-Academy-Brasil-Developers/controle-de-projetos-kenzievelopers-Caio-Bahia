create table if not exists "developers"(
"id" SERIAL primary key,
"name" VARCHAR(50) not null,
"email" VARCHAR(50) not null unique
);

create type "OS" as enum ('Windows','Linux','MacOS');

create table if not exists "developerInfo"(
"id" SERIAL primary key,
"developerSince" DATE not null,
"preferredOS" "OS" not null,
"developerID" INTEGER not null unique,
foreign key ("developerID")
	references "developers"("id")
		on delete cascade	
);

create table if not exists "projects"(
"id" SERIAL primary key,
"name" VARCHAR(50) not null,
"description" TEXT,
"repository" VARCHAR(150) not null,
"startDate" DATE not null,
"endDate" DATE,
"developerID" INTEGER not null unique,
foreign key ("developerID")
	references "developers"("id")
		on delete set null 
);