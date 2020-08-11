const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

// change mongoose.connect = ef_conference

//
// "mongodb://efadmin:efadmin2468@35.182.202.94:27017/efconference"

mongoose.connect("mongodb://localhost:27017/main", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
	console.log("Successfully connected to MongoDB!");
});

const app = express();
app.use(cors());

// Mongoose Schema
const roomSchema = new mongoose.Schema({
	title: String,
	description: String,
	group: String,
	owner: String,
});
const userSchema = new mongoose.Schema({
	name: String,
	password: String,
	group: String,
	role: String,
});

const userModel = mongoose.model("User", userSchema);
const roomModel = mongoose.model("Room", roomSchema);

const typeDefs = buildSchema(`
  type Query {
    rooms: [Room!]
    room(id: ID!): Room!
    users: [User!]
    user(name: String! password: String!): User!
    userRooms(name: String!): [Room!]
  }

  type Mutation {
    addUser(name: String! password: String! group: String! role: String!): User!
    addRoom(title: String! description: String! group: String! owner: String!): Room!
    deleteUser(name: String! password: String!): User!
    deleteRoom(id: ID!) : Room!
    updateRoom(id: ID! title: String description: String group: String owner: String) : Room!
  } 

  type Room {
    id: ID!
    title: String!
    description: String!
    owner: String!
    group: String!

  }

  type User {
    id: ID!
    name: String!
    password: String!
    group: String!
    role: String!
  }

`);

// GraphQL Root Resolver functions
const root = {
	rooms: async () => {
		const documents = await roomModel.find();
		console.log(documents);
		return documents;
	},
	room: async ({ id }) => {
		const document = await roomModel.findById(id);
		console.log(document);
		return document;
	},
	users: async () => {
		const documents = await userModel.find();
		console.log(documents);
		return documents;
	},
	user: async ({ name, password }) => {
		const document = await userModel.findOne({
			name: name,
			password: password,
		});
		console.log(document);
		return document;
	},
	userRooms: async ({ name }) => {
		const documents = await roomModel.find({ owner: name });
		console.log(documents);
		return documents;
	},
	addUser: async ({ name, password, group, role }) => {
		const document = new userModel({
			name: name,
			password: password,
			group: group,
			role: role,
		});
		await document.save((err, user) => {
			if (err) return console.error(err);
			console.log(`User ${user.name} added to database`);
		});
		return document;
	},
	addRoom: async ({ title, description, group, owner }) => {
		const document = new roomModel({
			title: title,
			description: description,
			group: group,
			owner: owner,
		});
		await document.save((err, room) => {
			if (err) return console.error(err);
			console.log(
				`Room ${room.title} group: ${room.group} added to database`
			);
		});
		return document;
	},
	deleteUser: async ({ name, password }) => {
		const document = await userModel.findOneAndDelete({
			name: name,
			password: password,
		});
		console.log(`User ${name} deleted from database`);
		return document;
	},

	deleteRoom: async ({ id }) => {
		const document = await roomModel.findByIdAndDelete(id);
		console.log(document);
		console.log(`room ${id} was deleted from database`);
		return document;
	},

	updateRoom: async ({ id, title, description, group, owner }) => {
		const update = {
			title: title,
			description: description,
			group: group,
			owner: owner,
		};
		const document = await roomModel.findByIdAndUpdate(
			{ _id: id },
			update,
			(err, doc) => {
				if (err) console.error(err);
				console.log(doc);
				return doc;
			}
		);
		console.log(document);

		return document;
	},
};

app.use(
	"/graphql",
	graphqlHTTP({
		schema: typeDefs,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log(
		`Running a GraphQL API server at http://localhost:${PORT}/graphql`
	);
});
