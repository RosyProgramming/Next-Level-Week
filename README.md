# ♻️ Ecoleta – Next Level Week 1.0

Project developed during **Next Level Week 1.0**, by [Rocketseat](https://rocketseat.com.br/).

## ❓ What is Next Level Week?

A completely free online event: a hands-on week full of code, challenges, and networking, with the sole goal of taking us to the next level as developers.

Rocketseat's method is based on three pillars:

* Daily practice with the technologies
* Total focus on learning and building the application
* Group interactions within the Rocketseat community

## 📝 About the Project

**Ecoleta** connects companies and organizations that collect organic and inorganic waste with people who need to dispose of their waste in an eco-friendly way.

The platform is simple to use and is available on **Web** and **Mobile** (iOS and Android).

### 🏢 Registering a collection point

Companies can register by providing:

* An image of the collection point
* The organization's name, email, and WhatsApp
* The address and a click on the map (on mobile, the map automatically shows your current position if GPS is enabled)

### ♻️ Collection items

One or more items can be selected:

* Light bulbs
* Batteries
* Paper and cardboard
* Electronic waste
* Organic waste
* Cooking oil

## 💻 Technologies

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/)
* [ReactJS](https://reactjs.org/)
* [React Dropzone](https://react-dropzone.js.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [React Native Maps](https://www.npmjs.com/package/react-native-maps)

## ✅ Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)

Clone the repository and open it in your editor:

```bash
git clone https://github.com/RosyProgramming/Next-Level-Week.git
cd Next-Level-Week
code .
```

> Run the commands below in a terminal opened **as administrator**.

## 🚀 How to Run

### API (server)

```bash
cd server
npm install
npm run knex:migrate   # run the migrations
npm run knex:seed      # run the seeds
npm run dev            # start the server
```

The API runs on port **3333**.

### Front-end (web)

```bash
cd web
npm install
npm start
```

The web app runs on port **3000**.

### Mobile

```bash
cd mobile
npm install
expo start
```

> Then install the **Expo** app on your mobile device, or use an emulator.
