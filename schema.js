export const typeDefs = `#graphql
  type Query {
    hello: String
    getTasksByDay(id: ID!): [Task]
    getDays: [Day]
    getDayById: Day
    getTasks: [Task]
  },

  type Day {
    id: ID!
    title: String!
    description: String
    hoursWorked: String!
  }

  type Task {
    id: ID!
    title: String!
    description: String
    hoursWorked: String
    belongedDay: ID!
  }

  input DayInput {
    title: String!
    description: String
  }

  input TaskInput {
    title: String
    description: String
    belongedDay: ID!
  }

 type Mutation {
    createDay(dayInput: DayInput): Day!
    deleteDay(ID:ID!): Boolean
    createTask(taskInput: TaskInput): Task!
    deleteTask(ID:ID!): Boolean
 }

`;