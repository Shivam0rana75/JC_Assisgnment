import sqlite3 from "sqlite3";
import { open } from "sqlite";


export const db = await open({
  filename: "./data.db",
  driver: sqlite3.Database,
});


await db.exec(`
  CREATE TABLE IF NOT EXISTS form_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    user_type TEXT NOT NULL,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
