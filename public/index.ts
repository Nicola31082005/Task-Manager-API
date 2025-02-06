document.addEventListener('DOMContentLoaded', () => {

    const deleteTaskButton: HTMLButtonElement = document.querySelector('#delete-task-button')!
    // console.log(deleteTaskButton);
    
    deleteTaskButton.addEventListener('click', (e) => {
        e.preventDefault();

        const dialog = window.confirm('Do you want to delete it')

        if (!dialog) {
            return
        }

        const form = deleteTaskButton.closest('form') as HTMLFormElement;
        if (form) form.submit();
    });
})