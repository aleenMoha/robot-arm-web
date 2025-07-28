<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['motors']) || count($data['motors']) != 6) {
    http_response_code(400);
    echo "Invalid motor data.";
    exit;
}

$m = $data['motors'];  // decode as array

$sql = "INSERT INTO pose (motor1, motor2, motor3, motor4, motor5, motor6) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iiiiii", $m[0], $m[1], $m[2], $m[3], $m[4], $m[5]);

if ($stmt->execute()) {
    echo "Pose saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}
?>
