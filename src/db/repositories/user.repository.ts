import { appDataSource } from "../datasource/datasource";
import { User } from "../entities/user.entity";

const userRepository = appDataSource.getRepository(User);

export const getUsers = async () => {
  return await userRepository.find();
};

export const createUser = async (username: string) => {
  const user = await userRepository.create({ username });
  return await userRepository.save(user);
};

export const deleteUser = async (id: number) => {
  return await userRepository.delete(id);
};
