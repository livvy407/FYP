export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 280,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        username: 'Samten Wangmo',
        img: "https://media.licdn.com/dms/image/D5603AQEzzEXPzRqbkw/profile-displayphoto-shrink_200_200/0/1666716349458?e=1683158400&v=beta&t=8Y1c-Ujs2LcnDu5X9vrtQxKl2uLx7X2m389JLVJbmdA",
        status: "active",
        email: "12190073.gcit@rub.edu.bt",
        age: 24,
    },
    {
        id: 2,
        username: "Sonam Choden",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7jxFdvkzDAsWEQo_tkzv-Cs1b7nDG9hKPqHQXqOpPA&s",
        email: "12190077.gcit@rub.edu.bt",
        status: "active",
        age: "24",
    },
    {
        id: 3,
        username: "Thinley Zangmo",
        img: "https://www.gcit.edu.bt/wp-content/uploads/sites/3/2022/06/Thinley_Zangmo.png",
        email: "12190090.gcit@rub.edu.bt",
        status: "pending",
        age: "24",
    },
    {
        id: 4,
        username: "Kezang Dorji",
        img: "https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-6/308759238_3332009940400998_3599963778411352109_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IGbOwFlvIDcAX9EVO4i&_nc_ht=scontent.fpbh1-1.fna&oh=00_AfAWG_hCmPb2JCM2vSBEiSl5N3YA3j-T6ow7LfKOyvFjzQ&oe=64295296",
        email: "12190059.gcit@rub.edu.bt",
        status: "active",
        age: 25,
    },
    {
        id: 5,
        username: "Ngawang Yeshey",
        img: "https://www.gcit.edu.bt/wp-content/uploads/sites/3/2021/05/NGAWANG-YESHEY.jpg",
        email: "12190067.gcit@rub.edu.bt",
        status: "passive",
        age: 24,
    },
    {
        id: 6,
        username: "Soname Wangmo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVvpem7nvCWn2JY5nKoZ6RvPhWxXTrRlFeyxAdStHFy8YnkeG7YiAR7EEhCYZBGz56UQ&usqp=CAU",
        email: "sonamwangmo.gcit@rub.edu.bt",
        status: "active",
        age: 34,
    },
]
