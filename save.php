<?php
// Database connection
$conn = mysqli_connect("localhost", "root", "", "contact_db");

// Check connection
if (!$conn) {
    die("Database connection failed");
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert query
$sql = "INSERT INTO contact (name, email, message)
        VALUES ('$name', '$email', '$message')";

// Execute query
if (mysqli_query($conn, $sql)) {
    echo "Message sent successfully!";
} else {
    echo "Error saving data";
}

// Close connection
mysqli_close($conn);
?>
