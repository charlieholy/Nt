CREATE TABLE `t_symbol_info` (
    `id`           INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `symbol`        VARCHAR(20) NOT NULL,
    `market`         VARCHAR(20) NOT NULL,
     UNIQUE INDEX `symbol_market` (`symbol`,`market`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;