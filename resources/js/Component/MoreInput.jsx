const MoreInput = ({onKeyup, value = null}) => {


    return (
        <>
            {/* Detail Input */}
            <div className="w-full ">
                <div className="bg-white   self-beetwe mt-2 rounded p-2 shadow-lg cursor-pointer">
                    <textarea
                        type="text"
                        placeholder="Type Here"
                        className="w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                        id="description"
                        onChange={(e) => onKeyup(e)}
                    >{value.description}</textarea>
                </div>
                <div className="flex  mt-2">
                    <div className="w-full ">
                        <label htmlFor="" className="text-slate-500">
                            Due date
                        </label>
                        <div className="bg-white w-full rounded p-2 shadow-lg cursor-pointer">
                            <input
                                type="date"
                                defaultValue={value.deadline}
                                placeholder="Type Here"
                                className="w-full border-none bg-inherit focus:ring-0 focus:outline-none  text-slate-500"
                                onChange={(e) => onKeyup(e)}
                                id="duedate"

                            />
                        </div>
                    </div>
                    <span className="mx-1"></span>
                    <div className="w-full">
                        <label for="countries" className="text-slate-500">
                            Priority
                        </label>
                        <div className="bg-white w-full rounded p-4 shadow-lg cursor-pointer">
                            <select
                            
                                id="priority"
                                className="w-full border-none bg-inherit focus:ring-0 focus:outline-none text-slate-500"
                                onChange={(e) => onKeyup(e)}
                                defaultValue={value.priority}
                            >
                                <option selected>Choose a Priority</option>
                                <option value="none">None</option>
                                <option value="low">low</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Detail Input */}
        </>
    );
};

export default MoreInput;
