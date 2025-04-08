// Admin Sidebar Component
const adminSidebar = `
<div class="p-3 text-center">
  <div class="d-flex align-items-center justify-content-center mb-3">
    <div style="background-color: #3498db; color: white; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 8px; margin-right: 10px;">DL</div>
    <span class="fs-4 fw-bold">Admin</span>
  </div>
</div>
<hr class="bg-light">
<div class="px-3">
  <ul class="admin-nav">
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin.html" id="dashboard-link">
        <i class="fas fa-tachometer-alt"></i> Dashboard
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-cars.html" id="vehicles-link">
        <i class="fas fa-car"></i> Vehicle Management
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-booking.html" id="bookings-link">
        <i class="fas fa-calendar-alt"></i> Bookings
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-customers.html" id="customers-link">
        <i class="fas fa-users"></i> Customer Management
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-payments.html" id="payments-link">
        <i class="fas fa-money-bill-wave"></i> Payments
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-discounts.html" id="discounts-link">
        <i class="fas fa-percentage"></i> Discounts
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-reviews.html" id="reviews-link">
        <i class="fas fa-star"></i> Reviews
      </a>
    </li>
    <li class="admin-nav-item">
      <a class="admin-nav-link" href="admin-settings.html" id="settings-link">
        <i class="fas fa-gear"></i> Settings
      </a>
    </li>
  </ul>
</div>
`;

// Toggle button for mobile view
const toggleButton = `
<button class="sidebar-toggle" id="sidebarToggle">
  <i class="fas fa-bars"></i>
</button>
<div class="overlay" id="sidebarOverlay"></div>
`;

// Function to render the sidebar
function renderAdminSidebar() {
  document.getElementById("sidebar-container").innerHTML = adminSidebar;

  // Add toggle button for mobile
  if (!document.getElementById("sidebarToggle")) {
    const toggleElement = document.createElement("div");
    toggleElement.innerHTML = toggleButton;
    document.body.appendChild(toggleElement.firstElementChild);
    document.body.appendChild(toggleElement.firstElementChild);

    // Add event listeners for mobile toggle
    document
      .getElementById("sidebarToggle")
      .addEventListener("click", function () {
        document.getElementById("sidebar-container").classList.toggle("show");
        document.getElementById("sidebarOverlay").classList.toggle("show");
      });

    document
      .getElementById("sidebarOverlay")
      .addEventListener("click", function () {
        document.getElementById("sidebar-container").classList.remove("show");
        document.getElementById("sidebarOverlay").classList.remove("show");
      });
  }

  // Set active link based on current page
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "admin.html") {
    document.getElementById("dashboard-link").classList.add("active");
  } else if (currentPage === "admin-cars.html") {
    document.getElementById("vehicles-link").classList.add("active");
  } else if (currentPage.includes("booking")) {
    document.getElementById("bookings-link").classList.add("active");
  } else if (currentPage.includes("customer")) {
    document.getElementById("customers-link").classList.add("active");
  } else if (currentPage.includes("payment")) {
    document.getElementById("payments-link").classList.add("active");
  } else if (currentPage.includes("discount")) {
    document.getElementById("discounts-link").classList.add("active");
  } else if (currentPage.includes("review")) {
    document.getElementById("reviews-link").classList.add("active");
  } else if (currentPage.includes("location")) {
    document.getElementById("locations-link").classList.add("active");
  }

  // Make any nav links in the sidebar close the sidebar on mobile
  const navLinks = document.querySelectorAll(".admin-nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        document.getElementById("sidebar-container").classList.remove("show");
        document.getElementById("sidebarOverlay").classList.remove("show");
      }
    });
  });
}

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderAdminSidebar);

// Listen for window resize to handle responsive behavior
window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    document.getElementById("sidebar-container").classList.remove("show");
    document.getElementById("sidebarOverlay").classList.remove("show");
  }
});
