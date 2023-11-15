import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Hoang Anh',
        email: 'hoanganh@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name: 'Bao Linh',
        email: 'baolinh@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    }
];

export default users;
