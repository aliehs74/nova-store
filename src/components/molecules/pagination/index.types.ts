export type TPaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  customId: string;
};
