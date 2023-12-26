import useImportantFilter from "../../../Hooks/useImportantFilter";
import ListCard from "../Shared/ListCard";

const ImportantTasks = () => {
    const { important } = useImportantFilter();

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center">Important Tasks</h2>

            <div className="list grid grid-cols-1 gap-4 w-fit mx-auto my-10">
                {
                    important?.map(item => <ListCard task={item} key={item._id}></ListCard>)
                }
            </div>
        </div>
    );
};

export default ImportantTasks;