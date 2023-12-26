import useAllTasks from "../../../Hooks/useAllTasks";
import ListCard from "../Shared/ListCard";

const AllTasks = () => {
    const { tasks } = useAllTasks()

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center">All Tasks</h2>

            <div className="list grid grid-cols-1 gap-4 w-fit mx-auto my-10">
                {
                    tasks?.map(item => <ListCard task={item} key={item._id}></ListCard>)
                }
            </div>
        </div>
    );
};

export default AllTasks;