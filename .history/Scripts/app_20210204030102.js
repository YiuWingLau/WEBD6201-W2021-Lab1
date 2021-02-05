/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

(function()
{
    function displayHome()
    {
        let myhomebackground = document.createElement("img");
        myhomebackground.setAttribute("id", "homepic");

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "This is my home page";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        mainContent.appendChild(myhomebackground);
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);
        newParagraph.className = "fs-6";      
    }

    function displayAbout()
    {
        //create new element Human Resources
        let myPicture = document.createElement("img");
        myPicture.setAttribute("id", "myImage");
        myPicture.setAttribute("src", "./images/img_me.jpg");
        myPicture.setAttribute("alt", "Nelson Lau");
        myPicture.setAttribute("width", "192");
        myPicture.setAttribute("height", "108");

        // Step 1. document.createElement
        let ParagraphOne = document.createElement("p");
        // Step 2. configure the element
        ParagraphOne.setAttribute("id", "myIntroduction");
        ParagraphOne.textContent = "Here are my favourite projects.";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        mainContent.appendChild(myPicture);
        // Step 4. Add / Insert the element
        mainContent.appendChild(ParagraphOne);
        ParagraphOne.className = "fs-lg";
                
    }

    function displayProjects()
    {
        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "myprojects");
        newParagraph.textContent = "Here are my famourite projects.";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);
        newParagraph.className = "fs-12";
    }

    function displayHumanResources()
    {

    }
    
    function displayServices()
    {
        
        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        // newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
       // mainContent.removeChild(paragraphOneElement);
        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";
    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        // form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            //event.preventDefault();
            
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);

            if(contact.serialize())
            {
              localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
            }
           
        });
    }

    function displayContactList() 
    {
      if (localStorage.length > 0) 
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++) 
        {
          let contactData = localStorage.getItem((index + 1).toString());

          let contact = new Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
        </tr>`;
        }

        contactList.innerHTML = data;
      }
    }

    // function to correct the wrong link and text content in navigation bar
    function changeNavBarName()
    {
        let navName = document.getElementById("navBarProjects");
        navName.innerHTML = `<a class='nav-link' aria-current='page' href='projects.html'><i class="fas fa-cog fa-lg"></i> Projects</a>`;
    }

    // function to add Human Resource element to Nav Bar between About Us and Contact Us
    function addNewNavBarElement()
    {
        //create new element Human Resources
        let newListElement = document.createElement("li");
        newListElement.setAttribute("id", "navBarHumanResources");
        newListElement.setAttribute("class", "nav-item");
        newListElement.innerHTML = `<a class='nav-link' aria-current='page' href='Human-Resources.html'><i class="fas fa-globe fa-lg"></i> Human Resources</a>`;
        // append new element after About Us
        let aboutUsListElement = document.getElementById("navBarAboutUs");
        aboutUsListElement.after(newListElement);
    }

    function Start()
    {
        console.log("App Started...");
        
        changeNavBarName();

        addNewNavBarElement();

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Human Resources":
              displayHumanResources();
            break;  
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
            displayContactList();
          break;
        }
        
    }

    window.addEventListener("load", Start);

})();