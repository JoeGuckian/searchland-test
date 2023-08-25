import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
});
