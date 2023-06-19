import { db } from '../db.js';

export const getPosts = (_, res) => {
  const q = "select p.id 'idpost', p.title, p.body, p.created, u.id 'iduser', u.nickname, u.email from posts p inner join users u on u.id = p.user_id;";

  db.query(q, (err, data) => {
    if (err) return red.json(err);

    return res.status(200).json(data);
  });
};
