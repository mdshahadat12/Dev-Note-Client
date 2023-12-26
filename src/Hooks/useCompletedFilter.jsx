import useAllTasks from "./useAllTasks";

const useCompletedFilter = () => {
    const { tasks, refetch } = useAllTasks()

    const completed = tasks?.filter(item => item.status === "completed")

    return (
        {
            completed,
            refetch
        }
    )

};

export default useCompletedFilter;