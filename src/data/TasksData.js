import { toLocaleISOString } from "../utils/date";

const dates = [];
for (let i = 0; i < 6; i++) {
    dates.push(new Date().getTime() + Math.floor(Math.random() * 1000000000));
}

const TasksTodo = [
    {
        id: "cc939c4a-203d-47bd-b9b8-9ab09687ff8f",
        title: "Todo1",
        dueDate: {
            key: dates[0],
            value: toLocaleISOString(
                new Date(dates[0]).toISOString().slice(0, 16)
            ),
        },
        addingDate: {
            key: new Date().getTime(),
            value: new Date(),
        },
        priority: 1,
        color: "#20B2AA",
        description: "This is a sample description for todo number one.",
        done: false,
        pinned: false,
        hide: false,
    },
    {
        id: "89f0b4e2-f52b-4b46-b3b3-4879e5f5058c",
        title: "Todo2",
        dueDate: {
            key: dates[1],
            value: toLocaleISOString(
                new Date(dates[1]).toISOString().slice(0, 16)
            ),
        },
        addingDate: {
            key: new Date().getTime(),
            value: new Date(),
        },
        priority: 3,
        color: "#778899",
        description: "This is a sample description for todo number two.",
        done: false,
        pinned: false,
        hide: false,
    },
    {
        id: "fcf38ce5-570a-467f-9471-8fc870781ea4",
        title: "Todo3",
        dueDate: {
            key: dates[2],
            value: toLocaleISOString(
                new Date(dates[2]).toISOString().slice(0, 16)
            ),
        },
        addingDate: {
            key: new Date().getTime(),
            value: new Date(),
        },
        priority: 1,
        color: "#E0FFFF",
        description: "This is a sample description for todo number three. ",
        done: false,
        pinned: true,
        hide: false,
    },
    {
        id: "566fce1d-c3d4-4d16-b8a9-a61ba1c06e2f",
        title: "Todo4",
        dueDate: {
            key: dates[3],
            value: toLocaleISOString(
                new Date(dates[3]).toISOString().slice(0, 16)
            ),
        },
        addingDate: {
            key: new Date().getTime(),
            value: new Date(),
        },
        priority: 2,
        color: "#FFA07A",
        description: "This is a sample description for todo number four.",
        done: false,
        pinned: false,
        hide: false,
    },
    {
        id: "cc939c4a-203d-47td-b9b8-9ab09687ff8f",
        title: "Todo5",
        dueDate: {
            key: dates[4],
            value: toLocaleISOString(
                new Date(dates[4]).toISOString().slice(0, 16)
            ),
        },
        addingDate: {
            key: new Date().getTime(),
            value: new Date(),
        },
        priority: 2,
        color: "#B0C4DE",
        description: "This is a sample description for todo number five.",
        done: false,
        pinned: true,
        hide: false,
    },
    {
        id: "89f0b4e2-f52b-4bt6-b3b3-4879e5f5058c",
        title: "Todo6",
        dueDate: {
            key: dates[5],
            value: toLocaleISOString(
                new Date(dates[5]).toISOString().slice(0, 16)
            ),
        },
        addingDate: {
            key: new Date().getTime(),
            value: new Date(),
        },
        priority: 3,
        color: "#FAFAD2",
        description: "This is a sample description for todo number six.",
        done: false,
        pinned: true,
        hide: false,
    },
];

export default TasksTodo;
