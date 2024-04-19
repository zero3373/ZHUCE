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

function judge() {
    var emailok = false, againok = false, passwordok = false, ageok = false, usernameok = false, phoneok = false;
    
    var name = document.getElementById("username");
    var patternName = /^[A-Za-z0-9]{6,10}$/;
    usernameok = updateStatus("nameerror", patternName.test(name.value), "用户格式不正确！");

    var age = document.getElementById("age");
    ageok = updateStatus("ageerror", age.value >= 18, "年龄不能小于18岁！");

    var psd = document.getElementById("psd");
    var patternPsd = /^(?=.*\d)(?=.*[!@#$%^&*]).{6,10}$/;
    passwordok = updateStatus("passworderror", patternPsd.test(psd.value), "密码格式不正确或者不能为空！");

    var againpass = document.getElementById("againpass");
    againok = updateStatus("againerror", psd.value === againpass.value, "两次密码不一致！");

    var email = document.getElementById("email");
    var patternEmail = /^[^@]+@[^@]+\.[^@]+$/;
    emailok = updateStatus("emailerror", patternEmail.test(email.value), "邮箱格式不正确！");

    var phone = document.getElementById("phone");
    phoneok = updateStatus("phoneerror", phone.value.length === 11, "电话号码必须为11位数字！");

    if (emailok && againok && passwordok && ageok && usernameok && phoneok) {
        return true; // 所有验证通过，表单将提交
    } else {
        alert("注册失败，请确保所有字段均正确填写。");
        return false; // 阻止表单提交
    }
}
