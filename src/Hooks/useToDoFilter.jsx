import useAllTasks from "./useAllTasks";

const useToDoFilter = () => {
    const { tasks, refetch } = useAllTasks()

    const todo = tasks?.filter(item => item.status === "to-do")

    return (
        {
            todo,
            refetch
        }
    )

};

export default useToDoFilter;