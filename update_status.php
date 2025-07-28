<?php
include 'db.php';

$sql = "UPDATE run SET status = 0 WHERE status = 1";

if ($conn->query($sql) === TRUE) {
    echo "Status updated!";
} else {
    echo "Error: " . $conn->error;
}
?>
