
const UserBenefitsSection = () => {
    const userBenefits = [
        {
            title: 'Web Developers',
            description: 'Manage tasks, track progress, and collaborate on projects more efficiently.',
        },
        {
            title: 'Coder',
            description: 'Organize work schedules, prioritize tasks, and enhance team productivity.',
        },
        {
            title: 'Softwere Developer',
            description: 'Streamline financial tasks, monitor deadlines, and improve task management.',
        }
    ];

    return (
        <section className="bg-gray-100 pt-12 pb-20">
            <div  data-aos="fade-up" className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {userBenefits.map((userType, index) => (
                        <div  data-aos="fade-left" key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">{userType.title}</h3>
                            <p className="text-gray-700">{userType.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserBenefitsSection;