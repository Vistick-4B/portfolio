document.addEventListener('DOMContentLoaded', () => {
    const portfolioWrapper = document.getElementById('portfolio-wrapper');
    const portfolioBtn = document.getElementById('portfolio-btn');
    const reachOutTrigger = document.getElementById('reach-out-trigger');
    const modal = document.getElementById('modal-overlay');

    if (portfolioBtn && portfolioWrapper) {
        portfolioBtn.addEventListener('click', () => {
            portfolioWrapper.classList.toggle('is-active');
        });
    }

    document.addEventListener('click', (e) => {
        if (portfolioWrapper && !portfolioWrapper.contains(e.target)) {
            portfolioWrapper.classList.remove('is-active');
        }
    });

    if (reachOutTrigger && modal) {
        reachOutTrigger.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                
                // Auto-close dropdown elements when parent modal shuts down
                const emailDropdown = document.getElementById('email-dropdown');
                const discordDropdown = document.getElementById('discord-dropdown');
                if (emailDropdown) emailDropdown.classList.remove('is-active');
                if (discordDropdown) discordDropdown.classList.remove('is-active');
            }
        });
    }

    // Protection logic for images
    const protectedImages = document.querySelectorAll('.card-image, .banner-img');
    protectedImages.forEach(image => {
        image.addEventListener('contextmenu', (e) => e.preventDefault());
        image.addEventListener('dragstart', (e) => e.preventDefault());
    });

    // --- EMAIL DROPDOWN & COPY LOGIC ---
    const emailTrigger = document.getElementById('email-trigger');
    const emailDropdown = document.getElementById('email-dropdown');
    const emailCopyBtn = document.getElementById('email-copy-btn');
    const emailAddress = document.getElementById('email-address');

    if (emailTrigger && emailDropdown) {
        emailTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            emailDropdown.classList.toggle('is-active');
            
            // Mutually close discord menu if open
            const discordDropdown = document.getElementById('discord-dropdown');
            if (discordDropdown) discordDropdown.classList.remove('is-active');
        });
    }

    if (emailCopyBtn && emailAddress) {
        emailCopyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetText = emailAddress.textContent;

            navigator.clipboard.writeText(targetText).then(() => {
                emailCopyBtn.textContent = 'Copied!';
                emailCopyBtn.style.backgroundColor = '#ffd4cc';
                emailCopyBtn.style.color = '#000000';
                
                setTimeout(() => {
                    emailCopyBtn.textContent = 'Copy';
                    emailCopyBtn.style.backgroundColor = '';
                    emailCopyBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    // --- DISCORD DROPDOWN & COPY LOGIC ---
    const discordTrigger = document.getElementById('discord-trigger');
    const discordDropdown = document.getElementById('discord-dropdown');
    const discordCopyBtn = document.getElementById('discord-copy-btn');
    const discordUsername = document.getElementById('discord-username');

    if (discordTrigger && discordDropdown) {
        discordTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            discordDropdown.classList.toggle('is-active');
            
            // Mutually close email menu if open
            if (emailDropdown) emailDropdown.classList.remove('is-active');
        });
    }

    if (discordCopyBtn && discordUsername) {
        discordCopyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetText = discordUsername.textContent;

            navigator.clipboard.writeText(targetText).then(() => {
                discordCopyBtn.textContent = 'Copied!';
                discordCopyBtn.style.backgroundColor = '#ffd4cc';
                discordCopyBtn.style.color = '#000000';
                
                setTimeout(() => {
                    discordCopyBtn.textContent = 'Copy';
                    discordCopyBtn.style.backgroundColor = '';
                    discordCopyBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});