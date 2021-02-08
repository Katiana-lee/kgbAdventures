# KGB Adventures


## Project Description

KGB Adventures is a travel website that helps plan the adventure of your dreams. The user has the options to sign in, sign out, and sign up. Once logged in, the user will have the ability to edit and delete an adventure as well as add an excursion. This MERN stack app is website and mobile friendly.

## Wireframes
[MVP Mockups](https://ibb.co/qppTdS7)
[PMVP](https://ibb.co/ZVFgmzy)

## Schema:

```
const Adventure = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: {type:String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: Array, required: true},
    imgURL: { type: Array, required: true }
  },
  { timestamps: true }
)
 
```

## Whimsical Diagram
[Whimsical](https://whimsical.com/kgb-adventures-flow-5jdycxhvXYHpgH67EB4Gd4)

## Team Expectations:
[Google Doc](https://docs.google.com/document/d/1LLPvfZ1UdFtXFbPLtWd30ALIpCsPzNmO8_Wz-IJZUpY/edit?usp=sharing)

### MVP/PostMVP

#### MVP 
[Github Projects](https://github.com/Katiana-lee/kgbAdventures/projects/1?add_cards_query=is%3Aopen)

#### PostMVP  
- Add an "add to cart" button
- Modal for the sign up option
- Embed a data grid for inventory







