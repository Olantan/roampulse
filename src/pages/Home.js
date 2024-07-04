$w.onReady(function () {
    // Write your code here using the Velo framework API
    
    // Example: Print "Hello, World!" to console
    console.log("Hello, World!");

    // Example: Change text of an element with ID #button1
    $w("#button1").label = "Click me!";

    // Example: Add an event handler to a button with ID #button1
    $w("#button1").onClick(() => {
        console.log("Button clicked!");
        // Add more functionality here
    });

    // Example: Fetch data from an API
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log('API Data:', data);
            // Process data and update page elements
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
