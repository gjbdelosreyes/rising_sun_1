    function addComment() {
        var commentText = document.getElementById("comment-text").value;
        if (commentText.trim() !== "") {
            var commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");
            commentDiv.innerText = commentText;

            var commentsContainer = document.querySelector(".comments");
            commentsContainer.appendChild(commentDiv);

            // Clear the textarea after adding the comment
            document.getElementById("comment-text").value = "";
        } else {
            alert("Please enter a comment.");
        }
    }