-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2017 at 06:58 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cmp`
--

-- --------------------------------------------------------

--
-- Table structure for table `cabs`
--

CREATE TABLE IF NOT EXISTS `cabs` (
  `at_airport` varchar(255) NOT NULL,
  `no_of_cabs` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE IF NOT EXISTS `event` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `flight_id` int(11) NOT NULL,
  `at_airport_id` varchar(255) NOT NULL,
  `day` varchar(255) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `flight_schedule`
--

CREATE TABLE IF NOT EXISTS `flight_schedule` (
  `flight_id` int(11) NOT NULL,
  `schedule_departure` time NOT NULL,
  `schedule_arrival` time NOT NULL,
  `at_airport_id` varchar(255) NOT NULL,
  `running_days` varchar(7) NOT NULL DEFAULT '0000000',
  `no_passenger` int(10) NOT NULL,
  `cab_required` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `operational_data`
--

CREATE TABLE IF NOT EXISTS `operational_data` (
  `operation_id` int(11) NOT NULL AUTO_INCREMENT,
  `flight_id` int(11) NOT NULL,
  `schedule_departure` datetime NOT NULL,
  `delay_in_schedule_depature` time NOT NULL,
  `schedule_arrival` datetime NOT NULL,
  `delay_in_schedule_arrival` time NOT NULL,
  `at_airport_id` int(11) NOT NULL,
  `first_notification_sent` int(11) NOT NULL DEFAULT '0',
  `second_notification_sent` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`operation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobile_number` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firebase_id` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
