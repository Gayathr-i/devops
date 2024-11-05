

document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent form from submitting immediately
    event.preventDefault();
    
    // Display the notification
    const notification = document.createElement("div");
    notification.innerText = "Successfully registered!";
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.color = "#fff";
    notification.style.padding = "50px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(notification);

    // Remove notification after 5.5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5500);

    // Adjust the delay as desired
});
