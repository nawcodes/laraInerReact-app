const MoreInput = () => {
    return (
        <>
            {/* Detail Input */}
            <div className="bg-white lg:w-1/3 w-3/4  self-beetwe mt-2 rounded p-2 shadow-lg cursor-pointer">
                <textarea
                    type="text"
                    placeholder="Type Here"
                    className="w-full border-none bg-inherit focus:ring-0 focus:outline-none"
                ></textarea>
            </div>
            <div className="flex lg:w-1/3 w-3/4 mt-2">
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
                        Select an option
                    </label>
                    <div className="bg-white w-full rounded p-4 shadow-lg cursor-pointer">
                        <select
                            id="countries"
                            className="w-full border-none bg-inherit focus:ring-0 focus:outline-none text-slate-500"
                        >
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* End Detail Input */}
        </>
    );
};


export default MoreInput;