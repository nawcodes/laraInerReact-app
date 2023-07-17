const ListTodo = () => {
    const lists = [
        {
            title: "Finish Presentation",
            description: "Prepare slides for upcoming meeting",
            priority: "high",
            dueDate: "2023-07-19",
        },
        {
            title: "Call Mom",
            description: "Check up on her",
            priority: "none",
            dueDate: "2023-07-17",
        },
        {
            title: "Pay Bills",
            description: "Clear pending utility bills",
            priority: "high",
            dueDate: "2023-07-18",
        },
        {
            title: "Send Birthday Gift",
            description: "Order a present for a friend",
            priority: "low",
            dueDate: "2023-07-22",
        },
        {
            title: "Write Blog Post",
            description: "Share insights on recent industry trends",
            priority: "none",
            dueDate: "2023-07-20",
        },
        {
            title: "Attend Webinar",
            description: "Learn about new marketing strategies",
            priority: "low",
            dueDate: "2023-07-19",
        },
        {
            title: "Fix Leaky Faucet",
            description: "Call plumber to repair the faucet",
            priority: "high",
            dueDate: "2023-07-21",
        },
        {
            title: "Buy Gift for Anniversary",
            description: "Find a special gift for my partner",
            priority: "low",
            dueDate: "2023-07-25",
        },
        {
            title: "Submit Expense Report",
            description: "Submit reimbursement request for business expenses",
            priority: "high",
            dueDate: "2023-07-18",
        },
        {
            title: "Plan Weekend Getaway",
            description: "Research and book accommodations for a short trip",
            priority: "none",
            dueDate: "2023-07-24",
        },
        {
            title: "Attend Yoga Class",
            description: "Join a yoga session for relaxation",
            priority: "low",
            dueDate: "2023-07-19",
        },
        {
            title: "Prepare Dinner",
            description: "Cook a healthy meal at home",
            priority: "none",
            dueDate: "2023-07-17",
        },
        {
            title: "Update Resume",
            description: "Revise resume with recent achievements",
            priority: "high",
            dueDate: "2023-07-20",
        },
        {
            title: "Buy Groceries",
            description: "Restock pantry and fridge",
            priority: "low",
            dueDate: "2023-07-18",
        },
        {
            title: "Send Meeting Agenda",
            description: "Share the agenda for the upcoming team meeting",
            priority: "high",
            dueDate: "2023-07-19",
        },
        {
            title: "Study for Exam",
            description: "Review course material for upcoming exam",
            priority: "high",
            dueDate: "2023-07-23",
        },
        {
            title: "Call Insurance Company",
            description: "Inquire about policy coverage",
            priority: "none",
            dueDate: "2023-07-18",
        },
        {
            title: "Clean Garage",
            description: "Organize and declutter the garage",
            priority: "low",
            dueDate: "2023-07-22",
        },
        {
            title: "Schedule Doctor Appointment",
            description: "Book an appointment for a check-up",
            priority: "none",
            dueDate: "2023-07-20",
        },
        {
            title: "Start New Project",
            description: "Begin planning for an upcoming project",
            priority: "high",
            dueDate: "2023-07-21",
        },
        {
            title: "Write Thank You Cards",
            description: "Express gratitude to colleagues and clients",
            priority: "low",
            dueDate: "2023-07-19",
        },
        {
            title: "Organize Digital Files",
            description: "Sort and categorize files on the computer",
            priority: "none",
            dueDate: "2023-07-23",
        },
        {
            title: "Buy Birthday Cake",
            description: "Order a cake for a friend's birthday",
            priority: "low",
            dueDate: "2023-07-21",
        },
        {
            title: "Submit Project Proposal",
            description: "Send the proposal to the client",
            priority: "high",
            dueDate: "2023-07-25",
        },
        {
            title: "Research Vacation Destinations",
            description: "Explore options for a future vacation",
            priority: "none",
            dueDate: "2023-07-24",
        },
        {
            title: "Attend Networking Event",
            description: "Expand professional connections",
            priority: "low",
            dueDate: "2023-07-20",
        },
        {
            title: "Renew Library Books",
            description: "Return or extend borrowed books",
            priority: "none",
            dueDate: "2023-07-18",
        },
        {
            title: "Fix Broken Chair",
            description: "Repair the chair in the study room",
            priority: "high",
            dueDate: "2023-07-22",
        },
        {
            title: "Buy New Shoes",
            description: "Find a pair of comfortable shoes",
            priority: "low",
            dueDate: "2023-07-21",
        },
        {
            title: "Send Follow-up Email",
            description: "Reach out to a potential client",
            priority: "high",
            dueDate: "2023-07-23",
        },
        {
            title: "Prepare Tax Documents",
            description: "Gather paperwork for tax filing",
            priority: "high",
            dueDate: "2023-07-25",
        },
        {
            title: "Water Plants",
            description: "Give plants a thorough watering",
            priority: "none",
            dueDate: "2023-07-19",
        },
        {
            title: "Write Thank You Note",
            description: "Express appreciation to a friend",
            priority: "low",
            dueDate: "2023-07-20",
        },
        {
            title: "Clean Windows",
            description: "Wipe and polish windows for a clear view",
            priority: "none",
            dueDate: "2023-07-24",
        },
        {
            title: "Prepare Presentation Slides",
            description: "Create slides for upcoming workshop",
            priority: "high",
            dueDate: "2023-07-23",
        },
        {
            title: "Buy Art Supplies",
            description: "Restock art materials for painting",
            priority: "low",
            dueDate: "2023-07-22",
        },
        {
            title: "Update Social Media Profiles",
            description: "Refresh bio and profile pictures",
            priority: "none",
            dueDate: "2023-07-18",
        },
        {
            title: "Schedule Dentist Appointment",
            description: "Book a dental check-up",
            priority: "none",
            dueDate: "2023-07-19",
        },
        {
            title: "Prepare Weekly Meal Plan",
            description: "Plan meals for the upcoming week",
            priority: "low",
            dueDate: "2023-07-24",
        },
        {
            title: "Review Project Proposal",
            description: "Provide feedback on a colleague's proposal",
            priority: "high",
            dueDate: "2023-07-25",
        },
        {
            title: "Buy New Headphones",
            description: "Find a durable pair of headphones",
            priority: "low",
            dueDate: "2023-07-22",
        },
        {
            title: "Send Thank You Email",
            description: "Express gratitude to a mentor",
            priority: "high",
            dueDate: "2023-07-23",
        },
        {
            title: "Organize Closet",
            description: "Declutter and arrange clothes",
            priority: "none",
            dueDate: "2023-07-21",
        },
        {
            title: "Pay Credit Card Bill",
            description: "Clear outstanding balance",
            priority: "high",
            dueDate: "2023-07-25",
        },
        {
            title: "Buy Office Supplies",
            description: "Restock essential items for the workspace",
            priority: "low",
            dueDate: "2023-07-24",
        },
        {
            title: "Practice Guitar",
            description: "Play and learn new chords",
            priority: "none",
            dueDate: "2023-07-20",
        },
        {
            title: "Submit Vacation Request",
            description: "Apply for time off from work",
            priority: "high",
            dueDate: "2023-07-23",
        },
        {
            title: "Schedule Car Maintenance",
            description: "Book an appointment for a car service",
            priority: "none",
            dueDate: "2023-07-21",
        },
        {
            title: "Buy Gifts for Kids",
            description: "Purchase presents for upcoming children's party",
            priority: "low",
            dueDate: "2023-07-22",
        },
    ];

    return (
        <>
            {/* List Section */}
            <div className="bg-slate-300 flex flex-col max-h-screen overflow-auto">
                <div class="py-2 pl-2 m-2">
                    <input
                        type="text"
                        className="w-full rounded"
                        placeholder="Search Your History"
                    />
                </div>
                {lists.map((list, index) => {
                    return (
                    <div class="py-2 pl-2 m-2 border-l-8 border-red-500 bg-blue-700 cursor-pointer" key={index}>
                        <h6 className="text-white font-bold">{list.title}</h6>
                    </div>
                    )
                })}
                {/* <div class="py-2 pl-2 m-2 border-l-8 border-red-500 bg-blue-700 ">
                    <div class="px-1 mt-3">
                        <input
                            type="text"
                            className="w-[98%] rounded-sm mb-2"
                            placeholder="Hey! Your Forgot The Title."
                        />
                        <textarea
                            name=""
                            id=""
                            cols="20"
                            rows="10"
                            className="w-[98%] rounded-sm p-2"
                            placeholder="Is good to deep write . . ."
                        ></textarea>
                        <div className="my-2">
                            <label htmlFor="" className="text-white font-bold">
                                Due Date
                            </label>
                            <div class="flex w-[98%]">
                                <button className="bg-slate-200 border-r-2 border-slate-600 p-2 rounded-l-sm">
                                    Today
                                </button>
                                <button className="bg-slate-200  200 border-r- border-slate-600 p-2">
                                    Today
                                </button>
                                <input
                                    type="date"
                                    className="p-2 rounded-r-sm w-full"
                                />
                            </div>
                        </div>
                        <div className="my-2">
                            <div class="flex w-[98%]">
                                <button className="bg-green-400 p-2 w-full">
                                    Save
                                </button>
                                <button className="bg-red-500 p-2 w-full">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-2 pl-2 m-2 border-l-8 border-red-500 bg-blue-700 cursor-pointer">
                    <h6 className="text-white font-bold">Title</h6>
                </div> */}
            </div>
        </>
    );
};

export default ListTodo;
