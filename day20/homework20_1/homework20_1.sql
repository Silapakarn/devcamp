CREATE TABLE order_item (
    id int auto_increment,
amount int not null,
    discount int not null,
	PRIMARY KEY (id)
);

CREATE TABLE Orders (
	id int auto_increment,
    date_order varchar(60) not null,
    contain int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (contain) REFERENCES order_item (amount)
);

CREATE TABLE employee (
	id int auto_increment,
  	name varchar(60) not null,
	address varchar(60) not null,
    salary int not null,
    sold int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (sold) REFERENCES Orders (id)
);

CREATE TABLE product (
	id int auto_increment,
    name varchar(60) not null,
    desc_product varchar(60) not null,
    price int not null,
    quantity int not null,
    refer int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (refer) REFERENCES order_item (id)
);

CREATE TABLE customer (
	id int auto_increment,
    name varchar(60) not null,
    address varchar(60) not null,
    place varchar(60) not null,
    PRIMARY KEY (id),
    FOREIGN KEY (place) REFERENCES Orders (id)
);

create table department (
  id int auto_increment,
  name varchar(60) not null,
  budget varchar(60) not null,
  emp_dept int not null,
  primary key (name),
  FOREIGN KEY (emp_dept) REFERENCES employee (id)
);

CREATE TABLE supplier (
	name varchar(60) not null,
    address varchar(60) not null,
    phone_number int not null,
    prod_sup varchar(60) not null,
    PRIMARY KEY (name),
    FOREIGN KEY (prod_sup) REFERENCES product (id)
);

