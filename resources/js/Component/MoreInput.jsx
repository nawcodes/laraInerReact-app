const MoreInput = () => {
    return (
        <>
            {/* Detail Input */}
            <div className="w-full">
                <div className="bg-white   self-beetwe mt-2 rounded p-2 shadow-lg cursor-pointer">
                    <textarea
                        type="text"
                        placeholder="Type Here"
                        className="w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                    ></textarea>
                </div>
                <div className="flex  mt-2">
                    <div className="w-full ">
                        <label htmlFor="" className="text-slate-500">
                            Due date
                        </label>
                        <div className="bg-white w-full rounded p-2 shadow-lg cursor-pointer">
                            <input
                                type="date"
                                placeholder="Type Here"
                                className="w-full border-none bg-inherit focus:ring-0 focus:outline-none  text-slate-500"
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
                                id="countries"
                                className="w-full border-none bg-inherit focus:ring-0 focus:outline-none text-slate-500"
                            >
                                <option selected>Choose a Priority </option>
                                <option value="none">None</option>
                                <option value="low">Low</option>
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
