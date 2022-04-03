
const   id = document.querySelector('#id'),
        name = document.querySelector('#name'),
        psword = document.querySelector('#psword'),
        confirmPsword = document.querySelector('#confirm-psword')
        registerBtn = document.querySelector('button');

registerBtn.addEventListener('click', register);

function register() {
    if (psword.value !== confirmPsword.value)  {
        psword.value = null;
        confirmPsword.value = null;
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id: id.value,
        psword: psword.value,
        name: name.value,
    };

    fetch('/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/login';
        } else {
            alert(res.msg);
        }
    })
    .catch((res) => {
        console.error('회원등록 중 에러 발생');
    });
}