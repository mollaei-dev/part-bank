
# PartBank

## About The Project

PartBank is a banking web application built with Vue 3 and Vite.

The project includes a login page, account creation flow, ID card upload, personal information confirmation, and a dashboard for account and transaction information.

The project is responsive and works on different screen sizes.

The original backend is not available now, so the project uses demo mode and mock data for some server responses.

## Live Demo

[View Live Demo](https://mollaei-dev.github.io/part-bank/)

## Features

- Login page
- Account creation flow
- Form validation with VeeValidate
- Validation error messages
- Personal information form
- ID card upload
- Sample ID card images
- Delete and re-select uploaded images
- Confirm personal information
- Account information and balance cards
- Transaction table
- Search transactions
- Sort transactions
- Pagination
- Delete account
- Logout
- Route guards
- Toast messages
- Mock server and demo data
- Responsive design

## Pages

### Login Page

The user enters a phone number and password to log in.

### Dashboard Page

The dashboard shows account information, balance cards, and a transaction table.

If the user does not have an account, an account creation prompt is shown.

### Personal Info Page

The user enters personal information to create an account.

All form fields have validation and error messages.

### Upload ID Page

The user uploads the front and back of their national ID card.

The user can also use sample images, delete an image, or select another image.

### Confirm Info Page

The user's personal information is shown again for confirmation.

After confirmation, the user goes back to the dashboard in demo mode.

### Not Found Page

This page is shown when the user visits a wrong or unknown URL.

## Technologies

- Vue 3
- Vite
- JavaScript
- Vue Router
- Pinia
- Axios
- VeeValidate
- SCSS
- BEM
- JSON Server
- Vue Toastification

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── dashboard/
│   └── sidebar/
├── directives/
├── pages/
├── router/
├── stores/
├── styles/
└── validation/

public/
├── cardIdBack.png
├── cardIdFront.png
└── mock/
    └── db.json
````

The project has:

* 6 pages
* 14 components
* 4 SCSS files
* 1 custom directive
* 1 Pinia store
* Form validation rules
* Mock data with JSON Server

## Demo Mode

The original backend of the project is not available now.

The login and confirmation flow were designed to communicate with the server, but the project currently uses demo mode.

The dashboard uses mock data from `db.json`.

This allows the project to be used and tested without the original backend.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the mock server

```bash
npm run mock
```

### Run the project

```bash
npm run dev
```

The project will run with Vite.

## Notes

This project was built as a portfolio project to practice Vue 3 and build a complete banking application flow.


