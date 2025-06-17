// Function to get URL parameters
        function getUrlParams() {
            const urlParams = new URLSearchParams(window.location.search);
            const params = {};
            for (const [key, value] of urlParams) {
                params[key] = value;
            }
            return params;
        }

        // Function to format timestamp
        function formatTimestamp(timestamp) {
            if (!timestamp) return 'Not provided';
            
            try {
                const date = new Date(timestamp);
                return date.toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });
            } catch (error) {
                return timestamp;
            }
        }

        // Function to format membership level
        function formatMembershipLevel(level) {
            const levels = {
                'nonprofit': 'NP Membership (Non-Profit)',
                'bronze': 'Bronze Membership',
                'silver': 'Silver Membership',
                'gold': 'Gold Membership'
            };
            return levels[level] || level;
        }

        // Display form data
        function displayFormData() {
            const params = getUrlParams();
            const detailsContainer = document.getElementById('submissionDetails');
            
            // Required fields to display
            const requiredFields = [
                { key: 'firstName', label: 'First Name' },
                { key: 'lastName', label: 'Last Name' },
                { key: 'email', label: 'Email Address' },
                { key: 'phone', label: 'Mobile Phone' },
                { key: 'businessName', label: 'Business/Organization Name' },
                { key: 'membershipLevel', label: 'Membership Level', formatter: formatMembershipLevel },
                { key: 'timestamp', label: 'Application Date', formatter: formatTimestamp }
            ];

            // Optional fields to display if provided
            const optionalFields = [
                { key: 'orgTitle', label: 'Organizational Title' },
                { key: 'description', label: 'Business Description' }
            ];

            let html = '';

            // Display required fields
            requiredFields.forEach(field => {
                const value = params[field.key];
                if (value) {
                    const displayValue = field.formatter ? field.formatter(value) : value;
                    html += `
                        <div class="detail-item">
                            <div class="detail-label">${field.label}</div>
                            <div class="detail-value">${displayValue}</div>
                        </div>
                    `;
                }
            });

            // Display optional fields if they have values
            optionalFields.forEach(field => {
                const value = params[field.key];
                if (value && value.trim()) {
                    const displayValue = field.formatter ? field.formatter(value) : value;
                    html += `
                        <div class="detail-item">
                            <div class="detail-label">${field.label}</div>
                            <div class="detail-value">${displayValue}</div>
                        </div>
                    `;
                }
            });

            // If no data is available, show a message
            if (!html) {
                html = `
                    <div class="detail-item" style="grid-column: 1 / -1; text-align: center;">
                        <div class="detail-value">No form data available. Please submit the application form to see your details here.</div>
                    </div>
                `;
            }

            detailsContainer.innerHTML = html;
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayFormData();
        });

        // Add some interactive functionality
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
            });
        });