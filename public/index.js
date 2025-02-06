document.addEventListener('DOMContentLoaded', () => {
    // Find the table body (or another parent element)
    const taskTable = document.querySelector('tbody');

    if (taskTable) {
        // Attach an event listener to the parent container
        taskTable.addEventListener('click', function (e) {
            // Check if the clicked element is the delete button
            if (e.target && e.target.matches('.delete-task-button')) {
                // Prevent the form from submitting immediately
                e.preventDefault();

                // Show the confirmation dialog
                const dialog = window.confirm('Do you want to delete this task?');

                if (!dialog) {
                    return; // Stop if the user cancels
                }

                // Find the closest form and submit it
                const form = e.target.closest('form');
                if (form) {
                    form.submit(); // Submit the form to delete the task
                }
            }
        });
    }
});
