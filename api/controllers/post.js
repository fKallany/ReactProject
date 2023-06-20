import { db } from '../db.js';

export const getPosts = (_, res) => {
  const q = `select p.id 'idpost', p.title, p.body, p.created, u.id 'iduser', u.nickname, u.email from posts p inner join users u on u.id = p.user_id;`;

  db.query(q, (err, data) => {
    if (err) return red.json(err);

    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  const q =
    `INSERT INTO posts(title, body, user_id, created) VALUES(?)`;

  const values = [
    req.body.title,
    req.body.body,
    req.body.user_id,
    req.body.created = 'now()',
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('User created successfully.');
  });
};

export const updatePost = (req, res) => {
  const q =
    `UPDATE posts SET 'title' = ?, 'body' = ?, 'user_id' = ?}, 'updated' = ? WHERE 'id' = ?`;

  const values = [
    req.body.title,
    req.body.body,
    req.body.user_id,
    req.body.updated = 'now()',
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('User updated successfully.');
  });
};

export const deletePost = (req, res) => {
  const q = 'DELETE FROM posts WHERE `id` = ?';

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json('User deleted successfully.');
  });
};
