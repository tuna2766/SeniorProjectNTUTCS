CREATE DATABASE  IF NOT EXISTS `mydb_new` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb_new`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb_new
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `Record_ID` int NOT NULL,
  `Fishing_area` varchar(15) DEFAULT NULL,
  `catch_date` date DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `fingerlings` varchar(10) DEFAULT NULL,
  `yield_of_catch` int DEFAULT NULL,
  `Violation_record` int DEFAULT NULL,
  `fish_industry_Fish_Industry_ID` int NOT NULL,
  `administrator_Administrator_ID` int NOT NULL,
  PRIMARY KEY (`Record_ID`,`fish_industry_Fish_Industry_ID`,`administrator_Administrator_ID`),
  KEY `fk_record_fish_industry1_idx` (`fish_industry_Fish_Industry_ID`),
  KEY `fk_record_administrator1_idx` (`administrator_Administrator_ID`),
  CONSTRAINT `fk_record_administrator1` FOREIGN KEY (`administrator_Administrator_ID`) REFERENCES `administrator` (`Administrator_ID`),
  CONSTRAINT `fk_record_fish_industry1` FOREIGN KEY (`fish_industry_Fish_Industry_ID`) REFERENCES `fish_industry` (`Fish_Industry_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (1,'花蓮港','2022-08-01','https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Carassius_gibelio_2008_G1.jpg/1200px-Carassius_gibelio_2008_G1.jpg','ALB',1,0,1,1),(2,'基隆港','2022-09-13','https://shun-gate.com/wp-content/uploads/2021/04/pic_1-1-1.jpg','ALB',1,0,3,1),(3,'基隆港','2022-09-26','https://www.newsmarket.com.tw/files/2022/09/%E8%99%B1%E7%9B%AE%E9%AD%9A%E6%98%AF%E5%9C%8B%E6%B0%91%E7%BE%8E%E9%A3%9F%EF%BC%8C%E4%BD%86%E6%98%AF%E5%A6%82%E4%BB%8A%E5%8D%BB%E5%8F%AF%E8%83%BD%E8%B6%8A%E4%BE%86%E8%B6%8A%E9%9B%A3%E7%AB%AF%E4%B8%8A%E5%9C%8B%E4%BA%BA%E9%A4%90%E6%A1%8C%E3%80%82%EF%BC%88%E6%94%9D%E5%BD%B1%E6%9E%97%E5%90%89%E6%B4%8B%EF%BC%89.jpg','ALB',8,2,2,1);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-03 19:51:14
