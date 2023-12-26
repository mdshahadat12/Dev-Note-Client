import dayjs from "dayjs";
import useAllTasks from "./useAllTasks";

const useOngoingFilter = () => {
    const { tasks, refetch } = useAllTasks()

    const date = dayjs().format("YYYY-MM-DD");

    const ongoing = tasks?.filter(item => item.deadline === date || item.status === "ongoing")

    return (
        {
            ongoing,
            refetch
        }
    )
};

export default useOngoingFilter;