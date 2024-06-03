-- Product inserts
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (2, 'Pastel de Queijo', 'pastel', true, true, 5, 5, '/images/products/pastel-queijo.jpg', 'Deliciosos pastéis de vento, iguarias brasileiras.');
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (1, 'X-Tudo', 'hamburger', null, true, 8, 11, '/images/products/ham.png', 'Deliciosos hambúrgueres com sabor à Brasil.');
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (3, 'Pastel de Pizza', 'pastel', true, true, 5, 5, '/images/products/pastel-pizza.jpg', 'Deliciosos pastéis de vento, iguarias brasileiras.');
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (4, 'Pastel de Palmito', 'pastel', true, true, 6, 5, '/images/products/pastel-palmito.png', 'Deliciosos pastéis de vento, iguarias brasileiras.');
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (5, 'Pastel de Frango', 'pastel', true, true, 5, 5, '/images/products/pastel-frango.jpeg', 'Deliciosos pastéis de vento, iguarias brasileiras.');
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (6, 'Pastel de Carne', 'pastel', true, true, 5, 5, '/images/products/pastel-carne.jpeg', 'Deliciosos pastéis de vento, iguarias brasileiras.');
INSERT INTO product(id, name, category, delicacy, available, price, price_in_points, img_url, description) VALUES (7, 'Pastel de Camarão', 'pastel', true, true, 7, 5, '/images/products/pastel-camarao.jpg', 'Deliciosos pastéis de vento, iguarias brasileiras.');

-- Client inserts
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Valerie Botsford','Sammy27@gmail.com','-246b9fc8','Neither','1996-01-04',FALSE,275);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Lula Mohr','Bradley_Jacobson-Boyer@yahoo.com','79772692','Gender questioning','1973-11-29',FALSE,143);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Mrs. Terri Miller','Molly.Schneider67@yahoo.com','35362d8','Female to male transgender man','2004-09-22',FALSE,33);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Heather Hoppe','Jerry.Stoltenberg43@gmail.com','1edb737c','Neutrois','1994-02-18',FALSE,133);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Ida Bernhard','Tiffany.Ferry@gmail.com','-4f2008fb','Gender nonconforming','1980-03-05',FALSE,68);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Winifred Fadel','Susie95@yahoo.com','215b8b42','Demi-boy','1990-05-23',FALSE,318);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Lori Hills','Joy.Lemke-Runolfsdottir28@yahoo.com','-1a4764a4','Transmasculine','2005-04-27',FALSE,143);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Eduardo Ruecker','Elsie_Lebsack45@yahoo.com','5d2157c3','Cis man','1965-08-31',FALSE,472);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Dr. Mercedes Murphy','Joseph.Funk53@hotmail.com','-4e98c8fd','Bigender','1987-06-17',FALSE,63);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Diane Abbott','Erin.Graham@gmail.com','6868d71a','Two-spirit person','1976-03-18',FALSE,49);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Mrs. Rosa Abernathy','Helen.Daniel-Hermann50@yahoo.com','40ee019b','Transexual man','1981-01-18',FALSE,77);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Lola Gusikowski','Debbie96@gmail.com','77dfe55d','Trans woman','2002-03-10',FALSE,188);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Gretchen Jerde','Lester_Mueller-Mraz@hotmail.com','-4f00c769','Demi-girl','1996-05-24',FALSE,115);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Latoya Fay','Douglas_Mills42@yahoo.com','-7f29aecf','Trans','1973-02-19',FALSE,221);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Minnie Wiegand','Sonya32@yahoo.com','4f710abe','Cisgender female','1991-04-25',FALSE,306);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Dr. Manuel Purdy','Lonnie78@gmail.com','6ccd6531','Transexual person','1989-08-21',FALSE,52);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Bradford Blick','Abel_Robel69@hotmail.com','-41aea95b','Bigender','2001-05-23',FALSE,23);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Joan Yundt','Rebecca_Adams68@hotmail.com','4952be85','Intersex woman','1978-02-27',FALSE,434);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Evan Conroy PhD','Rolando.Kassulke52@yahoo.com','-3930caaa','Androgyne','1997-01-07',FALSE,362);
INSERT INTO client("name","email","passhash","gender","b_date","admin","points") VALUES ('Barry Walker','Laverne.Kris13@hotmail.com','-3a82dc37','Transexual person','1982-12-14',FALSE,425);

