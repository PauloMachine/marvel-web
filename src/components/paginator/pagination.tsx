import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Flex from "../ui/flex";
import { usePagination } from "./pagination.context";
import { useTranslation } from "react-i18next";

const Pagination = () => {
  const { t: translate } = useTranslation();
  const { page, total, limit, setPage } = usePagination();
  const totalPages = Math.ceil(total / limit);

  if (total === 0) return null;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      gap="10px"
      style={{ padding: 20 }}
    >
      <GrFormPrevious
        size={30}
        color="fff"
        onClick={() => handlePageChange(page - 1)}
        style={{
          visibility: page === 1 ? "hidden" : "visible",
          cursor: "pointer",
        }}
      />
      <span style={{ color: "#fff" }}>
        {translate("paginationDescribe", { page, totalPages })}
      </span>
      <GrFormNext
        size={30}
        color="fff"
        onClick={() => handlePageChange(page + 1)}
        style={{
          visibility: page === totalPages ? "hidden" : "visible",
          cursor: "pointer",
        }}
      />
    </Flex>
  );
};

export default Pagination;
