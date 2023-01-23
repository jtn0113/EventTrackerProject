-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema locations
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `locations` ;

-- -----------------------------------------------------
-- Schema locations
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `locations` ;
USE `locations` ;

-- -----------------------------------------------------
-- Table `location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `location` ;

CREATE TABLE IF NOT EXISTS `location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `show_title` VARCHAR(100) NOT NULL,
  `name_in_show` VARCHAR(100) NOT NULL,
  `location` VARCHAR(100) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `comments` TEXT(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS root@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'root'@'localhost';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'root'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `location`
-- -----------------------------------------------------
START TRANSACTION;
USE `locations`;
INSERT INTO `location` (`id`, `show_title`, `name_in_show`, `location`, `city`, `state`, `comments`) VALUES (1, 'Clerks', 'Quick Stop', '58 Leonard Ave.', 'Leonardo', 'NJ', 'The Quick Stop in Clerks is an actual convenience store where Kevin Smith worked during the time of filming. Still open today.');
INSERT INTO `location` (`id`, `show_title`, `name_in_show`, `location`, `city`, `state`, `comments`) VALUES (2, 'Clerks 2', 'Mooby\'s', '8572 Stanton Ave', 'Buena Park', 'CA', 'The Mooby\'s location was a shut down Burger King. Has since been demolished.');
INSERT INTO `location` (`id`, `show_title`, `name_in_show`, `location`, `city`, `state`, `comments`) VALUES (3, 'Shameless', 'Gallagher House', '2119 S Homan Ave', 'Chicago', 'IL', 'A real house in Chicago. The owners welcome fans to take pictures.');
INSERT INTO `location` (`id`, `show_title`, `name_in_show`, `location`, `city`, `state`, `comments`) VALUES (4, 'Breaking Bad', 'White Family House', '3828 Piermont Drive', 'Albuquerque', 'NM', 'A real house in Albuquerque. Owners have put a fence around the house to prevent trespassers.');
INSERT INTO `location` (`id`, `show_title`, `name_in_show`, `location`, `city`, `state`, `comments`) VALUES (5, 'Office Space', 'Initech', '4120 Freidrich Ln', 'Austin', 'TX', 'The office building used for Initech. Still looks the same today as in the movie.');
INSERT INTO `location` (`id`, `show_title`, `name_in_show`, `location`, `city`, `state`, `comments`) VALUES (6, 'Office Space', 'Chotchkie\'s (Exterior)', '9739 Great Hills Trail', 'Austin', 'TX', 'Used for exterior shots only, interior shots were filmed at another location. Today the building is a Chase bank.');

COMMIT;

