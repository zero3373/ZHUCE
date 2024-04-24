<?php
session_start();

$host = 'localhost';  // 数据库服务器地址
$dbname = 'user_registration';  // 数据库名
$dbUsername = 'root';  // 数据库用户名，已更改变量名以避免混淆
$pass = '123456';  // 数据库密码

try {
    $pdo = new PDO("mysql:host=localhost;dbname=user_registration;charset=utf8mb4", $dbUsername, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 检查是否是 POST 请求
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // 预备 SQL 语句
        $sql = "INSERT INTO users (dbUsername, age, password, email, phone) VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);

        // 从 POST 获取数据
        $username = $_POST['username']; // 保持这个变量用于表单数据
        $age = $_POST['age'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // 加密密码
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        // 绑定参数并执行
        $stmt->bindParam(1, $username);
        $stmt->bindParam(2, $age);
        $stmt->bindParam(3, $password);
        $stmt->bindParam(4, $email);
        $stmt->bindParam(5, $phone);
        $stmt->execute();

        // 注册成功
        $_SESSION['message'] = '注册成功！';
        header('Location: success.php');  // 重定向到成功页面
        exit();
    }
} catch (PDOException $e) {
    // 处理错误
    die("数据库连接失败: " . $e->getMessage());
}
?>
