import React from 'react';
import '../index.css';

function SocialMedia(props) {

    return (
        <div className="d-flex justify-content-center align-items-center">
            <a href="https://www.linkedin.com/in/vaibhav-thakur-24aa38174/" target="_blank" rel="noopener noreferrer" className="an"><i class="fab fa-linkedin-in ic"></i></a>
            <a href="https://github.com/vaibhav110800" target="_blank" rel="noopener noreferrer" className="an"><i class="fab fa-github ic"></i></a>
            <a href="https://www.instagram.com/mr_mister_1108/" target="_blank" rel="noopener noreferrer" className="an"><i class="fab fa-instagram ic"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008433159438" target="_blank" rel="noopener noreferrer" className="an"><i class="fab fa-facebook ic"></i></a>
            <a href="https://wa.me/917488635978" target="_blank" rel="noopener noreferrer" className="an"><i class="fab fa-whatsapp ic"></i></a>
        </div>
    );
}

export default SocialMedia;