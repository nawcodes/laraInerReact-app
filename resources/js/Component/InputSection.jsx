const InputSection = () => {
    return (
        <>
            <div className="col-span-2 ">
                {/* input section */}
                <div className="w-full flex flex-row justify-center p-4">
                    <div className="self-center w-full">
                        <input
                            type="text"
                            className="w-full p-2 rounded-lg "
                            placeholder="You want do something? Write your title do :)"
                        />
                    </div>
                    <div className="self-center flex flex-row px-2">
                        <button className="p-2 bg-blue-700 rounded-lg text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                        <span class="px-1"></span>
                        <button className="p-2 bg-blue-700 rounded-lg text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full h-screen px-4 ">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <label htmlFor="">Description</label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className="w-full rounded-lg p-2"
                                placeholder="Its Optionaly ..."
                            ></textarea>
                        </div>
                        <div className="">
                            <div>
                                <label htmlFor="">Due Date</label>
                                <div class="flex">
                                    <button className="bg-blue-200 border-t-2   border-r-2 border-l-2 border-b-2 border-slate-600 p-2 rounded-l-lg">
                                        Today
                                    </button>
                                    <button className="bg-blue-200  border-slate-600 p-2 border-t-2  border-b-2">
                                        Tomorrow
                                    </button>
                                    <input
                                        type="date"
                                        className="p-2 rounded-r-lg border-t-2   border-r-2 border-b-2"
                                    />
                                </div>
                            </div>
                            <div className="mt-5 ">
                                <label htmlFor="">Priority</label>
                                <select
                                    name=""
                                    id=""
                                    className="w-full rounded p-1"
                                >
                                    <option value="high">High</option>
                                    <option value="low">Low</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputSection;
