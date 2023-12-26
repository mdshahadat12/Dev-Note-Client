import dayjs from "dayjs";
import useOngoingFilter from "../../../Hooks/useOngoingFilter";
import ListCard from "../Shared/ListCard";

const Ongoing = () => {
    const { ongoing } = useOngoingFilter();
    const date = dayjs().format("DD MMM, YYYY, dddd").toUpperCase()

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center"> ongoing tasks</h2>
            <p className="font-bold text-center mt-1">TODAY: <span className="text-slate-500">{date}</span></p>
            <div className="list grid grid-cols-1 gap-4 w-fit mx-auto my-10">
                {
                    ongoing?.map(item => <ListCard task={item} key={item._id}></ListCard>)
                }
            </div>
        </div>
    );
};

export default Ongoing;