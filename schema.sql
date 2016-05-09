CREATE DATABASE  `burgers_db`;
USE `starwars`;

CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 100) NOT NULL,
	`devoured` TINYINT NOT NULL,
	`date` DATETIME NOT NULL,
	
	PRIMARY KEY ( `id` ) );
