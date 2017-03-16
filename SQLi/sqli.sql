Create database faculty;
use faculty;

grant all on faculty.* to faculty@localhost IDENTIFIED BY 'ifaculty';

    CREATE TABLE IF NOT EXISTS `download` (
            `id` int(4) NOT NULL AUTO_INCREMENT,
            `image_name` varchar(225) NOT NULL,
            `location` varchar(225) NOT NULL,
            PRIMARY KEY (`id`)
            ) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

    --
    -- Dumping data for table `download`
    --

    INSERT INTO `download` (`id`, `image_name`, `location`) VALUES
    (1, 'Marine ford', 'images/marine.jpg'),
    (2, 'Luffy fourth gear', 'images/Gear_Four_luffy.jpg'),
    (3, 'Newgate Vs Teach', 'images/Newgate_Vs_Teach.jpg'),
    (4, 'straw-hat crew', 'images/straw_hat_crew.jpg'),
    (5, 'Whitebeard luffy ace ', 'images/Whitebeard_luffy_ace.jpg');

create table `faculty`.`users` ( 
`id` int(11) not NULL AUTO_INCREMENT ,
`username` varchar(30) NOT NULL ,
`password` varchar(128) NOT NULL ,
PRIMARY KEY ( `id` ) ,
UNIQUE KEY `username` ( `username` ) )
ENGINE = MYISAM DEFAULT CHARSET = utf8;

insert into `users`(`username`,`password`) values ('admin','sysadmin');
insert into `users`(`username`,`password`) values ('saffro','tsunami2007');
insert into `users`(`username`,`password`) values ('guildi','qwert12345');
insert into `users`(`username`,`password`) values ('milli_2192','kissmelove');
insert into `users`(`username`,`password`) values ('adamjo','jafrriejones');
insert into `users`(`username`,`password`) values ('sibble','notAhacker');

