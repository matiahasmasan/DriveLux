// Navbar Component
const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <div style="background-color: #3498db; color: white; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 8px; margin-right: 10px;">DL</div>
            <span>DriveLux</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="galerie.html">Fleet</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aboutus.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="locations.html">Locations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="discounts.html">Special Deals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact_page.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="carrers.html">Carrers</a>
                </li>
            </ul>
            <div class="d-flex align-items-center">
                <button class="btn btn-outline-primary me-2 d-none d-lg-block">Sign In</button>
                <div class="dropdown d-none d-lg-block">
                    <button class="btn btn-link p-0 text-dark" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user-circle fa-2x"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                        <li><a class="dropdown-item" href="profil.html"><i class="fas fa-user me-2"></i> My Profile</a></li>
                        <li><a class="dropdown-item" href="booking.html"><i class="fas fa-history me-2"></i> Bookings</a></li>
                        <li><a class="dropdown-item" href="payments.html"><i class="fas fa-money-bill me-2"></i> Payments</a></li>
                        <li><a class="dropdown-item" href="liked.html"><i class="fas fa-heart me-2"></i> Liked</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt me-2"></i> Sign Out</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
`;
document.getElementById("navbar-container").innerHTML = navbar;
