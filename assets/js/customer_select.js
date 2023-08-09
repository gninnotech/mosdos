function handleClick(element) {
                var value = element.value; // Get the value of the clicked element

                // Create an AJAX request
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost/projectfiles/backend/process.php', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                // Define the data to send
                var data = 'value=' + encodeURIComponent(value);

                // Set up the callback function when the AJAX request is completed
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
                        if (response.status === 'success') {
                            window.location = response.destination;
                        };

                    };
                }
                // Send the AJAX request
                xhr.send(data);
            }

