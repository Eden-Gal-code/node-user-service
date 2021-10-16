import { Sequelize } from "sequelize";
import { default as dotenv } from "dotenv";
dotenv.config({ path: "./.env" });

const getConnection = async () => {
  const sequelize = new Sequelize(
    `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@localhost:5432/color-identifier`
  );
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  return sequelize;
};

export default getConnection;
