-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2020 at 12:41 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dummydatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_table`
--

CREATE TABLE `category_table` (
  `Category_id` int(10) NOT NULL,
  `Category_name` varchar(50) NOT NULL,
  `Add_on` datetime NOT NULL,
  `Modified_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category_table`
--

INSERT INTO `category_table` (`Category_id`, `Category_name`, `Add_on`, `Modified_on`) VALUES
(1, 'Food', '2020-10-23 02:29:22', '2020-10-23 03:09:28'),
(2, 'Mobile', '2020-10-23 02:25:24', '2020-10-23 03:00:11'),
(3, 'Leptop', '2020-10-23 02:37:34', '2020-10-23 03:14:00'),
(4, 'Ladher', '2020-10-23 02:22:30', '2020-10-23 03:27:29'),
(5, 'Clothe', '2020-10-23 02:44:26', '2020-10-23 03:15:22');

-- --------------------------------------------------------

--
-- Table structure for table `product_table`
--

CREATE TABLE `product_table` (
  `P_id` int(10) NOT NULL,
  `P_name` varchar(100) NOT NULL,
  `P_Qty` int(20) NOT NULL,
  `Category_id` int(10) NOT NULL,
  `P_Price` int(10) NOT NULL,
  `P_Discount` int(5) NOT NULL,
  `P_image` text NOT NULL,
  `P_Total` int(20) NOT NULL,
  `Add_on` datetime NOT NULL,
  `Modified_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_table`
--

INSERT INTO `product_table` (`P_id`, `P_name`, `P_Qty`, `Category_id`, `P_Price`, `P_Discount`, `P_image`, `P_Total`, `Add_on`, `Modified_on`) VALUES
(28, 'samsumg', 1, 3, 15000, 5, 'http://localhost:5000/Images/image-1603447440351.jpg', 14250, '2020-10-23 15:22:04', '2020-10-23 15:22:04'),
(29, 'dell', 1, 3, 15000, 8, 'http://localhost:5000/Images/image-1603446985725.png', 13800, '2020-10-23 15:22:04', '2020-10-23 15:22:04'),
(30, '5', 5, 2, 120000, 3, 'http://localhost:5000/Images/image-1603447431751.jpg', 116400, '2020-10-23 15:22:04', '2020-10-23 15:22:04'),
(31, 'shoos', 1, 3, 500, 500, 'http://localhost:5000/Images/image-1603447414951.jpg', -2000, '2020-10-23 15:22:04', '2020-10-23 15:22:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_table`
--
ALTER TABLE `category_table`
  ADD PRIMARY KEY (`Category_id`);

--
-- Indexes for table `product_table`
--
ALTER TABLE `product_table`
  ADD PRIMARY KEY (`P_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_table`
--
ALTER TABLE `category_table`
  MODIFY `Category_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product_table`
--
ALTER TABLE `product_table`
  MODIFY `P_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
