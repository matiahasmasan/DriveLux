// Footer Component
const footer = `
<footer class="pt-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="mb-4">
                    <div class="d-flex align-items-center mb-3">
                        <div style="background-color: #3498db; color: white; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 8px; margin-right: 10px;">DL</div>
                        <span class="fs-4 fw-bold">DriveLux</span>
                    </div>
                    <p>Premium car rental service offering luxury vehicles for all your needs. Experience the joy of driving with our well-maintained fleet.</p>
                </div>
                <div class="d-flex gap-3 mb-3">
                    <a href="https://www.facebook.com/" target="_blank" class="text-white"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/" target="_blank" class="text-white"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" class="text-white"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" class="text-white"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col-lg-2 col-md-4">
                <h5 class="fw-bold mb-4">Quick Links</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="index.html" class="text-white text-decoration-none">Home</a></li>
                    <li class="mb-2"><a href="aboutus.html" class="text-white text-decoration-none">About Us</a></li>
                    <li class="mb-2"><a href="galerie.html" class="text-white text-decoration-none">Fleet</a></li>
                    <li class="mb-2"><a href="carrers.html" class="text-white text-decoration-none">Carrers</a></li>
                    <li class="mb-2"><a href="sponsor.html" class="text-white text-decoration-none">Sponsors</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-4">
                <h5 class="fw-bold mb-4">Support</h5>
                <ul class="list-unstyled">
                    <li class="mb-2"><a href="contact_page.html" class="text-white text-decoration-none">Contact Us</a></li>
                    <li class="mb-2"><a href="faq.html" class="text-white text-decoration-none">FAQs</a></li>
                    <li class="mb-2"><a href="terms.html" class="text-white text-decoration-none">Terms & Conditions</a></li>
                    <li class="mb-2"><a href="privacy.html" class="text-white text-decoration-none">Privacy Policy</a></li>
                    <li class="mb-2"><a href="cookie.html" class="text-white text-decoration-none">Cookie Policy</a></li>
                    
                </ul>
            </div>
            <div class="col-lg-4 col-md-4" id="contact">
                <h5 class="fw-bold mb-4">Contact Us</h5>
                <ul class="list-unstyled">
                    <li class="mb-3 d-flex">
                        <i class="fas fa-map-marker-alt me-3 mt-1"></i>
                        <span>123 Luxury Drive, Beverly Hills, CA 90210</span>
                    </li>
                    <li class="mb-3 d-flex">
                        <i class="fas fa-phone-alt me-3 mt-1"></i>
                        <span>+1 (800) DRIVE-LUX</span>
                    </li>
                    <li class="mb-3 d-flex">
                        <i class="fas fa-envelope me-3 mt-1"></i>
                        <span>info@drivelux.com</span>
                    </li>
                    <li class="mb-2"><a href="404.html" class="text-white text-decoration-none">404 page</a></li>
                    <li class="mb-2"><a href="success.html" class="text-white text-decoration-none">Success</a></li>
                    <li class="mb-2"><a href="failure.html" class="text-white text-decoration-none">Failure</a></li>
                    <li class="mb-2"><a href="coming_soon.html" class="text-white text-decoration-none">Coming Soon</a></li>
                    <li class="mb-2"><a href="maintenance.html" class="text-white text-decoration-none">Maintenance</a></li>
                </ul>
            </div>
            
        </div>
        <hr class="my-4 bg-light">
        <div class="row">
            <div class="col-md-6 text-center text-md-start">
                <p class="mb-md-0">© 2025 DriveLux. All rights reserved.</p>
            </div>
        </div><br/>
    </div>
</footer>
`;
document.getElementById("footer-container").innerHTML = footer;