-- MobileOrder inserts
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',40.66,'2024/05/07 11:04:18','2024/05/07 11:04:18','1');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',74.76,'2024/05/22 15:22:58','2024/05/22 15:22:58','2');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',47.54,'2024/05/26 09:07:46','2024/05/26 09:07:46','3');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',86.9,'2024/05/17 08:13:25','2024/05/17 08:13:25','4');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',11.48,'2024/05/18 10:37:41','2024/05/18 10:37:41','5');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',97.41,'2024/05/07 21:41:35','2024/05/07 21:41:35','6');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',12.17,'2024/05/30 11:26:22','2024/05/30 11:26:22','7');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',75.87,'2024/05/21 21:16:15','2024/05/21 21:16:15','8');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',14.76,'2024/05/26 12:16:01','2024/05/26 12:16:01','9');
INSERT INTO mobile_order ("status","total","created_at","finished_at","display_id") VALUES ('completed',55.69,'2024/05/11 15:00:31','2024/05/11 15:00:31','10');

-- DeliveryOrder inserts
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',43.05, '2024/04/28 16:20:06','2024/04/28 16:20:06', 3.38);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',12.44,'2024/05/29 21:18:02','2024/05/29 21:18:02', 3.92);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',17.47,'2024/05/05 12:45:42','2024/05/05 12:45:42', 9.58);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',33.45,'2024/05/20 14:15:05','2024/05/20 14:15:05', 8.79);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',58.21,'2024/05/28 10:34:14','2024/05/28 10:34:14', 6.99);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',73.29,'2024/05/01 18:49:43','2024/05/01 18:49:43', 6.33);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',26.94,'2024/05/01 18:54:36','2024/05/01 18:54:36', 3.11);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',9.52,'2024/05/30 18:15:47','2024-05-13', 8.91);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',7.79,'2024/05/22 20:04:55','2024/05/22 20:04:55', 3.02);
INSERT INTO delivery_order ("status","total","created_at","finished_at","deliv_cost") VALUES ('completed',67.62,'2024/05/27 13:01:09','2024/05/27 13:01:09', 9.52);

-- Location inserts
INSERT INTO location (geom) VALUES(st_geomfromtext('point(-9.1964952 38.7505826)'));
INSERT INTO location (geom) VALUES(st_geomfromtext('point(-9.197793 38.750628)'));
INSERT INTO location (geom) VALUES(st_geomfromtext('point(-9.198630 38.751355)'));
INSERT INTO location (geom) VALUES(st_geomfromtext('point(-9.190491 38.750370)'));
INSERT INTO location (geom) VALUES(st_geomfromtext('point(-9.192410 38.755240)'));
INSERT INTO location (geom) VALUES(st_geomfromtext('point(-9.195847 38.754123)'));

-- ActiveClient inserts
INSERT INTO active_client (cli_id, ord_id, loc_id) VALUES (1, 1, 1);
INSERT INTO active_client (cli_id, ord_id, loc_id) VALUES (2, 2, 2);
INSERT INTO active_client (cli_id, ord_id, loc_id) VALUES (3, 3, 3);
INSERT INTO active_client (cli_id, ord_id, loc_id) VALUES (4, 4, 4);
INSERT INTO active_client (cli_id, ord_id, loc_id) VALUES (5, 5, 5);
INSERT INTO active_client (cli_id, ord_id, loc_id) VALUES (6, 6, 6);