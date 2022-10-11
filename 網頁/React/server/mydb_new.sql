-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-10-11 22:26:24
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mydb_new`
--

-- --------------------------------------------------------

--
-- 資料表結構 `administrator`
--

CREATE TABLE `administrator` (
  `Administrator_ID` int(11) NOT NULL,
  `member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `administrator`
--

INSERT INTO `administrator` (`Administrator_ID`, `member_ID`) VALUES
(1, 1),
(2, 5);

-- --------------------------------------------------------

--
-- 資料表結構 `announcement`
--

CREATE TABLE `announcement` (
  `announcement_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `content` varchar(45) DEFAULT NULL,
  `administrator_Administrator_ID` int(11) NOT NULL,
  `fish_industry_Fish_Industry_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `announcement`
--

INSERT INTO `announcement` (`announcement_id`, `date`, `content`, `administrator_Administrator_ID`, `fish_industry_Fish_Industry_ID`) VALUES
(1, '2022-08-05', '通過乙類外銷登錄衛生評鑑遠洋漁船(裝設連續溫度記錄器)名單(截至111年5月)', 1, 1),
(2, '2022-09-10', '中秋節快樂', 2, 1),
(3, '2022-09-27', '核准境外僱用非我國籍船員仲介機構名冊與評鑑成績(含英文、印尼文、菲律賓文版本)\n', 2, 3),
(4, '2022-10-01', '測試', 2, 2);

-- --------------------------------------------------------

--
-- 資料表結構 `fish_industry`
--

CREATE TABLE `fish_industry` (
  `Fish_Industry_ID` int(11) NOT NULL,
  `Fishing_boat_name` varchar(10) DEFAULT NULL,
  `Fishing_area` varchar(10) DEFAULT NULL,
  `Fishing_license_number` varchar(10) DEFAULT NULL,
  `member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `fish_industry`
--

INSERT INTO `fish_industry` (`Fish_Industry_ID`, `Fishing_boat_name`, `Fishing_area`, `Fishing_license_number`, `member_ID`) VALUES
(1, 'AC', 'AC', 'AC', 2),
(2, '合振16號', '基隆港', '008321', 3),
(3, '宏榮', '基隆港', '011048', 4),
(4, 'AB', 'CC', 'AAA', 1),
(5, 'AC', 'AC', 'AC', 6);

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `ID` int(11) NOT NULL,
  `Password` varchar(15) DEFAULT NULL,
  `User_name` varchar(10) DEFAULT NULL,
  `Phone_number` varchar(10) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`ID`, `Password`, `User_name`, `Phone_number`, `Email`) VALUES
(1, '123', 'AAA', '0981234561', 'AAA@gmail.com'),
(2, 'AAA', 'BBB', '0981575736', 'AABB'),
(3, '34567812', 'CCC', '0934567812', 'CCC@gmail.com'),
(4, '45678123', 'DDD', '0945678123', 'DDD@gmail.com'),
(5, '56781234', 'EEE', '0956781234', 'EEE@gmail.com'),
(6, '123', 'AAAB', '0912345677', 'AACA@gmail.com');

-- --------------------------------------------------------

--
-- 資料表結構 `record`
--

CREATE TABLE `record` (
  `Record_ID` int(11) NOT NULL,
  `Fishing_area` varchar(15) DEFAULT NULL,
  `photo` varchar(500) DEFAULT NULL,
  `fingerlings` varchar(10) DEFAULT NULL,
  `yield_of_catch` int(11) DEFAULT NULL,
  `Violation_record` int(11) DEFAULT NULL,
  `fish_industry_Fish_Industry_ID` int(11) NOT NULL,
  `catch_date` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `record`
--

INSERT INTO `record` (`Record_ID`, `Fishing_area`, `photo`, `fingerlings`, `yield_of_catch`, `Violation_record`, `fish_industry_Fish_Industry_ID`, `catch_date`) VALUES
(1, '花蓮港', 'http://www.shute.kh.edu.tw/~2009TSC12/images/longfin03.jpg', 'ALB', 1, 0, 4, '2022-10-10'),
(2, '基隆港', 'https://kmweb.coa.gov.tw/files/IMITA_Gallery/7/2cf17ada5b_m.jpg', 'BET', 1, 0, 4, '2022-10-10'),
(3, '基隆港', 'https://s.newtalk.tw/album/news/83/58ac090a84fcb.jpg', 'ALB', 8, 2, 2, '2022-09-26'),
(4, '基隆港', 'https://s.newtalk.tw/album/news/83/58ac090a84fcb.jpg', 'DOL', 2, 0, 4, '2022-09-23'),
(5, '基隆港', 'https://cf.shopee.tw/file/3f226a8b05016eccf08c9f52ff537ae4', 'LAG', 3, 0, 4, '2022-09-13'),
(6, '基隆港', 'https://kmweb.coa.gov.tw/files/IMITA_Gallery/7/4c154975f5_m.jpg', 'YFT', 1, 0, 4, '2022-09-13'),
(7, '花蓮港', 'https://i.ytimg.com/vi/aCjtFsQbQY0/maxresdefault.jpg', 'Shark', 8, 0, 4, '2022-09-13'),
(8, '花蓮港', 'https://www.sydneyfishmarket.com.au/Portals/0/EasyDNNnews/1323/img-Atlantic-Salmon.jpg', 'OTHER', 1, 0, 4, '2022-09-13');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`Administrator_ID`,`member_ID`),
  ADD KEY `fk_administrator_member1` (`member_ID`);

--
-- 資料表索引 `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`announcement_id`,`administrator_Administrator_ID`),
  ADD KEY `fk_announcement_administrator1` (`administrator_Administrator_ID`),
  ADD KEY `fk_announcement_fish_industry1` (`fish_industry_Fish_Industry_ID`);

--
-- 資料表索引 `fish_industry`
--
ALTER TABLE `fish_industry`
  ADD PRIMARY KEY (`Fish_Industry_ID`,`member_ID`),
  ADD KEY `fk_fish_industry_member1` (`member_ID`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `User_name` (`User_name`,`Phone_number`,`Email`);

--
-- 資料表索引 `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`Record_ID`) USING BTREE,
  ADD KEY `fk_record_fish_industry1` (`fish_industry_Fish_Industry_ID`);

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `administrator`
--
ALTER TABLE `administrator`
  ADD CONSTRAINT `fk_administrator_member1` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 資料表的限制式 `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `fk_announcement_administrator1` FOREIGN KEY (`administrator_Administrator_ID`) REFERENCES `administrator` (`Administrator_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_announcement_fish_industry1` FOREIGN KEY (`fish_industry_Fish_Industry_ID`) REFERENCES `fish_industry` (`Fish_Industry_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 資料表的限制式 `fish_industry`
--
ALTER TABLE `fish_industry`
  ADD CONSTRAINT `fk_fish_industry_member1` FOREIGN KEY (`member_ID`) REFERENCES `member` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- 資料表的限制式 `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `fk_record_administrator1` FOREIGN KEY (`administrator_Administrator_ID`) REFERENCES `administrator` (`Administrator_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_record_fish_industry1` FOREIGN KEY (`fish_industry_Fish_Industry_ID`) REFERENCES `fish_industry` (`Fish_Industry_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
