// ●  დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი
function calculation(...number) {
  if (number.length <= 0) {
    console.log("Please enter more than 2 digits");
  } else {
    const sumFirstTwo = number[0] + number[1];
    const elseMultiplication = number
      .slice(2)
      .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return [sumFirstTwo, elseMultiplication];
  }
}
const result = calculation(1, 3, 4, 5, 5, 0);
console.log(result);

// ● დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
// შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
// ველი არ არსებობს უნდა დაბრუნდეს
// undefined

const user = {
  banks: [
    {},
    {},
    {
      adress: {
        city: "tbilisi",
      },
    },
  ],
};
function getCity(user) {
  if (bank && bank[2] && bank[2].adress) {
    const { city } = bank[2].adress;
    return city;
  } else {
    return undefined;
  }
}

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი

const user1 = {
  firstname: "tornike",
  lastname: "khvadagiani",
  age: 25,
  owner: {
    fullName: "james ",
    address: {
      country: "georgia",
      city: "tbilisi",
    },
  },
};

function user2(user1) {
  const copyObject = {
    ...user1,
    owner: {
      ...user1.owner,
    },
    address: {
      ...user1.address,
    },
    return: copyObject,
  };
}
