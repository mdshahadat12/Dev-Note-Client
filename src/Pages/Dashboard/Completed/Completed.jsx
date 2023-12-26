import useCompletedFilter from "../../../Hooks/useCompletedFilter";
import ListCard from "../Shared/ListCard";

const Completed = () => {
    const { completed } = useCompletedFilter()

    const sorted = completed.sort((a, b) => (a.status === 'completed' ? 1 : b.status === 'completed' ? -1 : 0));

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center">Completed tasks</h2>

            <div className="list grid grid-cols-1 gap-4 w-fit mx-auto my-10">
                {
                    sorted?.map(item => <ListCard task={item} key={item._id}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Completed;