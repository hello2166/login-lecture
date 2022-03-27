

const users = {
    id: ['smartmon','hello2166','honkvvv'],
    psword: ['1212','0202','2121'],
}

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
};

const process = {
    login: (req, res) => {
        const   id = req.body.id,
                psword = req.body.psword;
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                    msg: '로그인 성공',
                })
            }
        }
        return res.json({
            success: false,
            msg: '로그인 실퍠',
        })
    },
}

module.exports = {
    output,
    process,
}
