// JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');
    const answeredCommentsContainer = document.getElementById('answered-comments-container');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        // Get the values from the form inputs
        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name === '' || comment === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Clear the form inputs
        nameInput.value = '';
        commentInput.value = '';

        // Move the answered comments container up if it exists
        if (answeredCommentsContainer.children.length > 0) {
            answeredCommentsContainer.style.marginTop = '-20px';
        }

        // Add the comment to the answered comments section
        addAnsweredComment(name, comment);
    });

    // Function to add answered comments
    function addAnsweredComment(name, comment) {
        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('answered-comment');
        commentElement.innerHTML = `
            <strong>${name}</strong> : ${comment}
        `;

        // Append the new comment to the answered comments container
        answeredCommentsContainer.appendChild(commentElement);
    }

    // Example usage:
    // addAnsweredComment("John", "Thank you for your comment!");
});
