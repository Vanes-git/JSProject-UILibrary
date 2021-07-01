import $ from "./lib/lib";

$("#trigger").click(() =>
    $("#trigger").createModal({
        text: {
            title: "Modal Title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam  corporis? Dolorem pariatur magnam distinctio  perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!",
        },
        btns: {
            count: 3,
            settings: [
                ["Close", ["btn-danger", "mr-10"], true],
                [
                    "Save changes",
                    ["btn-success"],
                    false,
                    () => {
                        alert("Данные сохранены");
                    },
                ],
                [
                    "Another btn",
                    ["btn-warning", "ml-10"],
                    false,
                    () => {
                        alert("Hello World");
                    },
                ],
            ],
        },
    })
);
