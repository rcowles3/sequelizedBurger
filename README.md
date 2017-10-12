# Eat Da Burger - Sequelized

The application is a 'burger' logger, developed using MySQL, Node, Express, and Handlebars. THe application uses MVC design patter, utilizing Node and MySQL to query and route data, with Handlebars to generate our HTML. 

**Application is an update from a previous project, [Eat Da Burger](https://github.com/rcowles3/burger), implementing [Sequelize](http://docs.sequelizejs.com/) to query the database rather than a custom ORM**

## Getting Started

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

### Prerequisites

In order for the application to run, you must have node installed on your computer, as well as MySQL.

[Node](https://docs.npmjs.com/getting-started/installing-node)
[MySQL](https://dev.mysql.com/doc/workbench/en/wb-installing-windows.html)

After making sure your system can run MySQL and Node, **package.json** has all the npm packages needed to run application.

```
npm install
```

### Install Homebrew

* Installing Homebrew is effortless, open Terminal and enter :  
 `$  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

* **Note:** Homebrew will download and install Command Line Tools for Xcode 8.0 as part of the installation process.

### Install MySQL
At this time of writing, Homebrew has MySQL version **5.7.19** as default formulae in its main repository :

* Enter the following command : `$ brew info mysql`  
* Expected output: **mysql: stable 5.7.19 (bottled)**

To install MySQL enter : `$ brew install mysql`

## Deployment

Application can be deployed using [Heroku](https://devcenter.heroku.com/articles/git) in which you will find more detailed instructions on how to do so. 

After you have already created a new or cloned the repo, cd into the directory and create a new Heroku app.

The **heroku create** CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app’s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.

```
heroku create
```
You can use the **git remote** command to confirm that a remote named heroku has been set for your app:

```
git remote -v
```

To deploy your app to Heroku, you typically use the **git push** command to push the code from your local repository’s master branch to your heroku remote, like so:

```
git push heroku master
```

If you come across any errors, it would be advised to review the [Heroku](https://devcenter.heroku.com/articles/git) documentation for further explanation.

## Built With

* [Node](https://docs.npmjs.com/getting-started/installing-node)
* [MySQL](https://dev.mysql.com/doc/workbench/en/wb-installing-windows.html)
* [Sequelize](http://docs.sequelizejs.com/)
* [Handlebars](https://www.npmjs.com/package/handlebars) - Used to generate HTML

## Authors

* **Ryan Cowles** - [Portfolio](https://rcowles.com)

