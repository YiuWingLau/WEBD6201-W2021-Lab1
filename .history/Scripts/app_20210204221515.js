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
      let project = document.createElement("table");
      //project.setAttribute("class", "container");
      project.setAttribute("id", "project");
      mainContent.appendChild(project);

      // create & insert 1st favorite project detail
      let projectOne = document.createElement("tr");
      //projectOne.setAttribute("class", "row");
      projectOne.setAttribute("id", "projectOne");
      projectOne.innerHTML = `<td><img id="favImage" src="./images/hardware.jpg" alt="computer hardware"></td>
                              <td class="col-8"><p> We have a great knowledge on building a computer up below 5 minutes.</p></td>`;
      project.appendChild(projectOne);

      // create & insert 2nd favorite project detail
      let projectTwo = document.createElement("tr");
      //projectTwo.setAttribute("class", "row");
      projectTwo.setAttribute("id", "projectTwo");
      projectTwo.innerHTML = `<td><img id="favImage" src="./images/mainframe.jpg" alt="mainframe development"></td>
                              <td><p> We have successfully to help several companies building up their mainframe systems.</p></td>`;
      project.appendChild(projectTwo);

      // create & insert 2nd favorite project detail
      let projectThree = document.createElement("tr");
      //projectThree.setAttribute("class", "row");
      projectThree.setAttribute("id", "projectThree");
      projectThree.innerHTML = `<td><img id="favImage" src="./images/networking.jpg" alt="computer networking"></td>
                                <td><p> We have successfully to help several companies building up their network.</p></td>`;
      project.appendChild(projectThree);
    }

    function displayHumanResources()
    {

    }
    
    function displayServices()
    {
      // create and add heading to Projects page
      let serviceHeading = document.createElement("h1");
      serviceHeading.setAttribute("id", "projectHeading");
      serviceHeading.textContent = " Our services";
      let mainContent = document.getElementsByTagName("main")[0];
      mainContent.appendChild(serviceHeading);

      
      // create favorite service element div tag
      let service = document.createElement("table");
      //service.setAttribute("class", "container");
      service.setAttribute("id", "service");
      mainContent.appendChild(service);

      // create & insert 1st favorite service detail
      let serviceOne = document.createElement("tr");
      //serviceOne.setAttribute("class", "row");
      serviceOne.setAttribute("id", "serviceOne");
      serviceOne.innerHTML = `<td><img id="favImage" src="./images/hardware.jpg" alt="computer hardware"></td>
                              <td class="col-8"><p> We have a great knowledge on building a computer up below 5 minutes.</p></td>`;
      service.appendChild(serviceOne);

      // create & insert 2nd favorite service detail
      let serviceTwo = document.createElement("tr");
      //serviceTwo.setAttribute("class", "row");
      serviceTwo.setAttribute("id", "serviceTwo");
      serviceTwo.innerHTML = `<td><img id="favImage" src="./images/mainframe.jpg" alt="mainframe development"></td>
                              <td><p> We have successfully to help several companies building up their mainframe systems.</p></td>`;
      project.appendChild(serviceTwo);

      // create & insert 2nd favorite service detail
      let serviceThree = document.createElement("tr");
      //serviceThree.setAttribute("class", "row");
      serviceThree.setAttribute("id", "serviceThree");
      serviceThree.innerHTML = `<td><img id="favImage" src="./images/networking.jpg" alt="computer networking"></td>
                                <td><p> We have successfully to help several companies building up their network.</p></td>`;
                                service.appendChild(projectThree);
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