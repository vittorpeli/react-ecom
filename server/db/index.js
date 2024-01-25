import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "myphotos",
});

client.connect();

const query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
}

export default { query };