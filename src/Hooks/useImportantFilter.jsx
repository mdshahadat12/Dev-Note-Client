import useAllTasks from "./useAllTasks";

const useImportantFilter = () => {
    const { tasks, refetch } = useAllTasks()

    const important = tasks?.filter(item => item.priority === "high")

    return (
        {
            important,
            refetch
        }
    )
};

export default useImportantFilter;