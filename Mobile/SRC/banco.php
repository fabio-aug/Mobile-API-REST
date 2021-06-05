<?php

abstract class Conexao
{
    protected function conectaBd()
    {
        $username = "root";
        $password = "123321";
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=cd', $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOexception $e) {
            echo "erro: " . $e->getMessage();
        }
    }
}
?>