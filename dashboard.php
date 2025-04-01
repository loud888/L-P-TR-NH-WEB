<?php
session_start();

if(!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

if(isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.php?message=Đã đăng xuất thành công! Chào bạn!");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Chào mừng <?php echo $_SESSION['username']; ?> đến với Dashboard</h2>
    <a href="dashboard.php?logout=true">Đăng xuất</a>
    
    <?php
    if(isset($_GET['message'])) {
        echo "<p style='color:green'>" . $_GET['message'] . "</p>";
    }
    ?>
</body>
</html>
