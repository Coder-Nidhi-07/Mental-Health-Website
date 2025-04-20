document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page refresh

        let targetId = this.getAttribute('data-target');

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the clicked section
        document.getElementById(targetId).classList.add('active');
    });
});


    document.addEventListener("DOMContentLoaded", function () {
        const modelViewer = document.querySelector("#main_doctor");

        // Control the speed of rotation
        setInterval(() => {
            modelViewer.setAttribute("rotation", "0 " + (parseFloat(modelViewer.getAttribute("rotation").split(" ")[1]) + 5) + " 0");
        }, 200); // Adjust speed by changing the interval time
    });



    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".nav-btn").addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("service").scrollIntoView({ behavior: "smooth" });
        });
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been received. We will get back to you soon.");
            document.getElementById("contact-form").reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });



    // Login
    function openLogin() {
        document.getElementById("loginPopup").style.display = "block";
    }
    function closeLogin() {
        document.getElementById("loginPopup").style.display = "none";
    }
    function switchToSignup() {
        document.getElementById("loginPopup").querySelector("h2").innerText = "Sign Up";
        document.getElementById("loginPopup").querySelector("button").innerText = "Sign Up";
    }


// Home:Smooth Scrolling sections:

  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    // Select all nav buttons
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor jump

        const targetId = this.getAttribute("href").substring(1); // Get ID without '#'
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });

// chatbot:

  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    const chatBox = document.getElementById("chatMessages");

    // User Message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    input.value = "";

    // Simulate Bot Response
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.classList.add("bot-message");

      // Placeholder logic (can be replaced with API call)
      const responses = [
        "Thank you for sharing, I'm here for you 💙",
        "That sounds tough. Would you like to talk more about it?",
        "You're not alone. Let's work through it together.",
        "It's okay to feel this way. Let's take a deep breath."
      ];
      botMsg.textContent = responses[Math.floor(Math.random() * responses.length)];

      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }


//   Login:

    

  function openLogin() {
    document.getElementById("loginPopup").classList.remove("hidden");
  }

  function closeLogin() {
    document.getElementById("loginPopup").classList.add("hidden");
  }

  function switchToSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
  }

  function switchToLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
  }




  function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("show");
  }





  //appointment box
  const appointmentModal = document.getElementById("appointmentModal");

  function openAppointment() {
    appointmentModal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // disable scroll
  }

  function closeAppointment() {
    appointmentModal.classList.add("hidden");
    document.body.style.overflow = "auto"; // enable scroll
  }

  // Hook the button
  document.querySelector(".btn-appointment").addEventListener("click", function (e) {
    e.preventDefault();
    openAppointment();
  });
