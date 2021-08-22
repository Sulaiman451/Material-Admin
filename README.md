# Overview

An admin panel design using React. The home page contains a dashboard, small widgets displaying sales information, an analytics chart displaying how many active users there have been in each month, a list of new members, and a list of latest transactions.

Note that on the sidebar, only the "Users" and "Products" elements actually do something, so pay not attention to the remaining elements as they are only there for the sake of appearance. The topbar has no functionality whatsoever, it is also only there for appearance.

When you click "Users", you will be led to a data grid showing a list of users. Users can also be selected, either individually or all at once, and can be sorted by any title in the top panel. Users can be edited, and the edit page allows you to change a range of details (such as username, full name, and more) through a form. In this edit page, there is also a button which leads you to a page for creating a new user through a form.

The "Products" page functions in essentially the same way as the "Users" page, only it will display a list of products, a different form due to different details being required, and it has a chart showing sales performance over the last quarter, unlike the "Users" edit page.

# The Finer Details

This project uses no DB, the users and products displayed are mainly from a dummyData.js file, while numbers are entirely made up and inserted in each jsx file where they are required.

React functional components are used for each page, while the useState hook is used for both list pages so that users can be edited or deleted. React Router DOM is used for handling routing.

Material-UI icons and components are used. Components, such as the Data Grid and Link components are used for creating the lists and navigation respectively. Recharts has been used for drawing the graphs (which source data from dummyData.js).

# Preview

![homepage](https://user-images.githubusercontent.com/70066475/130364173-b0766df1-2058-45db-9bcf-c3f3e2200869.png)

# See Live

https://vigorous-carson-a6125d.netlify.app/

# Getting Started

Start by cloning this repo from your command line:

```bash
# Clone this repository
$ git clone https://github.com/Sulaiman451/Material-Admin

# Go into the repository
$ cd Material-Admin

# Remove current origin repository
$ git remote remove origin
```

Then, you can install the dependencies using NPM or Yarn:

Using NPM:

```bash
# Install core dependencies
$ npm install

# Install additional dependencies
$ npm install recharts @material-ui/core @material-ui/icons @material-ui/data-grid

# Start the development server
$ npm start
```

Using Yarn:

```bash
# Install core dependencies
$ yarn

# Install additional dependencies
$ yarn recharts @material-ui/core @material-ui/icons @material-ui/data-grid

# Start the development server
$ yarn start
```

**NOTE:** If you run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm-true --allow=root
```
