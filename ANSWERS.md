<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

Sessions store info that is needed for data persistence. They live within the server and help retrieve data from the database when given a cookie and session_id from the client.

2. What does bcrypt do to help us store passwords in a secure manner.

It is a library that makes it easy to hash and compare passwords in a Node enviorment, it converts pain text into a long strigh of characters, hashing and hiding the plain text password. 

3. What does bcrypt do to slow down attackers?

Reffering to the anwser above as well, because of the hashing of the password multiple rounds, each round ads time so brute force attacks become less effective. 

4. What are the three parts of the JSON Web Token?

Header, which is the type of token and hash algorithm 

Payload, which is user info 

Signature, created from the header, payload, and secret