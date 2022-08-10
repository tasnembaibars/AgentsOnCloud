-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 03:49 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agentsoncloud`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `comment` varchar(700) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `comment`, `user_id`, `product_id`) VALUES
(1, 'I totally supportvvvv', 50, 10),
(2, 'I totally supportvvvv', 50, 10);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_description` varchar(700) NOT NULL,
  `product_price` int(200) NOT NULL,
  `product_image` varchar(1400) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_description`, `product_price`, `product_image`, `user_id`) VALUES
(10, 'blush', 'pink', 33, 'C:\\fakepath\\89665379-businesswoman-multitasking-at-work-.webp', 37),
(11, 'eyelashes', 'black', 22, 'C:\\fakepath\\89665379-businesswoman-multitasking-at-work-.webp', 42),
(21, 'eye-liner', 'bold black', 22, 'C:\\fakepath\\89665379-businesswoman-multitasking-at-work-.webp', 46),
(22, 'eyelashes', 'black', 15, 'C:\\fakepath\\89665379-businesswoman-multitasking-at-work-.webp', 46),
(23, 'blush', 'pink', 22, 'C:\\fakepath\\89665379-businesswoman-multitasking-at-work-.webp', 50);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(37, 'razan', 'razan@gmail.com', '$2b$10$xLHVKEUxRLxYbPmEUxouyeIddiGIywp7XcBqODPmyv3nLYieeFAJK'),
(39, 'tasnem', 'tasnem@gmail.com', '$2b$10$RfdLUKLEKBgLiIcr72cI2eqfGkccqoPXvpZl/dn1HLN3L1U0FaP.q'),
(41, 'haya', 'haya@gmail.com', '$2b$10$JIj5.gJrz5QuVLrAlxmh7eT8VOE31RtdEgcfzq3rK/RWyxNR6fo7W'),
(42, 'alaa', 'alaa@gmail.com', '$2b$10$7W/sGdzt609NoKNB/lhRqu3h6ElfeDLHHHq8Tcf9TMRCsB1JG.rAO'),
(43, 'ola', 'ola@gmail.com', '$2b$10$Gy8qf/Cbp6zIIqrxbnnCPuDWNmCoaLjEVItQ1fkfDOTAVJ3hbKkdG'),
(46, 'asmaa', 'asmaa@gmail.com', '$2b$10$yG1SzN40EVa0.43m2qt3b.RT.0XpdbVbYP0bebh./i12ouB.NTL1y'),
(50, 'ahmad', 'ahmad@gmail.com', '$2b$10$wKYd.2OBLg72j2pCn/Sa3.O4T.Ai1Y5yS23ow77Az8svT0kjDa75q');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
