create extension postgis;

create database mypastry with template template_postgis;

create type emp_type as enum('admin', 'kitchen');
create type pro_category as enum('pastel', 'hamburger', 'complement', 'beverage', 'dessert');
create type ord_status as enum('pending', 'preparing', 'delivering', 'completed');

create table "user"(
id serial primary key,
name text not null,
email text not null,
passhash text not null,
gender text,
b_date date,
admin boolean);

create table address(
id serial primary key not null,
street text,
build_num text,
door text,
cep text,
municipality text);

create table client(
points int not null,
add_id int references address(id) on delete set null)
inherits("user");

create table employee(
type emp_type not null)
inherits("user");

create table "order"(
id serial primary key not null,
cli_id int,
status ord_status not null,
total real,
created_at timestamp default current_timestamp,
finished_at timestamp);

create table delivery_order(
deliv_cost real,
add_id int references address(id) on delete set null)
inherits("order");

create table mobile_order(
display_id text not null)
inherits("order");

create table product(
id serial primary key not null,
img_url text,
name text not null,
description text,
category pro_category not null,
delicacy boolean,
available boolean not null,
price real not null,
price_in_points int);

create table order_product(
pro_id int references product(id) on delete cascade not null,
ord_id int references "order"(id) on delete cascade not null,
quantity int not null,
subtotal real);

create table ingredient(
id serial primary key not null,
img_url text,
name text not null,
available boolean not null);

create table prod_ing(
pro_id int references product(id) on delete cascade not null,
ing_id int references ingredient(id) on delete cascade not null);

create table location(
id serial primary key,
geom geometry(Point, 4326));

create table active_client(
cli_id int,
ord_id int,
loc_id int references location(id));