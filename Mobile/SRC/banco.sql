create database cd;
use cd;

create table curso(
	idCurso int not null,
    nome varchar(100) not null,
    constraint pk_idcurso primary key (idCurso)
);

create table disciplina(
	idDisciplina int not null,
    idCurso int not null,
    nome varchar(100) not null,
    constraint pk_iddisciplina primary key (idDisciplina),
    constraint fk_idcurso foreign key (idCurso) references curso (idCurso) on delete cascade
);

insert into curso values (1, 'info');
insert into disciplina values (10, 1, 'ALP');
insert into disciplina values (11, 1, 'POO');
insert into disciplina values (12, 1, 'APW');
insert into disciplina values (13, 1, 'BD');

insert into curso values (2, 'eletro');
insert into disciplina values (20, 2, 'CIRCUITO');
insert into disciplina values (21, 2, 'FIAÇÃO');
insert into disciplina values (22, 2, 'C++');

insert into curso values (3, 'adm');
insert into disciplina values (30, 3, 'CONTABILIDADE');
insert into disciplina values (31, 3, 'MAT FINANCEIRA');
insert into disciplina values (32, 3, 'MAT BASICA');
insert into disciplina values (33, 3, 'GESTÃO');
insert into disciplina values (34, 3, 'MAT APLICADA');
insert into disciplina values (35, 3, 'FODAS');

SELECT * FROM CURSO;
SELECT * FROM DISCIPLINA;
SELECT * FROM Disciplina WHERE idCurso=1;