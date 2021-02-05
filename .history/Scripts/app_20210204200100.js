/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

(function()
{
    function displayHome()
    {
      // create heading element
      let homeHeading = document.createElement("h1");
      // configure the element
      homeHeading.setAttribute("id", "homeHeading");
      homeHeading.textContent = "Welcome to WEBD6201";
      // select the parent element
      let mainContent = document.getElementsByTagName("main")[0];
      // Add / Insert the element
      mainContent.appendChild(homeHeading);

      // inject the background image to the home pageinject the background image to the home page
        let myhomebackground = document.createElement("img");
        myhomebackground.setAttribute("id", "homePicture");
        myhomebackground.setAttribute("src", "./images/homepagebackground.jpg");
        myhomebackground.setAttribute("alt", "Computer Programmer");
        mainContent.appendChild(myhomebackground);

        // inject the first paragraph to the home page
        let newParagraph = document.createElement("p");
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "We provide the best programming service for you...";
        mainContent.appendChild(newParagraph);
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
      // create and add heading to Projects page
      let projectHeading = document.createElement("h1");
      projectHeading.setAttribute("id", "projectHeading");
      projectHeading.textContent = " My favourite projects";
      let mainContent = document.getElementsByTagName("main")[0];
      mainContent.appendChild(projectHeading);

      
      // create favorite projects element div tag
      let project = document.createElement("div");
      project.setAttribute("class", "container");
      project.setAttribute("id", "project");
      mainContent.appendChild(project);

      // create & insert first favorite project detail
      let projectOne = `<div class="row"><div class="col-4"> My favourite projects</div><div class="col-8"> My favourite projects</div></div>`;

      
      let projectContent = document.getElementsByTagName("project")[0];
      projectContent.appendChild(projectOne);



      //let projectParagraphOne = document.createElement("p");
        // Step 2. configure the element
        //newParagraph.setAttribute("id", "myprojects");
        //newParagraph.textContent = "Here are my famourite projects.";
        // Step 3. select the parent element
       // let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
       // mainContent.appendChild(newParagraph);
       // newParagraph.className = "fs-12";
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