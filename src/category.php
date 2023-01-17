<?php require_once 'init.php';

// ajout d'une categorie
if ($_GET['action'] == 'add') {
    $data = json_decode(file_get_contents('php://input'), true);


    $query = $pdo->prepare("INSERT INTO category (title) VALUES (:title)");

    $query->execute($data);

    echo json_encode($data);
}


// lecture de toutes les categories
if ($_GET['action'] == 'getall') {
    $query = $pdo->prepare("SELECT * FROM category");
    $query->execute();
    $categories = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($categories);
}

// lecture d'une seule catégorie
if ($_GET['action'] == 'getone') {
    $query = $pdo->prepare("SELECT * FROM category where id=:id");
    $query->execute([':id' => $_GET['id']]);
    $category = $query->fetch(PDO::FETCH_ASSOC);

    echo json_encode($category);
}

// suppression d'une catégorie
if ($_GET['action'] == 'delete') {
    $data = json_decode(file_get_contents('php://input'), true);
    $result = $pdo->prepare("DELETE from category WHERE id=:id");
    $result->execute($data);

    echo json_encode($test);
}

// modification d'une catégorie
if ($_GET['action'] == 'edit') {
    $data = json_decode(file_get_contents('php://input'), true);


    $query = $pdo->prepare("REPLACE INTO category (id,title) VALUES (:id,:title)");

    $query->execute($data);

    echo json_encode($data);
}
