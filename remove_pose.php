<?php
include 'db.php';
$id = $_GET['id'];

$sql = "DELETE FROM pose WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Pose removed.";
} else {
    echo "Error deleting pose: " . $conn->error;
}
?>

