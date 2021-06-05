<?php
include("banco.php");

class classDisciplina extends Conexao{
    public function exibe(){
        $BFetch = $this->conectaBd()->prepare("SELECT * FROM disciplina order by idDisciplina");
        $BFetch->execute();

        $J = [];
        $i = 0;
        while($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$i] = [
                "idDisciplina" => $Fetch['idDisciplina'],
                "idCurso" => $Fetch['idCurso'],
                "nome" => $Fetch['nome'],
            ];
            $i++;
        }
        Header("Access-Control-Allow-Origin:*");
        Header("Content-type: application/json");
        $json = array("items" => $J);
        echo json_encode($json);

    }
}
?>