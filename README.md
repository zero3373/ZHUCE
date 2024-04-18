<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户注册页面</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #89f7fe, #66a6ff);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        form {
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            background: white;
            width: 350px;
        }
        h3 {
            text-align: center;
            color: #333;
        }
        table {
            width: 100%;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 8px;
            margin-top: 4px;
            margin-bottom: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #5cb85c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #4cae4c;
        }
        .error {
            color: #d9534f;
            font-size: 12px;
            display: none; /* 默认隐藏错误提示 */
        }
    </style>
</head>
<body>
    <div>
        <form id="myform" action="#" onsubmit="return false;">
            <h3>用户注册信息</h3>
            <table>
                <tr>
                    <td>用户名*:</td>
                    <td>
                        <input type="text" id="username" placeholder="用户名由6-10位字符组成">
                        <div id="nameerror" class="error"></div>
                    </td>
                </tr>
                <tr>
                    <td>年龄*:</td>
                    <td>
                        <input type="text" id="age" placeholder="请输入你的年龄">
                        <div id="ageerror" class="error"></div>
                    </td>
                </tr>
                <tr>
                    <td>密码*:</td>
                    <td>
                        <input type="password" id="psd" placeholder="请输入正确的密码">
                        <div id="passworderror" class="error"></div>
                    </td>
                </tr>
                <tr>
                    <td>确认密码*:</td>
                    <td>
                        <input type="password" id="againpass">
                        <div id="againerror" class="error"></div>
                    </td>
                </tr>
                <tr>
                    <td>电子邮件*:</td>
                    <td>
                        <input type="text" id="email" placeholder="请输入你的邮件地址">
                        <div id="emailerror" class="error"></div>
                    </td>
                </tr>
                <tr>
                    <td>电话号码:</td>
                    <td>
                        <input type="text" id="phone" placeholder="请输入你的电话号码">
                        <div id="phoneerror" class="error"></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" value="提交" onclick="judge()"></td>
                </tr>
            </table>
        </form>
    </div>
    <script>
        var emailok = false, againok = false, passwordok = false, ageok = false, usernameok = false, phoneok = false;

        function updateStatus(elementId, isValid, message) {
            var errorElement = document.getElementById(elementId);
            if (!isValid) {
                errorElement.style.display = "block";
                errorElement.innerHTML = message;
            } else {
                errorElement.style.display = "none";
            }
            return isValid;
        }

        function judgename() {
            var name = document.getElementById("username");
            var pattern = /^[A-Za-z0-9]{6,10}$/;
            usernameok = updateStatus("nameerror", pattern.test(name.value), "用户格式不正确！");
        }

        function judgeage() {
            var age = document.getElementById("age");
            ageok = updateStatus("ageerror", age.value >= 18, "年龄不能小于18岁！");
        }

        function judgepassword() {
            var psd = document.getElementById("psd");
            var pattern = /^(?=.*\d)(?=.*[!@#$%^&*]).{6,10}$/;
            passwordok = updateStatus("passworderror", pattern.test(psd.value), "密码格式不正确或者不能为空！");
        }

        function judgeagain() {
            var psd = document.getElementById("psd");
            var againpass = document.getElementById("againpass");
            againok = updateStatus("againerror", psd.value === againpass.value, "两次密码不一致！");
        }

        function judgeemail() {
            var email = document.getElementById("email");
            var pattern = /^[^@]+@[^@]+\.[^@]+$/;
            emailok = updateStatus("emailerror", pattern.test(email.value), "邮箱格式不正确！");
        }

        function judgephone() {
            var phone = document.getElementById("phone");
            phoneok = updateStatus("phoneerror", phone.value.length == 11, "电话号码必须为11位数字！");
        }

        function judge() {
            judgename();
            judgeage();
            judgepassword();
            judgeagain();
            judgeemail();
            judgephone();
            if (emailok && againok && passwordok && ageok && usernameok && phoneok) {
                alert("注册成功");
                window.location.href = '红酒品鉴页面.html'; // 修改为你的目标页面
            } else {
                alert("注册失败，请确保所有字段均正确填写。");
            }
        }
    </script>
</body>
</html>
