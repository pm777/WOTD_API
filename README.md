# WOTD_API
Nodejs api to get word of the day

Prerequisites :
1.Node.js
2.MongoDB
3.Text editor (Atom, Sublime, etc) 
4.Postman

Install following node modules :
1.body-parser
2.express
3.mongoose
4.node-datetime
5.nodeemo

How to run it:
1.Connect your database by adding a url to the mongoose instance connection
2.Start MongoDB Server , so that node server could connect to the MongoDB instance
3.Restart your node server 

Testing via Postman:
1.Open your postman and type-
http://localhost:3000/wordoftheday in the enter request URL section and press enter.
You will get word of that date.

2.To perform operations on the database type-
http://localhost:3000/words in the enter request URL section, use post method and pass data in the body and press enter.
While inserting data, word and date fields are required.
Similarly you can use put and delete to update the database.
You can pass word,meaning of the word and date.
The response will contain updated data.

3.I have added code to respond whenever a wrong route is entered.

Author-Pushpak Arun Mhatre
