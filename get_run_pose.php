<?php
include 'db.php';

// Decode as associative array
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['motors']) || count($data['motors']) != 6) {
    http_response_code(400);
    echo "Invalid motor input.";
    exit;
}

$m = $data['motors'];

$sql = "INSERT INTO run (motor1, motor2, motor3, motor4, motor5, motor6, status) 
        VALUES (?, ?, ?, ?, ?, ?, 1)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iiiiii", $m[0], $m[1], $m[2], $m[3], $m[4], $m[5]);

if ($stmt->execute()) {
    echo "Run command sent: " . implode(", ", $m);
} else {
    echo "Error: " . $stmt->error;
}
?>
