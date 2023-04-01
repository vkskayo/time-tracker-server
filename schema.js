export const typeDefs = `#graphql
  type Query {
    getTasksByDay(date: String!): [Task]
    getDays: [Day]
    getDayById(id: ID!): Day
    getTasks: [Task]
    getDayByDate(date: String!): Day  
    getCurrentWeek(monday: String, today: String ) : [Day]!
  },

  type Day {
    id: ID!
    title: String!
    description: String
    hoursWorked: String!
    date: String!
    closed: Boolean
  }

  type Task {
    id: ID!
    title: String!
    description: String
    hoursWorked: String
    belongedDay: String!
    startedHour:String!
    isStarted: Boolean
  }

  input DayInput {
    title: String!
    description: String
    date: String!
  }

  input TaskInput {
    title: String
    description: String
    belongedDay: String!
    startedHour: String
  }

  input TaskUpdateInput{
    startedHour: String
    isStarted: Boolean!
    hoursWorked: String
  }

  input DayUpdateInput{
    hoursWorked: String
    closed: Boolean
  }

 type Mutation {
    createDay(dayInput: DayInput): Day!
    deleteDay(ID:ID!): Boolean
    createTask(taskInput: TaskInput): Task!
    deleteTask(ID:ID!): Boolean
    updateTask(ID:ID!, taskUpdateInput: TaskUpdateInput): Task
    updateDay(date: String!, dayUpdateInput: DayUpdateInput): Boolean
 }

`;
