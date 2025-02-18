import { apiGet } from "../../../api";

export const URL = "/users";

export type TUser = {
  id: number;
  name: string;
};

export type TGetUsersResponse = {
  users: TUser[];
};

export const getResponsible = async ({
  mock = false,
}: {
  mock?: boolean;
}): Promise<TUser[]> => {
  if (mock) {
    return new Promise((resolve) => resolve(RESPONSIBLES));
  }
  const { data } = await apiGet(URL);
  return data.users;
};

export const RESPONSIBLES: TUser[] = [
  { id: 1, name: "Владислав" },
  { id: 2, name: "Валентин" },
  { id: 3, name: "Артём" },
  { id: 4, name: "Юрий" },
  { id: 5, name: "Виктория" },
];
