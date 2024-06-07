// Utility Types

// 1 - Partial Utility Types
interface School {
  name: string;
  class: number;
  readonly student: boolean;
}

const getPartialName = (std: School, props: Partial<School>): School => {
  return { ...props, ...std };
};

console.log(
  getPartialName({ name: "RRJ", class: 2, student: false }, { name: "RIYA" })
);

// 2 - Required & Readonly

const getReqdName = (props: Required<School>): School => {
  return { ...props };
};

const student: School = {
  name: "David",
  class: 10,
  student: true,
};

console.log(getReqdName(student));
// student.student = false; // cannot assign value to readonly property -> Error
console.log(getReqdName(student));

// 3 -  Record Utility
// To assign properties of one interface to that of others

type data = "RRJ" | "HRJ";
type age = 19 | 15 | 18 | 14;

const assignVal: Record<data, age> = {
  RRJ: 18,
  HRJ: 14,
};

// 4 - Pick & Omit

type student1 = Pick<School, "name" | "class">;
type student2 = Omit<School, "name" | "student">;

const stdt1: student1 = {
  name: "Hello",
  class: 9,
};

const stdt2: student2 = {
  class: 10,
  // name: "RRJ" -> Error: Since name has been ommitted
};

// 5 - Exclude & Extract

// 6 - Non-nullable -> removes null & undefined

// 7 - ReturnType - useful when we do type declaration after object declaration

const func = (title: string): { name: string } => {
  return { name: title };
};

type stringTypeOfFunc = ReturnType<typeof func>;
console.log(func("RRJ"));

// 8 - Parameters - useful when assigning the parameters to a type after declaration

type newType = Parameters<typeof func>;

const anotherFunc = (newType: newType): { name: string } => {
  const [title] = newType;
  return { name: title };
};

console.log(anotherFunc(["RRJ"]));

// 9 - Awaited
// Helps us with the returnType of promise

interface Joke {
  attachments: [
    {
      fallback: string;
      footer: string;
      text: string;
    }
  ];
  response_type: string;
  username: string;
}

const fetchDadJokes = async (): Promise<Joke[]> => {
  const data = await fetch("https://icanhazdadjoke.com/slack")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      if (error instanceof Error) {
        // instanceof used to check if error is an object of class Error
        console.log(error.message);
      }
    });
  return data;
};

// typeof fetchDadJokes is a Promise<Joke[]>
// ReturnType of typeof fetchDadJokes is Joke[]
// this type is stored in typeofDadJokes after awaiting the promise function runs
type typeofDadJokes = Awaited<ReturnType<typeof fetchDadJokes>>;

fetchDadJokes().then((response)=>{
    console.log(response);
});