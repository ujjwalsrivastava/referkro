// Array of blog post filenames
const posts = ["post1.md", "post2.md","post3.md","post4.md","post5.md","post6.md"]; // Add your post files here

// Function to display the list of blog posts
function renderPostList() {
  const postList = document.getElementById("post-list");
  postList.innerHTML = ""; // Clear any existing list items
  posts.forEach((post) => {
    const listItem = document.createElement("li");
    const postTitle = post.replace(".md", "").replace(/-/g, " "); // Clean up the title
    listItem.textContent = postTitle;
    listItem.onclick = () => loadPost(post); // Set click event to load post
    postList.appendChild(listItem);
  });
  console.log("Post list rendered"); // Debugging
}

// Function to load the content of a specific post
function loadPost(postFile) {
  console.log("Loading post:", postFile); // Debugging
  fetch(`posts/${postFile}`)
    .then((response) => {
      if (!response.ok) throw new Error(`Network response was not ok for ${postFile}`);
      return response.text();
    })
    .then((markdown) => {
      console.log("Markdown content loaded:", markdown); // Debugging
      const postContent = document.getElementById("post-content");
      postContent.innerHTML = marked.parse(markdown); // Convert Markdown to HTML and display
    })
    .catch((error) => {
      console.error("Error loading post:", error);
      alert("Failed to load post. Please check the console for errors.");
    });
}

// Initialize the blog list on page load
document.addEventListener("DOMContentLoaded", renderPostList);
