export const typeDefs = `#graphql
  type Query {
    getTasksByDay(id: ID!): [Task]
    getDays: [Day]
    getDayById(id: ID!): Day
    getTasks: [Task]
    getDayByDate(date: String!): Day  
  },

  type Day {
    id: ID!
    title: String!
    description: String
    hoursWorked: String!
    date: String!
  }

  type Task {
    id: ID!
    title: String!
    description: String
    hoursWorked: String
    belongedDay: ID!
    startedHour:String
  }

  input DayInput {
    title: String!
    description: String
    date: String!
  }

  input TaskInput {
    title: String
    description: String
    belongedDay: ID!
    startedHour: String
  }

 type Mutation {
    createDay(dayInput: DayInput): Day!
    deleteDay(ID:ID!): Boolean
    createTask(taskInput: TaskInput): Task!
    deleteTask(ID:ID!): Boolean
 }

`;
