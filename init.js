// initialize database

//require mongoose
const mongoose=require("mongoose");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat')
}
main().catch(err=>console.log(err));

const Chat = require("./models/chats.js");  //require chat model

//insert data
Chat.insertMany([
    {
      from: "Max",
      to: "Ray",
      message:
        "Hey Ray, I’ve been meaning to catch up with you for a while. Want to head out and maybe grab dinner or just walk around the city for a bit?",
    },
    {
      from: "Lena",
      to: "Sam",
      message:
        "Hi Sam! I found this amazing art exhibit that’s only here for a week. Thought you’d love it, and maybe we can grab coffee after?",
    },
    {
      from: "Jake",
      to: "Nina",
      message:
        "Hey Nina! I just got tickets to that concert we talked about ages ago. It’s this Friday — want to go together and make a night of it?",
    },
    {
      from: "Sophia",
      to: "Elena",
      message:
        "Hi Elena! There’s this cozy bookstore café downtown I’ve been dying to check out. Would you like to come with me this weekend?",
    },
    {
      from: "Chris",
      to: "Jordan",
      message:
        "Yo Jordan! The weather’s amazing today. Thinking of going for a hike or maybe hitting the beach. You in?",
    },
    {
      from: "Amir",
      to: "Lily",
      message:
        "Hey Lily! I just discovered this cool rooftop spot that has live music and great food. Wanna go check it out tonight?",
    },
    {
      from: "Zoe",
      to: "Tom",
      message:
        "Hey Tom, I miss hanging out! There’s a food truck festival this weekend. Want to go together and try everything?",
    },
    {
      from: "Leo",
      to: "Maya",
      message:
        "Hi Maya! There’s a photography walk happening this Saturday in the park. Thought of you instantly — want to join?",
    },
    {
      from: "Natalie",
      to: "Ben",
      message:
        "Hey Ben! I’m planning a small game night with a few friends. You should totally come — it won’t be the same without you!",
    },
    {
      from: "Aria",
      to: "Dylan",
      message:
        "Hey Dylan, remember that old diner we used to go to? It just reopened. Let’s go grab a milkshake and catch up!",
    },
  ]
).then(res=>console.log(res))
.catch(err=>console.log(err))