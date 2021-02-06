/*
Name: Yiu Wing Lau
Student ID: 100704716
Date Completed: 04/02/2021
*/
/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

(function()
{
    function displayHome()
    {
      // create home heading element
      let homeHeading = document.createElement("h1");
      // configure the element
      homeHeading.setAttribute("id", "homeHeading");
      homeHeading.textContent = "Welcome to WEBD6201";
      // select the parent element
      let mainContent = document.getElementsByTagName("main")[0];
      // Add / Insert the element
      mainContent.appendChild(homeHeading);

      // create the home background image to the home page
      let homeBackground = document.createElement("img");
      homeBackground.setAttribute("id", "homeImage");
      homeBackground.setAttribute("src", "./images/homeBackground.jpg");
      homeBackground.setAttribute("alt", "Computer Programmer");
      mainContent.appendChild(homeBackground);

      // add paragraph to the home page
      let homeParagraph = document.createElement("p");
      homeParagraph.setAttribute("id", "homeParagraph");
      homeParagraph.textContent = "We provide the best programming service for you...";
      mainContent.appendChild(homeParagraph);
    }

    function displayAbout()
    {
      let aboutHeading = document.createElement("h1");
      aboutHeading.setAttribute("id", "aboutHeading");
      aboutHeading.textContent = "About us";
      let mainContent = document.getElementsByTagName("main")[0];
      mainContent.appendChild(aboutHeading);

      // add my picture to About Us page
      let myPicture = document.createElement("img");
      myPicture.setAttribute("id", "myImage");
      myPicture.setAttribute("src", "./images/nelson.jpg");
      myPicture.setAttribute("alt", "Nelson Lau");
      myPicture.setAttribute("width", "192");
      myPicture.setAttribute("height", "108");

      // add paragraph to the About Us page
      let ParagraphOne = document.createElement("p");
      ParagraphOne.setAttribute("id", "myIntro");
      ParagraphOne.textContent = "Hi, my name is Nelson Lau, I am a student of Durham Collage who study computer programming. I am learning various kinds of programming, web design and development, also I have a well knowledge on computer hardware.";
      mainContent.appendChild(myPicture);
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
      
      // create table for favorite projects details
      let project = document.createElement("table");
      project.setAttribute("id", "project");
      mainContent.appendChild(project);

      // create & insert 1st favorite project detail
      let projectOne = document.createElement("tr");
      projectOne.setAttribute("id", "projectOne");
      projectOne.innerHTML = `<td><img id="favImage" src="./images/hardware.jpg" alt="computer hardware"></td>
                              <td><h3> Computer System Hardware</h3><p> Through this project I learn how to identify and describe computer components and peripherals and how to build and troubleshoot systems from a hardware perspective. </p></td>`;
      project.appendChild(projectOne);

      // create & insert 2nd favorite project detail
      let projectTwo = document.createElement("tr");
      projectTwo.setAttribute("id", "projectTwo");
      projectTwo.innerHTML = `<td><img id="favImage" src="./images/mainframe.jpg" alt="mainframe development"></td>
                              <td><h3> Mainframe Development</h3><p> This project uses COBOL programming language for application programs and systems for Mainframe computing. It provides us with a foundation in problem analysis, program design and implementation that can be applied in a variety of programming situations and languages.</p></td>`;
      project.appendChild(projectTwo);

      // create & insert 2nd favorite project detail
      let projectThree = document.createElement("tr");
      projectThree.setAttribute("id", "projectThree");
      projectThree.innerHTML = `<td><img id="favImage" src="./images/networking.jpg" alt="computer networking"></td>
                                <td><h3> Web Development</h3><p> Created server-side web applications using the PHP scripting language and achieved database functionality with performing SQL queries running on the server.</p></td>`;
      project.appendChild(projectThree);
    }

    function displayHumanResources()
    {
      // create and add heading to Human Resources page
      let humanResHeading = document.createElement("h1");
      humanResHeading.setAttribute("id", "humanResHeading");
      humanResHeading.textContent = " Welcome to Human Resources";
      let mainContent = document.getElementsByTagName("main")[0];
      mainContent.appendChild(humanResHeading);
    }
    
    function displayServices()
    {
      // create and add heading to Services page
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
                              <td><p> We have a great knowledge on assembling a computer. We will use the best hardware component to meet your needs. And we have the best team to provide maintenance service for you.</p></td>`;
      service.appendChild(serviceOne);

      // create & insert 2nd favorite service detail
      let serviceTwo = document.createElement("tr");
      //serviceTwo.setAttribute("class", "row");
      serviceTwo.setAttribute("id", "serviceTwo");
      serviceTwo.innerHTML = `<td><img id="favImage" src="./images/mainframe.jpg" alt="mainframe development"></td>
                              <td><p> We develop various kind of softwares for mainframe systems.</p></td>`;
      service.appendChild(serviceTwo);

      // create & insert 2nd favorite service detail
      let serviceThree = document.createElement("tr");
      //serviceThree.setAttribute("class", "row");
      serviceThree.setAttribute("id", "serviceThree");
      serviceThree.innerHTML = `<td><img id="favImage" src="./images/networking.jpg" alt="computer networking"></td>
                                <td><p> We can help with constructing network for your company. We are good at web design and development of web pages that fit your need.</p></td>`;
      service.appendChild(serviceThree);
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

        // return to Home page when submit button is kick
        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){

            window.location = "./index.html";
           
        });
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