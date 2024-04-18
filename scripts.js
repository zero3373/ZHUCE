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