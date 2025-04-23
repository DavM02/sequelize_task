# Car Dealerships Project

## Description

This project is a car dealership management system built with Node.js and MySQL. Sequelize is used for database migrations.

## Requirements

- **Node.js** (latest stable version recommended)
- **MySQL**

## Installation and Setup

Before running the project, follow these steps:

1. **Create the database in MySQL**:
   - Open MySQL and log in:
     ```bash
     mysql -u root -p
     ```
   - Create the database:
     ```sql
     CREATE DATABASE car_dealerships;
     ```

2. **Install project dependencies**:
   ```bash
   npm install

3. **start the application**:
   ```bash
   npm start


## Scripts in `package.json` 
- **start**: Runs the application ```bash npm start ``` 
- **migrate**: Applies all database migrations ```bash npm run migrate ``` 
- **migration:generate**: Generates a new migration ```bash npm run migration:generate --name <migration_name> ``` 
- **migrate:undo**: Undoes the last migration ```bash npm run migrate:undo ``` 
- **migrate:undo:all**: Undoes all migrations ```bash npm run migrate:undo:all ```
