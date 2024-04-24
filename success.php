<?php
session_start();
?>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>注册成功</title>
</head>
<body>
<?php if (isset($_SESSION['message'])): ?>
    <p><?php echo $_SESSION['message']; ?></p>
    <?php unset($_SESSION['message']); ?>
<?php else: ?>
    <p>未知错误。</p>
<?php endif; ?>
<a href="用户注册界面.html">返回注册页</a>
</body>
</html>
