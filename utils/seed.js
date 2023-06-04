const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);
const users = [
  {
    username: "Bill",
    email: "admin@example.com"
  },

  {
    username: "Jon",
    email: "jon@example.com"
  }
]

const thoughts = [
  {
    thoughtText: "alsdkfjd",
    username: "Bill"
  },

  {
    thoughtText: "asdfa",
    username: "Jon"
  }
]
connection.once('open', async () => {
  console.log('connected');

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Drop existing user
  await User.deleteMany({});

  // Add user to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
