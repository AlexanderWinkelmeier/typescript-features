// arrow functions

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
};

// named function
function divide(a: number, b: number): number {
  return a / b;
}

// anomynous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void
const logger = (message: string): void => {
  console.log(message);
};

// never
const throwError = (message: string): never => {
  throw new Error(message);
};

// destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (todaysWeather: { date: Date; weather: string }): void => {
//   // destructuring inside the body
//   const { date, weather } = todaysWeather;
//   console.log(date);
//   console.log(weather);
// };

// destructuring inside the arguments
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
