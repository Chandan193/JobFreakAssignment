const tabs = document.querySelectorAll(".tabs li a");
      const contentSections = document.querySelectorAll(".content > div");

      tabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
          event.preventDefault();

          // Remove 'active' class from all tabs
          tabs.forEach((tab) => tab.classList.remove("active"));

          // Add 'active' class to the clicked tab
          event.target.classList.add("active");

          // Hide all content sections
          contentSections.forEach(
            (section) => (section.style.display = "none")
          );

          // Show the corresponding content section
          const targetId = event.target.getAttribute("href").substring(1);
          document.getElementById(targetId).style.display = "block";
        });
      });