document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            // 在這裡，`this` 指的就是觸發事件的 input 元素

            // 檢查輸入框的值是否不為空
            if (this.value.trim() !== '') {
                // 如果有內容，就對 input 本身加上 .has-content 類別
                this.classList.add('has-content');

            } else {
                // 如果為空，就對 input 本身加上 .no-content 類別
                this.classList.remove('has-content');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');

    const confirmPasswordSpan = document.querySelector('#confirm_password ~ span');


    function validatePasswords() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        //.trim()移除字串兩端的空白字元。
        // 如果確認密碼欄位為空，不啟用確認密碼欄位
        if (passwordValue.trim() === '' || !passwordInput.validity.valid) {
            confirmPasswordInput.disabled = true;
            confirmPasswordInput.disabled = true;
            confirmPasswordInput.value = '';
            confirmPasswordInput.setCustomValidity('');
            confirmPasswordSpan.textContent = 'Conform Password';
        }
        else {
            confirmPasswordInput.disabled = false;
            // 檢查密碼是否相符
            if (confirmPasswordValue.trim() !== '') {
                // confirmPasswordSpan.textContent = 'Conform Password';


                if (passwordValue === confirmPasswordValue) {
                    confirmPasswordInput.setCustomValidity('');
                    confirmPasswordSpan.textContent = "密碼相符";
                } else {
                    confirmPasswordInput.setCustomValidity('密碼不相符，請再次確認。');
                    confirmPasswordSpan.textContent = "密碼不相符，請再次確認";
                }
            }

            else {
                // 如果確認密碼欄位是空的，清空錯誤提示
                confirmPasswordInput.setCustomValidity('Conform Password 為必填');
                confirmPasswordSpan.textContent = 'Conform Password';
            }
        }
    }

    confirmPasswordInput.disabled = true;
    // 監聽兩個欄位的 'input' 事件，確保驗證隨時更新
    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);
});


document.addEventListener('DOMContentLoaded', function () {

    const emailInput = document.getElementById('user_email');
    const emailSpan = document.querySelector('#user_email ~ span');

    const nameInput = document.getElementById('full_name');
    const nameSpan = document.querySelector('#full_name ~ span');

    const phoneInput = document.getElementById('phone');
    const phoneSpan = document.querySelector('#phone ~ span');

    const passwordInput = document.getElementById('password');
    const passwordSpan = document.querySelector('#password ~ span');

    function checkValidity(Input, span, str) {
        console.log(Input);
        span.textContent = ""; // 先清空所有訊息，以避免錯誤殘留

        if (Input.validity.valid) {// 如果有效，不需要任何提示

            span.textContent = str + "  ok!";
        }

        else {
            const validityState = Input.validity;

            if (validityState.valueMissing) {
                span.textContent = str + " 為必填！";
            }

            else if (validityState.typeMismatch) {
                span.textContent = str + " 格式不符！";
            }

            else {
                span.textContent = str + " 格式不符！";
            }
        }
    }

    // 監聽輸入事件

    nameInput.addEventListener('input', () => {
        checkValidity(nameInput, nameSpan, "Full name");
    });


    emailInput.addEventListener('input', () => {
        checkValidity(emailInput, emailSpan, "Email");
    });


    phoneInput.addEventListener('input', () => {
        checkValidity(phoneInput, phoneSpan, "Phone");
    });


    passwordInput.addEventListener('input', () => {
        checkValidity(passwordInput, passwordSpan, "Password");
    });

});