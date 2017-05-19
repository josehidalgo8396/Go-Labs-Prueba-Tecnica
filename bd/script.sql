CREATE SCHEMA `go-labs-db` DEFAULT CHARACTER SET utf8;
USE `go-labs-db`;

create table `go-labs-db`.`Contador` (
	`id` int not null auto_increment,
	`valor` int not null,
    primary key (`id`))
ENGINE = InnoDB;

delimiter $$
create procedure sp_actualizarContador(
	in _id int
)
begin
	update Contador set valor = valor+1 where id = _id;
    select id, valor from Contador where id = _id;
end $$
delimiter ;

delimiter $$
create procedure sp_obtenerValor()
begin
    select id, valor from Contador;
end $$
delimiter ;

insert into Contador(valor) values(0);