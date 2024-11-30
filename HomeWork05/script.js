function showInfo(text){
    console.log(text);
}
showInfo("Hw 05");
showInfo("========== Ex.1 ");

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    };

let val=Object.values(numbers);
const rezult=val.filter(item=>item >=3);
showInfo(rezult);

showInfo("========== Ex.2 ");

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2,    // вывести это число
            },
        },
        {
            userId: 5,  // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2",  // вывести этот текст
            rating: {
            likes:3,dislikes: 1,
        },
    },
],
};

showInfo(post.author);
let coments=post.comments;
showInfo(coments[0].rating.dislikes);
showInfo(coments[1].userId);
showInfo(coments[1].text);

showInfo("========== Ex.3 ");

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(item=>{
    item.price*=0.85;
})

showInfo(products);

showInfo("========== Ex.4 ");

const products_ex4 = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

showInfo(products_ex4[0].photos.length);
showInfo(products_ex4[1].photos.length);
showInfo(products_ex4.filter(item => item.photos && item.photos.length > 0));
showInfo(products_ex4.sort((a, b) => a.price -b.price));

showInfo("========== Ex.5 ");

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница","суббота", "воскресенье"];

const week={};
en.forEach((key,i)=>week[key]=ru[i]);
showInfo(week);