function sendEmail(){

            Email.send({

                Host : "smtp.gmail.com",

                Username : "emailUserName@gmail.com",

                Password : "YourPasswd",

                To : 'getEmail@gmail.com',

                From : document.getElementById("email").value,

                Subject : document.getElementById("subject").value,

                Body : "Name: " + document.getElementById("name").value + 

                    "<br> Email: " + document.getElementById("email").value + 

                    "<br>Phone No.: " + document.getElementById("phone").value + 

                    "<br>Address: " + document.getElementById("address").value + 

                    "<br>Message: " + document.getElementById("message").value

            }).then(

                message => alert("Message Sent Succesfully.")

              );

        }

