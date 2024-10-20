export type TSubCategory = {
  id: number;
  name: string;
  categoryId: number;
};

export type TCategory = {
  id: number;
  name: string;
  svg: string;
  subCategories: TSubCategory[];
};
